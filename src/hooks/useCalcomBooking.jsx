import { useEffect, useRef, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function useCalcomBooking() {
    const [isBooked, setIsBooked] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const firedRef = useRef(false); // prevents duplicate handling

    useEffect(() => {
        let cleanup = () => { };
        let calRef = null;

        (async () => {
            calRef = await getCalApi();

            const onBooked = (e) => {
                if (firedRef.current) return;
                firedRef.current = true;

                const raw = e?.detail?.data || {};
                const data = extractBookingFields(raw);
                setIsBooked(true);
                setBookingData(data);
            };

            const register = () => {
                try {
                    calRef("on", { action: "bookingSuccessful", callback: onBooked });
                } catch (err) {
                    console.error("[cal] failed to register bookingSuccessful:", err);
                }
            };

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

        return () => cleanup();
    }, []);

    return { isBooked, bookingData };
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
