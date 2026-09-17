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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
