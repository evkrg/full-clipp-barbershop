import { useState, useEffect, useRef } from "react";
import { Scissors, Menu, X } from "lucide-react";
import Button from "../components/Button";

const navLinks = [
    { href: "#tshirts", label: "T-shirts" },
    { href: "#visit-us", label: "Visit Us" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    // Close on Escape
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    // Close on outside click
    useEffect(() => {
        if (!isMenuOpen) return;
        const onClick = (e) => {
            if (!menuRef.current) return;
            if (
                !menuRef.current.contains(e.target) &&
                !buttonRef.current?.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", onClick);
        document.addEventListener("touchstart", onClick);
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("touchstart", onClick);
        };
    }, [isMenuOpen]);

    // Close on scroll
    useEffect(() => {
        if (!isMenuOpen) return;
        const onScroll = () => setIsMenuOpen(false);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isMenuOpen]);

    // Return focus to button after close
    useEffect(() => {
        if (!isMenuOpen && buttonRef.current) {
            buttonRef.current.focus();
        }
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
                <a href="#home" aria-label="Home" className="flex items-center gap-2 text-lg font-bold">
                    <Scissors className="h-6 w-6" />
                    <span>Full Clipp</span>
                </a>

                <ul className="hidden items-center gap-6 text-sm sm:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-slate-600 transition-colors hover:text-slate-900">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:block">
                    <Button href="#booking" className="px-5 py-2 !rounded-md">Book Now</Button>
                </div>

                <button
                    ref={buttonRef}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 sm:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        ref={menuRef}
                        className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-md sm:hidden"
                    >
                        <ul className="grid gap-4 p-4 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="block text-slate-600 hover:text-slate-900"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <Button href="#booking" className="w-full text-center" onClick={() => setIsMenuOpen(false)}>
                                    Book Now
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
