import { tshirtsData } from "../data.jsx";
import TshirtCard from "../components/TshirtCard";

export default function TshirtsSection() {
    return (
        <section id="tshirts" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute left-[-20%] top-[-10%] h-[45rem] w-[45rem] rounded-full bg-gradient-radial from-slate-200/35 via-slate-50/0 to-transparent blur-3xl" />
                <div className="absolute right-[-15%] bottom-[-15%] h-[35rem] w-[35rem] rounded-full bg-gradient-radial from-slate-200/30 via-slate-50/0 to-transparent blur-3xl" />
            </div>
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our T-shirts</h2>
                    <p className="mt-3 text-sm text-slate-600 sm:text-base">
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
