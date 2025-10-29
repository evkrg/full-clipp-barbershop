import React from 'react';
import { MapPin, Clock, Phone, Instagram, CheckCircle } from 'lucide-react';
import { workingHours } from '../data.jsx';

const InfoLine = ({ icon: Icon, children }) => (
    <div className="flex items-start gap-3 text-sm">
        <Icon className="h-5 w-5 flex-shrink-0 opacity-80" />
        <div className="leading-relaxed">{children}</div>
    </div>
);

export default function VisitUsSection() {
    return (
        <section id="visit-us" className="border-[var(--cal-border)] border-t">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Come Visit Us</h2>
                        <p className="mt-3 text-lg opacity-80">Περνάς και χωρίς ραντεβού.</p>
                    </div>
                    <div className="space-y-4">
                        <InfoLine icon={MapPin}>
                            <a href="https://maps.google.com/?cid=4870176769112496623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100 underline underline-offset-4">
                                Ιωάννου Δροσοπούλου 6, 11257 Κυψέλη, Αθήνα
                            </a>
                        </InfoLine>
                        <InfoLine icon={Clock}>
                            <ul className="grid gap-1.5 text-sm">
                                {workingHours.map((entry) => (
                                    <li
                                        key={entry.dayLabel}
                                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"
                                    >
                                        <span className="leading-tight opacity-80">
                                            {entry.dayLabel}
                                        </span>
                                        <span className="inline-flex items-center rounded-full border-[var(--cal-border)] border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide opacity-80 tabular-nums">
                                            {entry.hours}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </InfoLine>
                        <InfoLine icon={Phone}>
                            <a href="tel:+302108228684" className="opacity-80 transition-opacity hover:opacity-100 underline underline-offset-4">
                                +30 210 822 8684
                            </a>
                        </InfoLine>
                        <InfoLine icon={Instagram}>
                            <a href="https://instagram.com/fullclippbarbershop" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100 underline underline-offset-4">
                                @fullclippbarbershop
                            </a>
                        </InfoLine>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border-[var(--cal-border)] border p-8 shadow-sm">
                    <h3 className="text-lg font-semibold">Γιατί Full Clipp;</h3>
                    <ul className="mt-5 grid gap-4 text-base">
                        <li className="flex items-start gap-3 opacity-80">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Κουρέματα με ακρίβεια και στυλ, από έμπειρους barbers.</span>
                        </li>
                        <li className="flex items-start gap-3 opacity-80">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Χρησιμοποιούμε μόνο premium προϊόντα και εργαλεία.</span>
                        </li>
                        <li className="flex items-start gap-3 opacity-80">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                            <span>Φιλικό, chill vibe για να χαλαρώσεις.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
