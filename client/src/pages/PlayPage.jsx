import React, { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import playimg from "../../../assets/play.jpg";
import play2img from "../../../assets/yoga.jpg";
import playimg4 from "../../../assets/play4.png";
import slideimg from "../../../assets/slide.jpg";
import trimpoline from "../../../assets/triopoline.jpg";
import bouncingimag from "../../../assets/bouncing.jpg";
import basketballimg from "../../../assets/basketpool.jpg";
import basketballimg2 from "../../../assets/basket.jpg";
import castleimg from "../../../assets/castle.jpg";
import chipsimg from "../../../assets/chips.jpg";
import softdrinkimg from "../../../assets/softdrink.jpg";
import fataimg from "../../../assets/fata.jpg";

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
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const playAttractions = [
    {
      title: "Inflatable Bouncing Castle",
      desc: "Soft, colorful bouncy structures for endless jumps and joyful tumbling.",
      img: bouncingimag,
    },
    {
      title: "High-Flying Trampoline",
      desc: "Supervised trampolines fitted with protective nets for maximum safety.",
      img: trimpoline,
    },
    {
      title: "Water & Dry Slides",
      desc: "Thrilling slides designed for children of all ages to enjoy.",
      img: slideimg,
    },
    {
      title: "Royal Play Castle",
      desc: "Imaginative castle grounds where kids play role-playing games.",
      img: castleimg,
    },
    {
      title: "Poolside Basketball",
      desc: "Splash-and-shoot mini basketball setup for active aquatic fun.",
      img: basketballimg,
    },
    {
      title: "Courtside Basketball",
      desc: "Outdoor hoops and balls for kids to practice teamwork and shooting.",
      img: basketballimg2,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.grey,
        minHeight: "100vh",
        fontFamily: theme.fontBody,
        overflowX: "hidden",
      }}
    >
      {/* Hero Header Section */}
      <section
        style={{
          position: "relative",
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "3rem 1.25rem" : "4rem 2rem",
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
            The play garden
          </p>

          <h1
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: "0 0 1rem 0",
              wordBreak: "break-word",
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
              fontSize: isMobile ? "1rem" : "1.125rem",
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
          padding: isMobile ? "3rem 1.25rem" : "5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "2.5rem" : "4rem",
        }}
      >
        {/* Split Section: Image Left & Text Right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "40% 1fr",
            gap: isMobile ? "1.5rem" : "3rem",
            alignItems: "center",
          }}
        >
          {/* Image Container (Left side) */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "280px" : "380px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
            }}
          >
            <img
              src={play2img}
              alt="Children enjoying the play garden"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Text Content Container (Right side) */}
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
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
                wordBreak: "break-word",
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
                fontSize: isMobile ? "1rem" : "1.1rem",
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
        </div>

        {/* High Energy Fun Section (Bouncing & Trampoline) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "1.5rem" : "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              order: isMobile ? 2 : 1,
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
              High Energy Fun
            </p>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: theme.espresso,
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              Bouncing Castles &<br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>
                High-Flying Trampolines
              </i>
            </h2>
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.1rem",
                lineHeight: 1.7,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Let kids release pure energy! Our inflatable bouncing castles and
              safety-netted trampolines give children of all ages room to jump,
              laugh, flip, and burn off endless energy in a supervised, padded
              environment.
            </p>
          </div>

          {/* Bouncing Castle & Trampoline Image Showcase */}
          <div
            style={{
              width: "100%",
              height: isMobile ? "280px" : "360px",
              borderRadius: "20px",
              overflow: "hidden",
              order: isMobile ? 1 : 2,
              boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
            }}
          >
            <img
              src={playimg4}
              alt="Children playing on bouncing castle and trampoline"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Featured Cafeteria Callout Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
          }}
        >
          {/* Featured Food & Drink Images Showcase */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              width: "100%",
            }}
          >
            <div
              style={{
                gridColumn: "1 / -1",
                height: isMobile ? "180px" : "220px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
              }}
            >
              <img
                src={chipsimg}
                alt="Fresh chips and warm meals"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                height: isMobile ? "140px" : "180px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
              }}
            >
              <img
                src={softdrinkimg}
                alt="Refreshing soft drinks"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                height: isMobile ? "140px" : "180px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(41, 19, 12, 0.08)",
              }}
            >
              <img
                src={fataimg}
                alt="Chilled Fanta drinks"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          {/* Cafeteria Details & Call to Action */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <p
              style={{
                color: theme.orange,
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Fuel The Fun
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
              Hungry or Thirsty?
              <br />
              <i style={{ color: theme.orange, fontStyle: "italic" }}>Visit Our Cafeteria</i>
            </h2>

            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                lineHeight: 1.7,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Recharge with crispy golden chips, delicious kid-friendly hot meals,
              refreshing chilled juices, ice-cold soft drinks like Fanta, and hot
              beverages for parents. The perfect stop before, during, or after playtime!
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <Button to="/cafeteria">Explore Food & Drink Menu</Button>
            </div>
          </div>
        </div>

        {/* Flat Outdoor Activities & Play Attractions Section */}
        <div>
          <div style={{ marginBottom: "2.5rem" }}>
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
              Explore Our Play Zones
            </p>
            <h2
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: theme.espresso,
                margin: 0,
              }}
            >
              Fun-Filled Outdoor Attractions
            </h2>
          </div>

          {/* Flat Grid without Card Wrappers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fill, minmax(320px, 1fr))",
              columnGap: "2.5rem",
              rowGap: "3rem",
            }}
          >
            {playAttractions.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "240px",
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: theme.fontHeading,
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: theme.espresso,
                      margin: "0 0 0.4rem 0",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: theme.espresso,
                      opacity: 0.85,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button Wrapper */}
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button to="/contact">Ask about play sessions</Button>
        </div>
      </section>
    </div>
  );
}