import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Calendar, MapPin, Phone, Clock, Star } from "lucide-react";

export default function Barbershop() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold text-lg">
            <Scissors className="h-6 w-6" />
            Full Clipp Barbershop
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#barbers" className="hover:opacity-70">Barbers</a>
            <a href="#booking" className="hover:opacity-70">Book</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <a href="#booking" className="sm:block hidden">
            <button className="bg-black text-white rounded-2xl px-5 py-2 hover:bg-neutral-800 transition">Book now</button>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,white,transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Classic cuts. Modern style.
            </h1>
            <p className="mt-4 text-neutral-600 md:text-lg">
              Look sharp without the hassle. Book your rendezvous in seconds and let our barbers do the rest.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#booking"><button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-neutral-800 transition">Book a rendezvous</button></a>
              <a href="#services"><button className="border border-neutral-300 px-6 py-3 rounded-2xl hover:bg-neutral-100 transition">See services</button></a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat · 9:00–19:00</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Drosopoulou 6, Athens, Kypseli</span>
            </div>
            <div className="mt-4 flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-current" />))}
              <span className="ml-2 text-sm text-neutral-600">5.0 (200+ reviews)</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <img src="/fullclip_logo.jpg" alt="Full Clipp Barbershop" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-neutral-50 via-white to-neutral-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold">Services</h2>
            <a href="#booking" className="text-sm underline underline-offset-4">Need something special? Book & add a note</a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Skin Fade", price: "€22", desc: "Razor-sharp fade, styled to finish." },
              { title: "Classic Cut", price: "€18", desc: "Scissor/clipper cut with wash & style." },
              { title: "Beard Trim", price: "€12", desc: "Line up, trim, and hot towel finish." },
              { title: "Kids Cut", price: "€14", desc: "Fresh styles for under 12." },
              { title: "Cut + Beard", price: "€28", desc: "Combo package for the full look." },
              { title: "Hot Towel Shave", price: "€20", desc: "Traditional wet shave experience." },
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

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">Book your rendezvous</h2>
        {!sent ? (
          <form name="barbershop-booking" method="POST" data-netlify="true" className="grid gap-3 max-w-lg">
            <input type="hidden" name="form-name" value="barbershop-booking" />
            <input name="name" required className="rounded-xl border px-3 py-2" placeholder="Your name" />
            <input name="phone" required className="rounded-xl border px-3 py-2" placeholder="+30 6XX XXX XXXX" />
            <select name="service" className="rounded-xl border px-3 py-2">
              <option>Skin Fade</option>
              <option>Classic Cut</option>
              <option>Beard Trim</option>
              <option>Kids Cut</option>
              <option>Cut + Beard</option>
              <option>Hot Towel Shave</option>
            </select>
            <input type="datetime-local" name="datetime" className="rounded-xl border px-3 py-2" />
            <textarea name="notes" className="rounded-xl border px-3 py-2" rows={3} placeholder="Anything we should know?" />
            <button type="submit" onClick={() => setSent(true)} className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-neutral-800 transition">Send request</button>
            <p className="text-xs text-neutral-500">We’ll confirm your appointment by SMS or email.</p>
          </form>
        ) : (
          <div className="py-6 text-center">
            <h3 className="text-xl font-semibold">Request sent ✅</h3>
            <p className="text-neutral-600">We’ll get back to you shortly to confirm your time.</p>
            <div className="mt-4">
              <a href="#top"><button className="bg-black text-white px-6 py-3 rounded-2xl">Back to top</button></a>
            </div>
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold">Visit us</h2>
            <p className="mt-2 text-neutral-600">Drosopoulou 6, Athens, Kypseli 112 57</p>
            <div className="mt-4 grid gap-2 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +30 210 822 8684</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> <a className="underline underline-offset-4" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions</a></span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat: 9:00–19:00</span>
            </div>
          </div>

          <div className="rounded-3xl border p-6 bg-neutral-50">
            <h3 className="font-semibold mb-2">Why choose us</h3>
            <ul className="grid gap-2 text-sm text-neutral-700">
              <li>✔ Experienced barbers with a passion for detail.</li>
              <li>✔ Premium products and hygienic tools.</li>
              <li>✔ Easy online booking and quick confirmations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Full Clipp Barbershop</p>
          <a href="#booking" className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> Book now</a>
        </div>
      </footer>
    </div>
  );
}
