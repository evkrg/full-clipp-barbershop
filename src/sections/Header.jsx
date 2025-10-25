import { useState, useEffect, useRef } from "react";
import { Icon, Menu, X } from "lucide-react";
import { barberPole } from '@lucide/lab';
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
    { href: "#tshirts", label: "T-shirts" },
    { href: "#visit-us", label: "Visit Us" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navOffset, setNavOffset] = useState(0);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const lastScrollY = useRef(0);
    const headerHeight = useRef(0);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const updateHeight = () => {
            const height = headerRef.current?.offsetHeight || 0;
            headerHeight.current = height;
            setNavOffset((prev) => Math.min(Math.max(prev, 0), height));
        };

        updateHeight();

        if (typeof ResizeObserver === "function" && headerRef.current) {
            const observer = new ResizeObserver(updateHeight);
            observer.observe(headerRef.current);
            return () => observer.disconnect();
        }

        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;
        lastScrollY.current = window.scrollY || 0;

        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            lastScrollY.current = currentY < 0 ? 0 : currentY;

            setNavOffset((prev) => {
                if (isMenuOpen || currentY <= 0) return 0;
                if (!headerHeight.current) {
                    headerHeight.current = headerRef.current?.offsetHeight || 0;
                }
                const height = headerHeight.current || 0;
                if (!height) return 0;
                const next = prev + delta;
                if (next < 0) return 0;
                if (next > height) return height;
                return next;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            setNavOffset(0);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;

        const onKey = (e) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onClick = (e) => {
            if (!menuRef.current) return;
            if (!menuRef.current.contains(e.target) && !buttonRef.current?.contains(e.target)) {
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

    useEffect(() => {
        if (!isMenuOpen) return;
        const openY = window.scrollY;
        const onScroll = () => {
            if (Math.abs(window.scrollY - openY) > 12) setIsMenuOpen(false);
        };
        const t = setTimeout(() => window.addEventListener("scroll", onScroll, { passive: true }), 50);
        return () => {
            clearTimeout(t);
            window.removeEventListener("scroll", onScroll);
        };
    }, [isMenuOpen]);

    return (
        <header
            ref={headerRef}
            className="fixed inset-x-0 top-0 z-50 border-[var(--cal-border)] border-b bg-[var(--cal-bg)]"
            style={{ transform: `translate3d(0, -${navOffset}px, 0)` }}
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
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <ul
                        id="mobile-menu"
                        ref={menuRef}
                        className="absolute inset-x-0 top-full grid gap-3 border-[var(--cal-border)] border-b bg-[var(--cal-bg)] p-4 text-sm sm:hidden"
                    >
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block py-1 opacity-80 transition-opacity hover:opacity-100"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button href="#booking" className="w-full text-center" onClick={() => setIsMenuOpen(false)}>
                                Κλείσε ραντεβού
                            </Button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
