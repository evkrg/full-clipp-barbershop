import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Calendar, MapPin, Phone, Clock, Star, ExternalLink, CheckCircle } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Barbershop() {
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    let cleanup = null;
    getCalApi().then((cal) => {
      const onBooked = (payload) => {
        try {
          const status = payload?.status || payload?.detail?.status;
          if (!status || status === "success") {
            setIsBooked(true);
          }
        } catch {
          // If payload shape is unexpected but event fired, assume success
          setIsBooked(true);
        }
      };
      const register = () => {
        try {
          // Support both legacy and v2 success events
          cal("on", { action: "bookingSuccessfulV2", callback: onBooked });
          cal("on", { action: "bookingSuccessful", callback: onBooked });
          // eslint-disable-next-line no-empty
        } catch { }
      };
      try {
        cal("on", { action: "linkReady", callback: register });
        // eslint-disable-next-line no-empty
      } catch { }
      register();
      cleanup = () => {
        try {
          cal("off", { action: "bookingSuccessfulV2", callback: onBooked });
          cal("off", { action: "bookingSuccessful", callback: onBooked });
          cal("off", { action: "linkReady", callback: register });
          // eslint-disable-next-line no-empty
        } catch { }
      };
    });
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" aria-label="Home" className="flex items-center gap-2 font-semibold text-lg">
            <Scissors className="h-6 w-6" />
            Full Clipp Barbershop
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#booking" className="hover:opacity-70">Book</a>
            <a href="#tshirts" className="hover:opacity-70">T-shirts</a>
            <a href="#location" className="hover:opacity-70">Location</a>
          </div>
          <a
            href="#booking"
            className="sm:inline-block hidden bg-black text-white rounded-2xl px-5 py-2 hover:bg-neutral-800 transition"
          >
            Book now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(255,255,255,0.4),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Classic cuts. Modern style.
            </h1>
            <p className="mt-4 text-neutral-600 md:text-lg">
              Look sharp without the hassle. Book your appointment in seconds and let our barbers do the rest.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#booking"
                className="inline-block bg-black text-white px-6 py-3 rounded-2xl hover:bg-neutral-800 transition"
              >
                Book an appointment
              </a>
              <a
                href="#tshirts"
                className="inline-block border border-neutral-300 px-6 py-3 rounded-2xl hover:bg-neutral-100 transition"
              >
                See T-shirts
              </a>
            </div>

            <div className="mt-6 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>Tue–Fri 11:00–20:30 · Sat 11:00–18:00</span>
              </span>
              <address className="mt-2 flex items-center gap-2 not-italic">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <a
                  href="https://maps.app.goo.gl/URxsQCG4SA6kig628"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open in Google Maps"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  Drosopoulou 6, 11257 Athens, Greece
                </a>
              </address>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-600">
              <div className="flex flex-wrap items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
                <span className="ml-1 text-neutral-800 font-medium">5.0</span>
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJB9QJlz2joRQR71lP3PdXlkM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  (reviews)
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJB9QJlz2joRQR71lP3PdXlkM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition sm:ml-2"
                >
                  Rate us on Google
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm text-neutral-700">Walk-ins welcome</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/fullclip_logo.webp"
                alt="Full Clipp Barbershop"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold">Book an appointment</h2>
          <span className="text-sm text-neutral-600">Secure your slot in seconds</span>
        </div>
        <div id="booking-reserve" className="rounded-3xl border bg-white shadow-sm overflow-hidden">
          {isBooked ? (
            <div className="flex items-center justify-center py-24">
              <h3 className="text-3xl font-bold">Thank you!</h3>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden">
              <Cal
                calLink="evkrg"
                className="w-full min-h-[clamp(760px,100svh,1600px)]"
                config={{ theme: "light" }}
              />
            </div>
          )}
        </div>
      </section>

      {/* T-shirts */}
      <section id="tshirts" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold">T-shirts</h2>
            <p className="text-sm">Available at the shop only</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "T-shirt 1", price: "€15", desc: "T-shirt" },
              { title: "T-shirt 2", price: "€15", desc: "T-shirt" },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="absolute right-4 top-4 select-none rounded-full border px-3 py-1 text-sm font-semibold bg-white/70 backdrop-blur">
                  {s.price}
                </div>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 border">
                    <Scissors className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{s.desc}</p>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-black/0 transition group-hover:ring-1 group-hover:ring-black/10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Location & Hours</h2>
            <p className="mt-2 text-neutral-600">Drosopoulou 6, 11257 Athens, Greece</p>
            <div className="mt-4 grid gap-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" aria-hidden="true" /> +30 210 822 8684</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden="true" /> <a className="underline underline-offset-4" href="https://maps.app.goo.gl/URxsQCG4SA6kig628" target="_blank" rel="noreferrer">Get directions</a></span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>Tue–Fri 11:00–20:30 · Sat 11:00–18:00</span>
              </span>
            </div>
          </div>

          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="font-semibold mb-2">Why choose us</h3>
            <ul className="grid gap-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" />
                <span>Experienced barbers with a passion for detail.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" />
                <span>Premium products and hygienic tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" />
                <span>Easy online booking and quick confirmations.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Full Clipp Barbershop</p>
          <a href="#booking" className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" /> Book now</a>
        </div>
      </footer>
    </div>
  );
}
