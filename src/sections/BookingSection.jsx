import Cal from "@calcom/embed-react";
import ConfirmationCard from "../components/ConfirmationCard";

export default function BookingSection({ isBooked, bookingData }) {
    const heading = {
        title: isBooked ? "You're all set" : "Book an Appointment",
        description: isBooked
            ? "Review your booking details below or manage them anytime."
            : "Secure your slot in seconds. Pick a service and time that works for you.",
    };

    return (
        <section id="booking" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                    <div className="border-b border-slate-200 bg-slate-50 px-6 py-8 text-center">
                        <div className="mx-auto max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading.title}</h2>
                            <p className="mt-3 text-lg text-slate-600">{heading.description}</p>
                        </div>
                    </div>
                    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {isBooked ? (
                            <ConfirmationCard data={bookingData} />
                        ) : (
                            <Cal
                                calLink="fio-lhakhz"
                                className="w-full min-h-[780px]"
                                config={{ theme: "light" }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
