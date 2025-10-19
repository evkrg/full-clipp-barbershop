import { tshirtsData } from "../data.jsx";
import TshirtCard from "../components/TshirtCard";

export default function TshirtsSection() {
    return (
        <section id="tshirts" className="bg-[var(--cal-bg)]">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our T-shirts</h2>
                    <p className="mt-3 text-sm opacity-80 sm:text-base">
                        Διαθέσιμα για αγορά στο μαγαζί.
                    </p>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {tshirtsData.map((shirt) => (
                            <TshirtCard key={shirt.id} shirt={shirt} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
