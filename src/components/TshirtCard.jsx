export default function TshirtCard({ shirt }) {
    return (
        <div key={shirt.id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                    src={shirt.imageUrl}
                    alt={shirt.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-base font-semibold text-slate-800">
                        <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {shirt.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{shirt.desc}</p>
                </div>
                <p className="text-base font-medium text-slate-900 bg-slate-100 border border-slate-200 rounded-md px-3 py-1 h-fit">
                    {shirt.price}
                </p>
            </div>
        </div>
    );
}
