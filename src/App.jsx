import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About"
import ServicesSection from "./components/ServicesSection";
import AppointmentForm from "./components/AppointmentForm";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ServicesSection />
      <AppointmentForm />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
