import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import playImg from "../../../../assets/huruchill1.jpg";
import YogaImg from "../../../../assets/yoga.jpg";
import hallimg from "../../../../assets/hall.png";
import hurueventimg from "../../../../assets/huruevent1.jpg";

const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function ImpactPillars() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: isMobile ? "4rem 1.25rem" : "6rem 2rem",
        backgroundColor: theme.grey,
        color: theme.espresso,
        fontFamily: theme.fontBody,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 4rem",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "3rem" : "5rem",
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
          More than a venue
        </p>

        {/* Section 1: Image LEFT, Text RIGHT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "40% 1fr",
            gap: isMobile ? "1.5rem" : "3.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: isMobile ? "260px" : "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
            }}
          >
            <img
              src={playImg}
              alt="Huru Garden Play Area"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Where every
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                moment matters.
              </i>
            </h2>
            <p style={{ lineHeight: 1.7, margin: 0, color: theme.espresso }}>
              Find peace in play, joy in gathering, and purpose in growth. Huru
              Garden offers a beautiful and sustainable space designed for all
              to enjoy. With a focus on community, sustainability, and
              well-being, we aim to make every shared moment meaningful.
            </p>
          </div>
        </div>

        {/* Section 2: Text LEFT, Image RIGHT (Alternated) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 40%",
            gap: isMobile ? "1.5rem" : "3.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              order: isMobile ? 2 : 1,
            }}
          >
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
              }}
            >
              We commit to your
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                well-being.
              </i>
            </h2>
            <p style={{ lineHeight: 1.7, margin: 0, color: theme.espresso }}>
              Get ready to experience a space that nurtures your mind, body, and
              soul. We prioritize wellness through guided yoga sessions, outdoor
              mindfulness practices, and serene environments where you can relax,
              rejuvenate, and reconnect with nature.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: isMobile ? "260px" : "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
              order: isMobile ? 1 : 2,
            }}
          >
            <img
              src={YogaImg}
              alt="Huru Garden Yoga Session"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Section 3: Image LEFT, Text RIGHT (Alternated) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "40% 1fr",
            gap: isMobile ? "1.5rem" : "3.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: isMobile ? "260px" : "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
            }}
          >
            <img
              src={hurueventimg}
              alt="Outdoor Event Space at Huru Garden"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Vibrant outdoor
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                event hosting.
              </i>
            </h2>
            <p style={{ lineHeight: 1.7, margin: 0, color: theme.espresso }}>
              Our open-air grounds provide a scenic, fully equipped environment
              for outdoor celebrations, live performances, and community
              gatherings. We offer versatile setups, quality sound, and spacious
              grounds to make your special occasions memorable.
            </p>
          </div>
        </div>

        {/* Section 4: Text LEFT, Image RIGHT (Alternated) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 40%",
            gap: isMobile ? "1.5rem" : "3.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              order: isMobile ? 2 : 1,
            }}
          >
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Versatile indoor
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                hall facilities.
              </i>
            </h2>
            <p style={{ lineHeight: 1.7, margin: 0, color: theme.espresso }}>
              Designed for focus and collaboration, our indoor hall provides a
              flexible space for workshops, corporate meetings, private functions,
              and educational seminars. Equipped with reliable seating and layout
              flexibility, it adapts seamlessly to your group's needs.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              height: isMobile ? "260px" : "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
              order: isMobile ? 1 : 2,
            }}
          >
            <img
              src={hallimg}
              alt="Multi-purpose Hall Facility"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Pillars Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <Card number="01" icon="" title="Play with purpose">
          A thoughtful play space where children can build confidence,
          cooperation, and emotional regulation in safe environments.
        </Card>
        <Card number="02" icon="" title="Gather generously">
          A warm setting for celebrations, meetings, and everyday social
          connection in Kakuma.
        </Card>
        <Card number="03" icon="" title="Grow together">
          A social enterprise creating local employment and circulating
          resources to sustain community development.
        </Card>
      </div>
    </section>
  );
}