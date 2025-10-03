import React from 'react';
import { MapPin, Clock, Phone, Instagram, CheckCircle } from 'lucide-react';
import { workingHours } from '../data.jsx';

const InfoLine = ({ icon: Icon, children }) => (
    <div className="flex items-start gap-3 text-slate-700">
        <Icon className="h-5 w-5 flex-shrink-0 text-slate-500" />
        <div className="text-base leading-relaxed">{children}</div>
    </div>
);

export default function VisitUsSection() {
    return (
        <section id="visit-us" className="bg-white border-t border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Come Visit Us</h2>
                        <p className="mt-3 text-lg text-slate-600">Περνάς και χωρίς ραντεβού.</p>
                    </div>
                    <div className="space-y-4">
                        <InfoLine icon={MapPin}>
                            <a href="https://maps.google.com/?cid=4870176769112496623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" target="_blank" rel="noreferrer" className="hover:text-slate-900 underline underline-offset-4">
                                Ιωάννου Δροσοπούλου 6, 11257 Κυψέλη, Αθήνα
                            </a>
                        </InfoLine>
                        <InfoLine icon={Clock}>
                            <ul className="grid gap-1.5 text-sm text-slate-700 sm:text-base">
                                {workingHours.map((entry) => (
                                    <li
                                        key={entry.dayLabel}
                                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"
                                    >
                                        <span className="leading-tight text-slate-900">
                                            {entry.dayLabel}
                                        </span>
                                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600 tabular-nums">
                                            {entry.hours}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </InfoLine>
                        <InfoLine icon={Phone}>
                            <a href="tel:+302108228684" className="hover:text-slate-900 underline underline-offset-4">
                                +30 210 822 8684
                            </a>
                        </InfoLine>
                        <InfoLine icon={Instagram}>
                            <a href="https://instagram.com/fullclippbarbershop" target="_blank" rel="noreferrer" className="hover:text-slate-900 underline underline-offset-4">
                                @fullclippbarbershop
                            </a>
                        </InfoLine>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-sm">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute right-[-15%] top-[-20%] h-[24rem] w-[24rem] rounded-full bg-gradient-radial from-slate-200/30 via-slate-50/0 to-transparent blur-3xl" />
                        <div className="absolute left-[-20%] bottom-[-25%] h-[20rem] w-[20rem] rounded-full bg-gradient-radial from-slate-200/25 via-slate-50/0 to-transparent blur-3xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Γιατί Full Clipp;</h3>
                    <ul className="mt-5 grid gap-4 text-base text-slate-700">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-600" />
                            <span>Κουρέματα με ακρίβεια και στυλ, από έμπειρο barber.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-600" />
                            <span>Χρησιμοποιούμε μόνο premium προϊόντα και εργαλεία.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-600" />
                            <span>Φιλικό, chill vibe για να χαλαρώσεις.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
