import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../../../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="brand footer-brand" to="/">
            <img className="brand-mark" src={logo} alt="Huru Garden" />
            <span>
              HURU
              <br />
              <em>GARDEN</em>
            </span>
          </Link>
          <p className="footer-note">
            A generous space to play, gather,
            <br />
            and eat well in Kakuma.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <small>Explore</small>
            <Link to="/about">Our story</Link>
            <Link to="/play">Play garden</Link>
            <Link to="/dining">The table</Link>
          </div>
          <div>
            <small>Visit us</small>
            <span>
              <MapPin size={14} /> Kakuma, Kenya
            </span>
            <span>
              <Phone size={14} /> +254 700 000 000
            </span>
            <span>
              <Mail size={14} /> hurugarden@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Huru Garden</span>
        <span>Built with care in Kakuma</span>
        <a href="https://instagram.com" aria-label="Instagram">
          <Instagram size={17} />
        </a>
      </div>
    </footer>
  );
}
