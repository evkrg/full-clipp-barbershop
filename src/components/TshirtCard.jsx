import { useState } from "react";

export default function TshirtCard({ shirt }) {
    const width = shirt.imageWidth ?? 800;
    const height = shirt.imageHeight ?? 800;
    const aspectRatio = width / height;
    const hasBack = Boolean(shirt.imageUrlBack);

    const [showBack, setShowBack] = useState(false);

    return (
        <div key={shirt.id} className="relative">
            <div
                className={`relative w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 ${hasBack ? "cursor-pointer select-none" : ""
                    }`}
                style={{ aspectRatio }}
                onClick={() => hasBack && setShowBack((s) => !s)}
            >
                <img
                    src={showBack && hasBack ? shirt.imageUrlBack : shirt.imageUrlFront}
                    alt={`${shirt.title} (${showBack && hasBack ? "back" : "front"})`}
                    width={width}
                    height={height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-all duration-300 ease-in-out"
                />
            </div>

            {/* Details */}
            <div className="mt-4 flex justify-between gap-3">
                <div>
                    <h3 className="text-base font-semibold text-slate-800">
                        <a href="#" className="focus:outline-none underline-offset-2 hover:underline">
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
