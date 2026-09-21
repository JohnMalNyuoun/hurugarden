import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone, Facebook, Twitter } from "lucide-react";
import logo from "../../../../assets/Logo.jpg";

// Custom SVG Icon for TikTok
const TikTokIcon = ({ size = 17 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  // Google Maps pin URL targeting Kakuma 3 / SIR Center coordinates
  const googleMapsUrl = "https://www.google.com/maps/place/Solidarity+Initiative+for+Refugees+(SIR)/@3.7529034,34.81317,21z/data=!4m22!1m15!4m14!1m6!1m2!1s0x179fc73c0055b685:0x88679600de4f2ee0!2sSolidarity+Initiative+for+Refugees+(SIR),+Kakuma+3!2m2!1d34.8134516!2d3.7529034!1m6!1m2!1s0x179fc9a383153395:0x47f0a4b294bddd51!2sScorpion+Control+Center,+4,+Zone+2,+Block+8+B,+Kakuma!2m2!1d34.8115036!2d3.7367158!3m5!1s0x179fc73c0055b685:0x88679600de4f2ee0!8m2!3d3.7529034!4d34.8134516!16s%2Fg%2F11j3vhmpw9?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";

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
            <small>Legal & Policies</small>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>

          <div>
            <small>Visit us</small>
            <span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <MapPin size={14} /> Open Location Pin (Google Maps)
              </a>
            </span>
            <span>
              <Phone size={14} /> +254 700 000 000
            </span>
            <span>
              <Mail size={14} /> hurugarden@gmail.com
            </span>
          </div>

          <div>
            <small>In Partnership With</small>
            <div className="partner-badge" style={{ marginTop: "0.5rem" }}>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                Danish Refugee Council (DRC)
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Huru Garden</span>
        <span>Built with care in Kakuma</span>

        <div className="footer-socials" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="https://www.tiktok.com/@huru_garden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon size={17} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={17} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <Twitter size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}