export default function Button({ as: Component = "a", variant = "primary", className, ...props }) {
    const baseClasses = "inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-transform active:scale-95";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
        secondary: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50",
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

    return <Component className={combinedClasses} {...props} />;
}
