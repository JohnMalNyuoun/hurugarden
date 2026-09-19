import React from "react";
import Button from "../components/ui/Button";
import meetimg from "../../../assets/hurumeeting1.jpg";
import meet2img from "../../../assets/hurumeeting2.jpg";
import hurutrainingimg from "../../../assets/hurutraining.jpg";
import huruchill1img from "../../../assets/huruchill1.jpg";
import cafeteriaImg from "../../../assets/762372387_122119643931272215_4697147077892752819_n.jpg";
import pool from "../../../assets/pool.jpg";
import car from "../../../assets/carforkid.jpg";
import kidscar from "../../../assets/makekidhappy.jpg";
import bouncingimag from "../../../assets/bouncing.jpg";
import childrenswim from "../../../assets/childrenpool.jpg";
import trimpoline from "../../../assets/triopoline.jpg";
import slideimg from "../../../assets/slide.jpg";

const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

const facilityServices = [
  {
    title: "Cafeteria Services",
    capacity: "Open Access",
    pricing: "Menu-based pricing",
    description:
      "The heart of Huru Garden: beverages, nyama choma, cold drinks, and assorted meals served for meetings, workdays, families, and visitors.",
    image: cafeteriaImg,
  },
  {
    title: "Huru Garden Hall",
    capacity: "Up to 100 people",
    pricing: "Half Day / Full Day bookings",
    description:
      "Chairs, tables, electricity, projector, flip charts, internet, and on-site support.",
    image: meetimg,
  },
  {
    title: "Full Board Package",
    capacity: "Per Person",
    pricing: "Flexible package pricing",
    description:
      "Breakfast, lunch, evening tea/coffee, snacks, water, and soda.",
    image: hurutrainingimg,
  },
  {
    title: "Private Office Rental",
    capacity: "Private Space",
    pricing: "Monthly workspace access",
    description:
      "Dedicated office desk, chair, and high-speed internet access.",
    image: meet2img,
  },
  {
    title: "Freelance Workstation",
    capacity: "Shared Workspace",
    pricing: "Monthly workstation access",
    description:
      "Shared workspace, continuous power, high-speed internet, and water access.",
    image: huruchill1img,
  },
];

const outdoorActivities = [
  {
    activity: "Trampoline",
    duration: "3 hrs",
    target: "Children",
    image: kidscar,
  },
  {
    activity: "Water Slide",
    duration: "3 hrs",
    target: "Children",
    image: slideimg,
  },
  {
    activity: "Bouncing Castle",
    duration: "3 hrs",
    target: "Children",
    image: bouncingimag,
  },
  {
    activity: "Bouncing",
    duration: "3 hrs",
    target: "Children",
    image: trimpoline,
  },
  {
    activity: "Swimming Pool",
    duration: "Full Day",
    target: "Adult",
    image: pool,
  },
  {
    activity: "Inflatable Swimming Pool",
    duration: "Full Day",
    target: "Children (Below 7 yrs)",
    image: childrenswim,
  },
];

