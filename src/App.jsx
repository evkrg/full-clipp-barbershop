import { motion } from "framer-motion";
import { Scissors, Calendar, MapPin, Phone, Clock, Star, ExternalLink, CheckCircle } from "lucide-react";
import Cal from "@calcom/embed-react";
import { useCalcomBooking } from "./hooks/useCalcomBooking";
import { tshirtsData } from "./data.jsx";

export default function Barbershop() {
  const isBooked = useCalcomBooking();

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans overflow-x-hidden">
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
                  href="https://www.google.com/maps/place/Full+Clipp+Barber+Shop/@37.9957823,23.7311912,17z/data=!4m7!3m6!1s0x14a1a33d9709d407:0x439657f7dc4f59ef!4b1!8m2!3d37.9957781!4d23.7337715!16s%2Fg%2F11md6jlk16?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
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
              <div className="flex items-center gap-2 flex-nowrap">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
                <span className="ml-1 text-neutral-800 font-medium">5.0</span>
                <a
                  href="https://www.google.com/search?q=Full+Clipp+Barbershop+Athens+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
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
            {tshirtsData.map((shirt) => (
              <div key={shirt.id} className="group relative ..." >
                {/* You can add your image here! */}
                <div className="aspect-square w-full overflow-hidden rounded-2xl bg-neutral-100 mb-4">
                  <img
                    src={shirt.imageUrl}
                    alt={shirt.title}
                    className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
                  />
                </div>

                {/* ... rest of your card content ... */}
                <div className="absolute right-4 top-4 ...">{shirt.price}</div>
                <h3 className="text-lg font-semibold">{shirt.title}</h3>
                <p className="mt-2 text-sm ...">{shirt.desc}</p>
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
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a
                  href="tel:+302108228684"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  +30 210 822 8684
                </a>
              </span>
              <address className="inline-flex items-center gap-2 not-italic">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <a
                  className="underline underline-offset-4 hover:opacity-80"
                  href="https://www.google.com/maps/place/Full+Clipp+Barber+Shop/@37.9957823,23.7311912,17z/data=!4m7!3m6!1s0x14a1a33d9709d407:0x439657f7dc4f59ef!4b1!8m2!3d37.9957781!4d23.7337715!16s%2Fg%2F11md6jlk16?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </address>
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
          <a href="#booking" className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" aria-hidden="true" />Book now</a>
        </div>
      </footer>
    </div>
  );
}
