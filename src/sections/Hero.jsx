import { motion } from "framer-motion";
import { Clock, MapPin, Star, ExternalLink } from "lucide-react";
import Button from "../components/Button";
import { workingHours } from "../data.jsx";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -left-1/3 top-[-15%] h-[60rem] w-[60rem] rounded-full bg-gradient-radial from-slate-200/50 via-slate-50/0 to-transparent blur-3xl" />
                <div className="absolute right-[-20%] bottom-[-20%] h-[40rem] w-[40rem] rounded-full bg-gradient-radial from-slate-200/40 via-slate-50/0 to-transparent blur-3xl" />
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:px-8 lg:py-28 md:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900">
                        Classic cuts. Modern style.
                    </h1>
                    <p className="mt-4 text-slate-600 md:text-lg">
                        Κλείσε ραντεβού εύκολα και γρήγορα!
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button href="#booking">Κλείσε ραντεβού</Button>
                        <Button href="#tshirts" variant="secondary">Δες τα T-shirts</Button>
                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-6 grid gap-5 text-sm">
                        <address className="flex items-center gap-3 not-italic">
                            <MapPin className="h-5 w-5 text-slate-500" />
                            <a href="https://maps.google.com/?cid=4870176769112496623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" target="_blank" rel="noreferrer" className="hover:text-slate-900 underline underline-offset-4">
                                Ιωάννου Δροσοπούλου 6, 11257 Κυψέλη, Αθήνα
                            </a>
                        </address>
                        <div className="flex items-start gap-3">
                            <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-slate-500" />
                            <ul className="grid gap-1 text-slate-700">
                                {workingHours.map((entry) => (
                                    <li
                                        key={entry.dayLabel}
                                        className="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap"
                                    >
                                        <span className="text-slate-900 sm:min-w-[14rem]">
                                            {entry.dayLabel}
                                        </span>
                                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                            {entry.hours}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                                ))}
                            </div>
                            <a href="https://search.google.com/local/writereview?placeid=ChIJB9QJlz2joRQR71lP3PdXlkM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1.5">
                                <span>5.0 stars on Google</span>
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300">
                        <img src="/fullclip-logo.webp" alt="Full Clipp Barbershop logo" className="h-full w-full object-cover" fetchPriority="high" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