export default function ServicesPage() {
  return (
    <div
      style={{
        backgroundColor: theme.grey,
        minHeight: "100vh",
        fontFamily: theme.fontBody,
      }}
    >
      <section
        style={{
          position: "relative",
          minHeight: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem 2rem",
          color: "#ffffff",
          backgroundImage: `linear-gradient(to right, rgba(41, 19, 12, 0.88), rgba(41, 19, 12, 0.55)), url(${hurutrainingimg})`,
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
            Our Services & Facilities
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
            Work, gather &
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              play with ease.
            </i>
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.6,
              color: theme.grey,
              maxWidth: "580px",
              margin: "0 0 1.5rem 0",
            }}
          >
            From professional meeting halls and workstations to refreshing
            outdoor activities for all ages in Kakuma 3 Zone 2 Block 8 (Burundi
            Market).
          </p>

          {/* Hero Cafeteria Link / CTA */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              to="/cafeteria"
              style={{
                backgroundColor: theme.orange,
                color: "#ffffff",
                border: "none",
              }}
            >
              Visit Cafeteria & Order Food
            </Button>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
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
            Venue & Workspaces
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
            Spaces tailored for
            <br />
            <i style={{ color: theme.orange, fontStyle: "italic" }}>
              every occasion.
            </i>
          </h2>
        </div>

        <div
          style={{
            backgroundColor: theme.orange,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
            color: "#ffffff",
            overflow: "hidden",
            borderLeft: `8px solid ${theme.espresso}`,
          }}
        >
          <img
            src={cafeteriaImg}
            alt="Huru Garden cafeteria"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "280px",
              objectFit: "cover",
            }}
          />
          <div style={{ padding: "2.5rem" }}>
            <p
              style={{
                margin: "0 0 0.75rem",
                color: theme.yellow,
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              The heart of Huru Garden
            </p>
            <h3
              style={{
                fontFamily: theme.fontHeading,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1,
                margin: "0 0 1rem",
              }}
            >
              Eat, meet &
              <br />
              <i style={{ color: theme.espresso }}>stay awhile.</i>
            </h3>
            <p
              style={{
                maxWidth: "480px",
                margin: "0 0 1.5rem",
                lineHeight: 1.6,
              }}
            >
              Our cafeteria brings every Huru experience together, with good
              food and refreshments ready for guests, teams, families, and
              friends.
            </p>
            <Button
              to="/cafeteria"
              style={{
                backgroundColor: theme.espresso,
                color: "#ffffff",
                border: "none",
              }}
            >
              Explore Cafeteria
            </Button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {facilityServices.map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: "#ffffff",
                overflow: "hidden",
                border: "1px solid rgba(41, 19, 12, 0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {service.image ? (
                <div
                  style={{ height: "180px", width: "100%", overflow: "hidden" }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    height: "180px",
                    width: "100%",
                    backgroundColor: "rgba(41, 19, 12, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.espresso,
                    opacity: 0.7,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                  }}
                >
                  <span>[ {service.title} Image Placeholder ]</span>
                </div>
              )}
              <div
                style={{
                  padding: "1.75rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: theme.fontHeading,
                        fontSize: "1.35rem",
                        color: theme.espresso,
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "rgba(41, 19, 12, 0.05)",
                      color: theme.espresso,
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "6px",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.pricing}
                  </span>
                  <p
                    style={{
                      color: theme.espresso,
                      opacity: 0.85,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      marginTop: "1.25rem",
                      paddingTop: "0.75rem",
                      marginBottom: "1.25rem",
                      borderTop: "1px solid rgba(0,0,0,0.05)",
                      fontSize: "0.85rem",
                      color: theme.espresso,
                      opacity: 0.6,
                    }}
                  >
                    Capacity / Access: <strong>{service.capacity}</strong>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.6rem",
                      marginTop: "1.25rem",
                    }}
                  >
                    {service.title === "Cafeteria Services" ? (
                      <Button
                        to="/cafeteria"
                        style={{
                          flex: 1,
                          textAlign: "center",
                          border: `1px solid ${theme.espresso}`,
                          color: theme.espresso,
                        }}
                      >
                        Explore Cafeteria
                      </Button>
                    ) : (
                      <Button
                        to={`/events?service=${encodeURIComponent(
                          service.title,
                        )}`}
                        style={{
                          flex: 1,
                          textAlign: "center",
                          border: `1px solid ${theme.espresso}`,
                          color: theme.espresso,
                        }}
                      >
                        Book Event
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
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
            Outdoor & Recreation
          </p>
          <h2
            style={{
              fontFamily: theme.fontHeading,
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: theme.espresso,
              margin: 0,
            }}
          >
            Fun & Play Activities
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {outdoorActivities.map((act) => (
            <div
              key={act.activity}
              style={{
                backgroundColor: "#ffffff",
                overflow: "hidden",
                border: "1px solid rgba(41, 19, 12, 0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: "180px",
                  width: "100%",
                  backgroundColor: "rgba(41, 19, 12, 0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  color: theme.espresso,
                  opacity: 0.7,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {act.image ? (
                  <img
                    src={act.image}
                    alt={act.activity}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <span>[ {act.activity} Image Placeholder ]</span>
                )}
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: theme.fontHeading,
                      fontSize: "1.25rem",
                      color: theme.espresso,
                      margin: "0 0 0.5rem 0",
                    }}
                  >
                    {act.activity}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: theme.orange,
                      }}
                    >
                      {act.duration}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: theme.espresso,
                      opacity: 0.8,
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    <strong>Target Group:</strong> {act.target}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "0.6rem" }}>
                  <Button
                    to={`/events?activity=${encodeURIComponent(act.activity)}`}
                    style={{
                      flex: 1,
                      textAlign: "center",
                      border: `1px solid ${theme.espresso}`,
                      color: theme.espresso,
                    }}
                  >
                    Book Event
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4
            style={{
              fontFamily: theme.fontHeading,
              color: theme.espresso,
              margin: "0 0 1rem 0",
              fontSize: "1.2rem",
            }}
          >
            Booking & Cancellation Terms
          </h4>
          <ul>
            <li>
              Bookings are confirmed after we receive your request and details.
            </li>
            <li>
              Cancellations made at least 24 hours prior may be rescheduled.
            </li>
            <li>
              Same-day cancellations may incur charges depending on the booking.
            </li>
            <li>
              Safety measures are in place; outdoor activities are supervised.
            </li>
          </ul>
        </div>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Button to="/events">Book a space or custom event</Button>
        </div>
      </section>
    </div>
  );
}
