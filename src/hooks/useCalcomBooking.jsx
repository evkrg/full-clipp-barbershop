import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

export function useCalcomBooking() {
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        let cleanup = null;
        getCalApi().then((cal) => {
            const onBooked = () => {
                setIsBooked(true);
            };

            const register = () => {
                try {
                    cal("on", { action: "bookingSuccessful", callback: onBooked });
                } catch (e) {
                    console.error("Failed to register Cal.com event:", e);
                }
            };

            try {
                cal("on", { action: "linkReady", callback: register });
            } catch (e) {
                console.error("Failed to register linkReady event:", e);
            }

            register(); // Fallback in case linkReady already fired

            cleanup = () => {
                try {
                    cal("off", { action: "bookingSuccessful", callback: onBooked });
                    cal("off", { action: "linkReady", callback: register });
                } catch (e) {
                    console.error("Failed to clean up Cal.com events:", e);
                }
            };
        });

        return () => {
            if (cleanup) cleanup();
        };
    }, []);

    return isBooked;
}
