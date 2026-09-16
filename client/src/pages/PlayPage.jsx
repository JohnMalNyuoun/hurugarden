import React from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import playimg from "../../../assets/play.jpg";
import play2img from "../../../assets/play2.jpg";

// Brand Identity Design Tokens
const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function PlayPage() {
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
          backgroundImage: `linear-gradient(to right, rgba(41, 19, 12, 0.85), rgba(41, 19, 12, 0.45)), url(${playimg})`,
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
            The play garden <span style={{ color: theme.orange }}></span>
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
            Big feelings.
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              Wide open.
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
            Structured play and unstructured wonder, designed for every kind of
            curious kid.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
        }}
      >
        {/* Row Intro with Featured Secondary Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
              A place to be
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
              Play is serious
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                good business.
              </i>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Our play garden is a safe, sensory-rich space for children to
              explore, make friends, and practice the things that matter most:
              empathy, confidence, and joy.
            </p>
          </div>

          {/* Integrated play2img Container */}
          <div
            style={{
              width: "100%",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              
            }}
          >
            <img
              src={play2img}
              alt="Children enjoying the play garden"
              style={{
                width: "100%",
                height: "100%",
          
              }}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Card number="01" icon="✦" title="Free to wonder">
            Climb, build, imagine, and make a little beautiful mess.
          </Card>
          <Card number="02" icon="♡" title="Kind by design">
            Our team makes room for big emotions and gentle guidance.
          </Card>
          <Card number="03" icon="◌" title="Ready for everyone">
            Thoughtful activities for different ages, abilities, and energy
            levels.
          </Card>
        </div>

        {/* CTA Button Wrapper */}
        <div>
          <Button to="/contact">Ask about play sessions</Button>
        </div>
      </section>
    </div>
  );
}