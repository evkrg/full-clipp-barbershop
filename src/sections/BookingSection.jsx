import { useState } from "react";
import Cal from "@calcom/embed-react";
import ConfirmationCard from "../components/ConfirmationCard";
// import Button from "../components/Button";

const barbers = [
    { name: "Fiodor", calLink: "fio-lhakhz" }
];

export default function BookingSection({ isBooked, bookingData }) {
    const [selectedBarber, setSelectedBarber] = useState(barbers[0]);

    return (
        <section id="booking" className="bg-[var(--cal-bg)] py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Cut</h2>
                </div>

                {/* <div className="mt-8 mb-10">
                    <div className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
                        {barbers.map((barber) => {
                            const isActive = selectedBarber?.name === barber.name;

                            return (
                                <Button
                                    key={barber.name}
                                    as="button"
                                    onClick={() => setSelectedBarber(barber)}
                                    variant={isActive ? "primary" : "secondary"}
                                    aria-pressed={isActive}
                                >
                                    {barber.name}
                                </Button>
                            );
                        })}
                    </div>
                </div> */}

                <div className="mt-10 rounded-2xl border-[var(--cal-border)] border bg-surface shadow-md">
                    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {isBooked ? (
                            <ConfirmationCard data={bookingData} />
                        ) : (
                            <>
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
