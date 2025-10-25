import { useState, useEffect, useRef, useCallback } from "react";
import { Icon, Menu, X } from "lucide-react";
import { barberPole } from '@lucide/lab';
import Button from "../components/Button";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
    { href: "#tshirts", label: "T-shirts" },
    { href: "#visit-us", label: "Visit Us" },
];

const SCROLL_THRESHOLD = 12;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navOffset, setNavOffset] = useState(0);
    const buttonRef = useRef(null);
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const lastScrollY = useRef(0);
    const headerHeight = useRef(0);
    const menuOpenScrollY = useRef(0);
    const ticking = useRef(false);

    const updateHeaderHeight = useCallback(() => {
        const height = headerRef.current?.offsetHeight || 0;
        headerHeight.current = height;
        setNavOffset((prev) => Math.min(Math.max(prev, 0), height));
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        updateHeaderHeight();

        let observer;
        if (typeof ResizeObserver === "function" && headerRef.current) {
            observer = new ResizeObserver(updateHeaderHeight);
            observer.observe(headerRef.current);
        }

        window.addEventListener("resize", updateHeaderHeight);
        return () => {
            window.removeEventListener("resize", updateHeaderHeight);
            observer?.disconnect();
        };
    }, [updateHeaderHeight]);

    const handleScroll = useCallback(() => {
        if (typeof window === "undefined" || ticking.current) return;

        ticking.current = true;
        window.requestAnimationFrame(() => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            lastScrollY.current = currentY < 0 ? 0 : currentY;

            if (isMenuOpen && Math.abs(currentY - menuOpenScrollY.current) > SCROLL_THRESHOLD) {
                setIsMenuOpen(false);
            }

            if (!isMenuOpen && currentY > 0) {
                setNavOffset((prev) => {
                    const height = headerHeight.current || headerRef.current?.offsetHeight || 0;
                    if (!height) return prev;
                    const next = prev + delta;
                    return Math.min(Math.max(next, 0), height);
                });
            } else {
                setNavOffset(0);
            }

            ticking.current = false;
        });
    }, [isMenuOpen]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (isMenuOpen) {
            menuOpenScrollY.current = window.scrollY;
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen, handleScroll]);

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
                        className="absolute inset-x-0 top-full grid gap-3 border-[var(--cal-border)] border-b bg-[var(--cal-bg)] p-4 text-sm sm:hidden"
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
