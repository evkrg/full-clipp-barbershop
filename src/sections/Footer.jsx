// src/sections/Footer.jsx
import { Instagram, Scissors } from 'lucide-react';
import Button from '../components/Button';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div className="flex items-center gap-2 text-lg font-bold text-slate-800">
                        <Scissors className="h-6 w-6" />
                        <span>Full Clipp</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-500 hover:text-slate-800 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-6 w-6" />
                        </a>
                        <Button href="#booking" className="px-5 py-2 !rounded-md">Book Now</Button>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Full Clipp Barbershop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}