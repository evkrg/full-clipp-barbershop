import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "", label = "Toggle theme" }) {
    const { theme, resolvedTheme, setTheme } = useTheme();

    const effectiveTheme = useMemo(() => {
        if (resolvedTheme === "dark" || resolvedTheme === "light") {
            return resolvedTheme;
        }
        if (theme === "dark" || theme === "light") {
            return theme;
        }
        return "light";
    }, [resolvedTheme, theme]);
    const isDark = effectiveTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`cursor-pointer ${className}`}
            aria-label={label}
            aria-pressed={isDark}
            title={label}
        >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>
    );
}
