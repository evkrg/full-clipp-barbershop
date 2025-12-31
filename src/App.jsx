import { useCalcomBooking } from "./hooks/useCalcomBooking";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import BookingSection from "./sections/BookingSection";
import TshirtsSection from "./sections/TshirtsSection";
import VisitUsSection from "./sections/VisitUsSection";
import Footer from "./sections/Footer";

export default function BarbershopPage() {
  const { isBooked, bookingData, lastBookingUid, resetBooking } = useCalcomBooking();

  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <BookingSection
          isBooked={isBooked}
          bookingData={bookingData}
          lastBookingUid={lastBookingUid}
          onResetBooking={resetBooking}
        />
        <TshirtsSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
