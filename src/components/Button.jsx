export default function Button({ as: Component = "a", variant = "primary", className = "", type, ...props }) {
    const baseClasses = "inline-block cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--btn-primary-bg)]";

    const variants = {
        primary: "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)]",
        secondary: "bg-[var(--btn-secondary-bg)] text-fg border hover:bg-[var(--cal-surface)]",
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

    const resolvedType = Component === "button" ? type ?? "button" : type;

    return <Component className={combinedClasses} type={resolvedType} {...props} />;
}
