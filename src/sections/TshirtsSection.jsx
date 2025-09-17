import { tshirtsData } from "../data.jsx";
import TshirtCard from "../components/TshirtCard";

export default function TshirtsSection() {
    return (
        <section id="tshirts" className="bg-slate-50 border-t border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="sm:flex sm:items-baseline sm:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our T-shirts</h2>
                    <p className="mt-2 text-sm text-slate-600 sm:mt-0">
                        Available for purchase at the shop.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {tshirtsData.map((shirt) => (
                        <TshirtCard key={shirt.id} shirt={shirt} />
                    ))}
                </div>
            </div>
        </section>
    );
}
