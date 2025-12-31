import { useCallback, useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

const LAST_BOOKING_KEY = "lastBookingUid";

export function useCalcomBooking() {
    const [isBooked, setIsBooked] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [lastBookingUid, setLastBookingUid] = useState(() => {
        if (typeof window === "undefined") return null;
        try {
            return window.sessionStorage.getItem(LAST_BOOKING_KEY);
        } catch {
            return null;
        }
    });
    const firedRef = useRef(false); // prevents duplicate handling
    const registeredRef = useRef(false);

    useEffect(() => {
        let isActive = true;
        let cleanup = () => { };
        let calRef = null;

        const onBooked = (e) => {
            if (!isActive || firedRef.current) return;
            firedRef.current = true;

            const raw = e?.detail?.data || {};
            const data = extractBookingFields(raw);
            setIsBooked(true);
            setBookingData(data);

            if (data?.uid && typeof window !== "undefined") {
                setLastBookingUid(data.uid);
                try {
                    window.sessionStorage.setItem(LAST_BOOKING_KEY, data.uid);
                } catch {
                    // Ignore storage errors
                }
            }
        };

        const register = () => {
            if (!isActive || registeredRef.current || !calRef) return;
            registeredRef.current = true;

            try {
                calRef("on", { action: "bookingSuccessful", callback: onBooked });
            } catch (err) {
                console.error("[cal] failed to register bookingSuccessful:", err);
            }
        };

        (async () => {
            try {
                calRef = await getCalApi();
            } catch (err) {
                console.error("[cal] failed to load API:", err);
                return;
            }

            if (!isActive) return;

            try {
                calRef("on", { action: "linkReady", callback: register });
            } catch (err) {
                console.error("[cal] failed to register linkReady:", err);
            }

            register();

            cleanup = () => {
                try {
                    calRef("off", { action: "bookingSuccessful", callback: onBooked });
                    calRef("off", { action: "linkReady", callback: register });
                } catch {
                    // Ignore cleanup errors
                }
            };
        })();

        return () => {
            isActive = false;
            cleanup();
        };
    }, []);

    const resetBooking = useCallback(() => {
        firedRef.current = false;
        setIsBooked(false);
        setBookingData(null);
    }, []);

    return { isBooked, bookingData, lastBookingUid, resetBooking };
}

function extractBookingFields(raw) {
    return {
        uid: raw?.booking?.uid,
        title: raw?.eventType?.title,
        startTime: raw?.booking?.startTime,
        endTime: raw?.booking?.endTime,
        name: raw?.booking?.attendees?.[0]?.name,
        notes: raw?.booking?.description,
    };
}
