import React from "react";
import Button from "../ui/Button";
import heroImg from "../../../../assets/hurugrandopen.jpg";

const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 2rem",
        backgroundColor: theme.grey,
        color: theme.espresso,
        fontFamily: theme.fontBody,
        overflow: "hidden",
      }}
    >
      {/* Background Image Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(226, 222, 222, 0.92), rgba(226, 222, 222, 0.4)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: 0,
        }}
      />

      {/* Main Content Box */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "650px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            color: theme.orange,
            fontWeight: 700,
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Welcome to Huru Garden
        </p>

        <h1
          style={{
            fontFamily: theme.fontHeading,
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            color: theme.espresso,
            margin: 0,
          }}
        >
          Host better.
          <br />
          <i style={{ color: theme.orange, fontStyle: "italic" }}>
            Dine happier.
          </i>
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: theme.espresso,
            opacity: 0.9,
            maxWidth: "500px",
            margin: 0,
          }}
        >
          A bright, generous gathering place in the heart of Kakuma. Come for
          the play, stay for the plate, leave with a full heart.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Button to="/events">Plan your gathering</Button>
          <Button to="/cafeteria" variant="ghost">
            Explore Cafeteria
          </Button>
        </div>
      </div>

      {/* Decorative Stamp Badge */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "none",
          alignSelf: "flex-end",
          padding: "1.5rem",
          backgroundColor: theme.espresso,
          color: "#ffffff",
          borderRadius: "50%",
          width: "140px",
          height: "140px",
          textAlign: "center",
          fontFamily: theme.fontHeading,
          fontSize: "0.75rem",
          fontWeight: 700,
          lineHeight: 1.3,
          letterSpacing: "0.05em",
          border: `2px solid ${theme.orange}`,
          boxShadow: "0 10px 25px rgba(41, 19, 12, 0.15)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        GOOD FOOD
        <br />
        <span style={{ color: theme.yellow }}>GOOD COMPANY</span>
        <br />
        GOOD WORK
      </div>

      {/* Bottom Scroll Cue */}
      <div
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "2rem",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: theme.espresso,
          opacity: 0.8,
        }}
      >
        Scroll to explore <span style={{ color: theme.orange }}></span>
      </div>
    </section>
  );
}