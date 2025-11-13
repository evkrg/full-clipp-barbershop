import { useState, useEffect, useRef, useCallback } from "react";
import { Icon, Menu, X } from "lucide-react";
import { barberPole } from '@lucide/lab';
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
    { href: "#tshirts", label: "T-shirts" },
    { href: "#visit-us", label: "Visit Us" }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);

    const handleOutsideClick = useCallback((e) => {
        if (
            isMenuOpen &&
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            setIsMenuOpen(false);
            buttonRef.current?.focus();
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, [isMenuOpen, handleOutsideClick]);

    const handleKeyDown = useCallback((e) => {
        if (isMenuOpen && e.key === "Escape") {
            setIsMenuOpen(false);
            buttonRef.current?.focus();
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen, handleKeyDown]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => {
            const nextState = !prev;
            if (nextState) {
                setTimeout(() => menuRef.current?.querySelector("a")?.focus(), 0);
            } else {
                buttonRef.current?.focus();
            }
            return nextState;
        });
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header
            className="border-[var(--cal-border)] border-b bg-[var(--cal-bg)]"
        >
            <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
                <a href="#home" className="flex items-center gap-2 text-lg font-bold">
                    <Icon iconNode={barberPole} className="h-6 w-6" />
                    <span>Full Clipp</span>
                </a>

                <ul className="hidden items-center gap-6 text-sm sm:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="opacity-80 transition-opacity hover:opacity-100">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden sm:flex sm:items-center sm:gap-4">
                    <ThemeToggle />
                    <Button href="#booking" className="px-5 py-2 !rounded-md">Κλείσε ραντεβού</Button>
                </div>

                <div className="flex items-center gap-4 sm:hidden">
                    <ThemeToggle />
                    <button
                        ref={buttonRef}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[var(--cal-surface)]"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-haspopup="true"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <ul
                        id="mobile-menu"
                        ref={menuRef}
                        role="dialog"
                        aria-modal="true"
                        className="absolute inset-x-0 top-full z-50 grid gap-3 border-b bg-[var(--cal-bg)] p-4 text-sm sm:hidden"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-1 opacity-80 transition-opacity hover:opacity-100"
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button href="#booking" className="w-full text-center" onClick={closeMenu}>
                                Κλείσε ραντεβού
                            </Button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
