import React from "react";
import Button from "../components/ui/Button";
import huruopenimg from "../../../assets/huruopen.jpg";

// Brand Identity Design Tokens
const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function AboutPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(41, 19, 12, 0.85), rgba(41, 19, 12, 0.45)), url(${huruopenimg})`,
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
            Our story <span style={{ color: theme.orange }}></span>
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
            Rooted here.
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              Open to all.
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
            Huru means freedom. We built a place where that feeling can be shared
            across a table, a garden, and a whole community.
          </p>
        </div>
      </section>

      {/* Split Prose Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div>
          <p
            style={{
              color: theme.orange,
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 0.5rem 0",
            }}
          >
            A social enterprise
          </p>
          <h2
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: theme.espresso,
              margin: 0,
            }}
          >
            Good spaces can
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              do good work.
            </i>
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: theme.espresso,
          }}
        >
          <p style={{ margin: 0 }}>
            Huru Garden is a community-centered hospitality space in Kakuma,
            Kenya. We believe joy, safety, and opportunity are not extras; they
            are the foundation.
          </p>
          <p style={{ margin: 0 }}>
            Our work brings together play-based learning, nourishing food, and
            meaningful gatherings. Every plate and every booking helps us create
            space for local talent to grow.
          </p>
          <div style={{ marginTop: "0.5rem" }}>
            <Button to="/contact">Come say hello</Button>
          </div>
        </div>
      </section>

      {/* Number Band Footer Section */}
      <section
        style={{
          backgroundColor: theme.espresso,
          color: theme.grey,
          padding: "2.5rem 2rem",
          borderTop: `2px solid ${theme.orange}`,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <strong
              style={{
                fontFamily: theme.fontHeading,
                color: theme.yellow,
                fontSize: "1.75rem",
              }}
            >
              01
            </strong>
            <span style={{ fontSize: "1rem", fontWeight: 500 }}>
              Play creates possibility[cite: 1].
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <strong
              style={{
                fontFamily: theme.fontHeading,
                color: theme.yellow,
                fontSize: "1.75rem",
              }}
            >
              02
            </strong>
            <span style={{ fontSize: "1rem", fontWeight: 500 }}>
              Food brings us home[cite: 1].
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <strong
              style={{
                fontFamily: theme.fontHeading,
                color: theme.yellow,
                fontSize: "1.75rem",
              }}
            >
              03
            </strong>
            <span style={{ fontSize: "1rem", fontWeight: 500 }}>
              Community is the point[cite: 1].
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}