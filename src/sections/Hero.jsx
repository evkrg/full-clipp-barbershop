import { motion } from "framer-motion";
import { Clock, MapPin, Star, ExternalLink } from "lucide-react";
import Button from "../components/Button";
import { workingHours } from "../data.jsx";

export default function Hero() {
    return (
        <section id="home">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-6 sm:px-6 lg:px-8 md:grid-cols-2">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
                        Classic cuts. Modern style.
                    </h1>
                    <p className="mt-4 opacity-80 text-lg">
                        Κλείσε ραντεβού εύκολα και γρήγορα!
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button href="#booking">Κλείσε ραντεβού</Button>
                        <Button href="#tshirts" variant="secondary">Δες τα T-shirts</Button>
                    </div>

                    <div className="mt-10 border-t pt-6 grid gap-6 text-sm">
                        <address className="flex items-center gap-3 not-italic">
                            <MapPin className="h-5 w-5 opacity-80" />
                            <a href="https://maps.google.com/?cid=4870176769112496623&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl" target="_blank" rel="noopener noreferrer" className="opacity-80 transition-opacity hover:opacity-100 underline underline-offset-4">
                                Ιωάννου Δροσοπούλου 6, 11257 Κυψέλη, Αθήνα
                            </a>
                        </address>
                        <div className="flex items-start gap-3">
                            <Clock className="mt-1 h-5 w-5 flex-shrink-0 opacity-80" />
                            <ul className="grid gap-1.5">
                                {workingHours.map((entry) => (
                                    <li
                                        key={entry.dayLabel}
                                        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-sm"
                                    >
                                        <span className="leading-tight opacity-80">
                                            {entry.dayLabel}
                                        </span>
                                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide opacity-80 tabular-nums">
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
                            <a href="https://search.google.com/local/writereview?placeid=ChIJB9QJlz2joRQR71lP3PdXlkM" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 opacity-80 transition-opacity hover:opacity-100 underline underline-offset-4">
                                <span>5.0 stars on Google</span>
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] focus-within:scale-[1.02]">
                    <img
                        src="/logo/fullclip-logo.webp"
                        alt="Full Clipp Barbershop logo"
                        width={800}
                        height={800}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="block h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
