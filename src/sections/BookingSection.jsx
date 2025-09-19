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
                    <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white px-6 py-8 text-center">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                            <div className="absolute left-[-25%] top-[-40%] h-[28rem] w-[28rem] rounded-full bg-gradient-radial from-slate-200/30 via-slate-50/0 to-transparent blur-3xl" />
                            <div className="absolute right-[-20%] bottom-[-45%] h-[24rem] w-[24rem] rounded-full bg-gradient-radial from-slate-200/20 via-slate-50/0 to-transparent blur-3xl" />
                        </div>
                        <div className="relative mx-auto max-w-2xl">
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
