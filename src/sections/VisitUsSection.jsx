// src/sections/VisitUsSection.jsx
import React from 'react';
import { MapPin, Clock, Phone, Instagram, CheckCircle } from 'lucide-react';

// A small helper component to keep the info lines consistent and clean.
const InfoLine = ({ icon, children }) => (
    <div className="flex items-center gap-3 text-slate-700">
        {React.createElement(icon, { className: "h-5 w-5 flex-shrink-0 text-slate-500" })}
        <span className="text-base">{children}</span>
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
                            <a href="https://maps.google.com/maps?ll=37.995858,23.733835&cid=4870176769112496623" target="_blank" rel="noreferrer" className="hover:text-slate-900 underline underline-offset-4">
                                Drosopoulou 6, 11257 Athens, Greece
                            </a>
                        </InfoLine>
                        <InfoLine icon={Clock}>
                            Δευτέρα–Παρασκευή 9:00–17:00
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
