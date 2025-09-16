// src/sections/BookingSection.jsx
import Cal from "@calcom/embed-react";
import ConfirmationCard from "../components/ConfirmationCard";

export default function BookingSection({ isBooked, bookingData }) {
    return (
        <section id="booking" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Book an Appointment</h2>
                    <p className="mt-3 text-lg text-slate-600">Secure your slot in seconds. Pick a service and time that works for you.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                    {isBooked ? (
                        <ConfirmationCard data={bookingData} />
                    ) : (
                        <Cal
                            calLink="evkrg" // Your Cal.com link
                            className="w-full min-h-[780px]"
                            config={{ theme: "light" }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}