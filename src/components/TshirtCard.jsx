import { useState } from "react";

const priceFormatter = new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export default function TshirtCard({ shirt }) {
    const width = shirt.imageWidth ?? 800;
    const height = shirt.imageHeight ?? 800;
    const aspectRatio = width / height;
    const hasBack = Boolean(shirt.imageUrlBack);

    const [showBack, setShowBack] = useState(false);
    const priceLabel =
        typeof shirt.price === "number"
            ? priceFormatter.format(shirt.price)
            : shirt.price;

    return (
        <div className="relative">
            <div
                className={`relative w-full overflow-hidden rounded-xl border border-[var(--cal-border)] bg-[var(--cal-surface)] ${hasBack ? "cursor-pointer select-none" : ""
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

            <div className="mt-4 flex justify-between gap-3">
                <div>
                    <h3 className="text-base font-semibold">{shirt.title}</h3>
                    <p className="mt-1 text-sm opacity-80">{shirt.desc}</p>
                </div>
                <p className="text-base font-medium border border-[var(--cal-border)] bg-[var(--cal-surface)] text-fg rounded-md px-3 py-1 h-fit">
                    {priceLabel}
                </p>
            </div>
        </div>
    );
}
