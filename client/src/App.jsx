import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlayPage from "./pages/PlayPage";
import DiningPage from "./pages/DiningPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
