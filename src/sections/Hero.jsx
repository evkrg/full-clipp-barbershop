import { motion } from "framer-motion";
import { Clock, MapPin, Star, ExternalLink } from "lucide-react";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section id="home" className="relative bg-slate-50 overflow-hidden">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900">
                        Classic cuts. Modern style.
                    </h1>
                    <p className="mt-4 text-slate-600 md:text-lg">
                        Look sharp without the hassle. Book your appointment in seconds and let our barber do the rest.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button href="#booking">Book an Appointment</Button>
                        <Button href="#tshirts" variant="secondary">See T-shirts</Button>
                    </div>

                    <div className="mt-10 border-t border-slate-200 pt-6 grid gap-5 text-sm">
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-slate-500" />
                            <span className="text-slate-700">Tue–Fri 11:00–20:30 · Sat 11:00–18:00</span>
                        </div>
                        <address className="flex items-center gap-3 not-italic">
                            <MapPin className="h-5 w-5 text-slate-500" />
                            <a href="https://maps.google.com/maps?ll=37.995858,23.733835&cid=4870176769112496623" target="_blank" rel="noreferrer" className="text-slate-700 hover:text-slate-900 underline underline-offset-4">
                                Drosopoulou 6, 11257 Athens, Greece
                            </a>
                        </address>
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
                        <img src="/fullclip-logo.webp" alt="Full Clipp Barbershop Interior" className="h-full w-full object-cover" fetchPriority="high" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
