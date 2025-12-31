import { useEffect, useState } from "react";
import Cal from "@calcom/embed-react";
import ConfirmationCard from "../components/ConfirmationCard";
import Button from "../components/Button";

const barbers = [
    { name: "Fiodor", calLink: "fio-lhakhz" },
    { name: "Andy", calLink: "andreasletsos" }
];
const STORAGE_KEY = "selectedBarberCalLink";

export default function BookingSection({ isBooked, bookingData, lastBookingUid, onResetBooking }) {
    const [selectedBarber, setSelectedBarber] = useState(() => {
        if (typeof window === "undefined") return barbers[0];
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            return barbers.find((barber) => barber.calLink === saved) || barbers[0];
        } catch {
            return barbers[0];
        }
    });

    useEffect(() => {
        if (!selectedBarber || typeof window === "undefined") return;
        try {
            window.localStorage.setItem(STORAGE_KEY, selectedBarber.calLink);
        } catch {
            // Ignore storage errors
        }
    }, [selectedBarber]);
    const handleBarberSelect = (barber) => {
        if (isBooked && onResetBooking) {
            onResetBooking();
        }
        setSelectedBarber(barber);
    };

    return (
        <section id="booking" className="py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Cut</h2>
                </div>

                <div className="mt-8 mb-10">
                    <div className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
                        {barbers.map((barber) => {
                            const isActive = selectedBarber?.name === barber.name;

                            return (
                                <Button
                                    key={barber.name}
                                    as="button"
                                    onClick={() => handleBarberSelect(barber)}
                                    variant={isActive ? "primary" : "secondary"}
                                    aria-pressed={isActive}
                                >
                                    {barber.name}
                                </Button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-10 rounded-2xl border bg-surface shadow-md">
                    <div className="px-4 py-6 sm:px-6 lg:px-8">
                        {isBooked ? (
                            <ConfirmationCard data={bookingData} onReset={onResetBooking} />
                        ) : (
                            <>
                                {lastBookingUid && (
                                    <div className="mb-4 flex justify-center sm:justify-end">
                                        <Button
                                            href={`https://cal.com/booking/${lastBookingUid}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="secondary"
                                            className="px-4 py-2 text-xs"
                                        >
                                            Διαχείριση τελευταίου ραντεβού
                                        </Button>
                                    </div>
                                )}
                                {selectedBarber && (
                                    <Cal
                                        key={selectedBarber.calLink}
                                        calLink={selectedBarber.calLink}
                                        config={{ theme: "auto" }}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
