import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../../../assets/favicon.jpg";

const links = [
  ["About", "/about"],
  ["Play", "/play"],
  ["Our Services", "/services"],
  ["Events", "/events"],
  ["Contact", "/contact"],
];

const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false,
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setOpen(false); // Close mobile drawer if resized back to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "rgba(226, 222, 222, 0.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid rgba(41, 19, 12, 0.1)`,
        fontFamily: theme.fontBody,
      }}
    >
      {/* Brand Logo & Mark */}
      <Link
        to="/"
        onClick={() => setOpen(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          textDecoration: "none",
          color: theme.espresso,
          fontFamily: theme.fontHeading,
          fontWeight: 700,
          fontSize: "1.125rem",
          lineHeight: 1.1,
          letterSpacing: "0.05em",
        }}
      >
        <img
          src={logo}
          alt="Huru Garden"
          style={{
            display: "block",
            width: "52px",
            height: "52px",
            objectFit: "contain",
          }}
        />
        <span>
          HURU
          <br />
          <em style={{ fontStyle: "normal", color: theme.orange }}>GARDEN</em>
        </span>
      </Link>

      {/* Desktop Navigation Links (Visible only on Desktop) */}
      <nav
        style={{
          display: isMobile ? "none" : "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? theme.orange : theme.espresso,
              fontWeight: isActive ? 700 : 500,
              fontSize: "0.95rem",
              position: "relative",
              padding: "0.25rem 0",
              borderBottom: isActive ? `2px solid ${theme.orange}` : "none",
              transition: "color 0.2s ease",
            })}
          >
            {label}
          </NavLink>
        ))}

        {/* Desktop Call to Action Button */}
        <Link
          to="/events"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.625rem 1.25rem",
            backgroundColor: theme.orange,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "9999px",
            textDecoration: "none",
            boxShadow: "0 2px 4px rgba(41, 19, 12, 0.1)",
            transition: "all 0.2s ease",
          }}
        >
          Plan your gathering{" "}
          <span style={{ fontSize: "1.1rem", lineHeight: 1 }}></span>
        </Link>
      </nav>

      {/* Mobile Toggle Button (Visible only on Mobile) */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          display: isMobile ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          background: "none",
          border: "none",
          color: theme.espresso,
          cursor: "pointer",
          padding: "0.5rem",
        }}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer (Visible when open on Mobile) */}
      {isMobile && open && (
        <nav
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1.5rem 2rem",
            backgroundColor: theme.grey,
            borderBottom: `1px solid rgba(41, 19, 12, 0.1)`,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? theme.orange : theme.espresso,
                fontSize: "1.1rem",
                fontWeight: isActive ? 700 : 500,
                padding: "0.5rem 0",
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/events"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              padding: "0.75rem 1.25rem",
              backgroundColor: theme.orange,
              color: "#ffffff",
              fontWeight: 600,
              borderRadius: "9999px",
              textDecoration: "none",
              marginTop: "0.5rem",
            }}
          >
            Plan your gathering
          </Link>
        </nav>
      )}
    </header>
  );
}
