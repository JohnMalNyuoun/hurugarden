import React from "react";
import ContactForm from "../components/forms/ContactForm";
import { Clock, Mail, MapPin } from "lucide-react";
import huruimg from "../../../assets/huruchill.jpg";

// Brand Identity Design Tokens
const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: theme.grey, minHeight: "100vh", fontFamily: theme.fontBody }}>
      
      {/* Hero Header Section with Image Background */}
      <section
        style={{
          position: "relative",
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 2rem",
          color: "#ffffff",
          backgroundImage: `linear-gradient(to right, rgba(41, 19, 12, 0.85), rgba(41, 19, 12, 0.45)), url(${huruimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: theme.yellow,
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 0.5rem 0",
            }}
          >
            Let's talk <span style={{ color: theme.orange }}></span>
          </p>

          <h1
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 1rem 0",
            }}
          >
            Come as
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              you are.
            </i>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: theme.grey,
              maxWidth: "550px",
              margin: 0,
            }}
          >
            Questions, ideas, directions? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Layout Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Contact Information Panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            backgroundColor: "#ffffff",
            padding: "2.5rem",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(41, 19, 12, 0.05)",
            border: `1px solid rgba(41, 19, 12, 0.08)`,
          }}
        >
          <p
            style={{
              color: theme.orange,
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Find us
          </p>

          {/* Location */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div
              style={{
                padding: "0.625rem",
                borderRadius: "50%",
                backgroundColor: "rgba(242, 102, 34, 0.1)",
                color: theme.orange,
              }}
            >
              <MapPin size={20} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b style={{ color: theme.espresso, fontSize: "1.05rem" }}>
                Kakuma, Kenya
              </b>
              <span style={{ color: theme.espresso, opacity: 0.8, fontSize: "0.95rem" }}>
                Huru Garden, near the main market
              </span>
            </div>
          </div>

          {/* Opening Hours */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div
              style={{
                padding: "0.625rem",
                borderRadius: "50%",
                backgroundColor: "rgba(242, 102, 34, 0.1)",
                color: theme.orange,
              }}
            >
              <Clock size={20} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b style={{ color: theme.espresso, fontSize: "1.05rem" }}>
                Open Monday–Sunday
              </b>
              <span style={{ color: theme.espresso, opacity: 0.8, fontSize: "0.95rem" }}>
                9:00 am – 6:00 pm
              </span>
            </div>
          </div>

          {/* Email */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div
              style={{
                padding: "0.625rem",
                borderRadius: "50%",
                backgroundColor: "rgba(242, 102, 34, 0.1)",
                color: theme.orange,
              }}
            >
              <Mail size={20} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <b style={{ color: theme.espresso, fontSize: "1.05rem" }}>
                hurugarden@gmail.com
              </b>
              <span style={{ color: theme.espresso, opacity: 0.8, fontSize: "0.95rem" }}>
                We reply within one working day
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}