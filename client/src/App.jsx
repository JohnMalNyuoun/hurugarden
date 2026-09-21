import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlayPage from "./pages/PlayPage";
import Services from "./pages/Services";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import CafeteriaPage from "./pages/CafeteriaPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RouteSEO from "./components/common/RouteSEO";
import CookieBanner from "./components/common/CookieBanner"; // Import banner component

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <RouteSEO />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cafeteria" element={<CafeteriaPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      
      {/* Renders banner immediately on initial load */}
      <CookieBanner />
      
      <Footer />
    </div>
  );
}