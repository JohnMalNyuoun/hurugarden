import React from "react";
import Card from "../ui/Card";
import playImg from "../../../../assets/huruchill1.jpg";
import YogaImg from "../../../../assets/yoga.jpg";
// Brand Identity Design Tokens
const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

export default function ImpactPillars() {
  return (
    <section
      style={{
        padding: "10rem 5rem",
        backgroundColor: theme.grey,
        color: theme.espresso,
        fontFamily: theme.fontBody,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 3rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
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

        {/* Header Content with Compact Image Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {/* Reduced Image Size Container */}
          <div
            style={{
              width: "600px",
              height: "200px",
              borderRadius: "12px",
              flexShrink: 0,
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

          <h2
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
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
           <p>
              Find peace in play, joy in gathering, and purpose in growth.
              beautifull and sustainable space for all to enjoy.
              with a focus on community, sustainability, and well-being, Huru Garden is more than just a venue; it's a place where every moment matters.
            </p>
        </div>
        <div
          style={{
            width: "600px",
            height: "200px",
            borderRadius: "12px",
            flexShrink: 0,
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
         <h2
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: theme.espresso,
              margin: 0,
            }}
          >
            We commit to your well-being
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
           
            </i> 

          </h2>
          <p>Get ready to experience a space that nurtures your mind, body, and soul. At Huru Garden, we prioritize your well-being, offering a serene environment where you can relax, rejuvenate, and connect with nature.</p>
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
          A thoughtful play space where children can build confidence, cooperation, and emotional regulation in safe environments[cite: 1].
        </Card>
        <Card number="02" icon="" title="Gather generously">
          A warm setting for celebrations, meetings, and everyday social connection in Kakuma[cite: 1].
        </Card>
        <Card number="03" icon="" title="Grow together">
          A social enterprise creating local employment and circulating resources to sustain community development[cite: 1].
        </Card>
      </div>
    </section>
  );
}