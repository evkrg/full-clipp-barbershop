import { useCalcomBooking } from "./hooks/useCalcomBooking";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import BookingSection from "./sections/BookingSection";
import TshirtsSection from "./sections/TshirtsSection";
import VisitUsSection from "./sections/VisitUsSection";
import Footer from "./sections/Footer";

export default function BarbershopPage() {
  const { isBooked, bookingData } = useCalcomBooking();

  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <BookingSection isBooked={isBooked} bookingData={bookingData} />
        <TshirtsSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
