export default function Button({ as: Component = "a", variant = "primary", className = "", ...props }) {
    const baseClasses = "inline-block cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition duration-200 active:scale-95";

    const variants = {
        primary: "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)]",
        secondary: "bg-[var(--btn-secondary-bg)] text-fg border border-[var(--cal-border)] hover:bg-[var(--cal-surface)]",
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

    return <Component className={combinedClasses} {...props} />;
}
