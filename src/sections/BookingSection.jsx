import Cal from "@calcom/embed-react";
import ConfirmationCard from "../components/ConfirmationCard";

const heading = {
    title: "Book Your Cut",
    description: "Διάλεξε υπηρεσία και ώρα που σε βολεύει.",
};

export default function BookingSection({ isBooked, bookingData }) {
    return (
        <section id="booking" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {heading.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 sm:text-base">
                        {heading.description}
                    </p>
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                        {isBooked ? (
                            <ConfirmationCard data={bookingData} />
                        ) : (
                            <Cal
                                calLink="fio-lhakhz"
                                className="min-h-[780px] w-full"
                                config={{ theme: "light" }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
