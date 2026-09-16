import React from "react";
import Button from "../components/ui/Button";
import meetimg from "../../../assets/hurumeeting1.jpg";
import meet2img from "../../../assets/hurumeeting2.jpg";
import hurutrainingimg from "../../../assets/hurutraining.jpg";
import huruchill1img from "../../../assets/huruchill1.jpg";

// Brand Identity Design Tokens
const theme = {
  espresso: "#29130c",
  grey: "#e2dede",
  orange: "#f26622",
  yellow: "#f7f195",
  fontHeading: "'GT Pressura Pro', Georgia, serif",
  fontBody: "'Satoshi', system-ui, -apple-system, sans-serif",
};

// Rate Card Data Extraction
const facilityServices = [
  {
    title: "Huru Garden Hall",
    capacity: "Up to 100 people",
    pricing: "Kes 7,000 (Half Day) / Kes 10,000 (Full Day)",
    description:
      "Chairs, tables, electricity, projector, flip charts, internet, and on-site support.",
    image: meetimg,
  },
  {
    title: "Full Board Package",
    capacity: "Per Person",
    pricing: "Kes 2,500 (Full Day)",
    description:
      "Breakfast, lunch, evening tea/coffee, snacks, water, and soda.",
    image: hurutrainingimg,
  },
  {
    title: "Private Office Rental",
    capacity: "Private Space",
    pricing: "Ksh 10,000 / month",
    description:
      "Dedicated office desk, chair, and high-speed internet access.",
    image: meet2img,
  },
  {
    title: "Freelance Workstation",
    capacity: "Shared Workspace",
    pricing: "Ksh 2,000 / month",
    description:
      "Shared workspace, continuous power, high-speed internet, and water access.",
    image: huruchill1img,
  },
  {
    title: "Cafeteria Services",
    capacity: "Open Access",
    pricing: "Menu-based pricing",
    description:
      "Beverages, nyama choma, cold drinks, and assorted meals available on request.",
    image: null,
  },
];

const outdoorActivities = [
  {
    activity: "Trampoline",
    rate: "Ksh 50",
    duration: "3 hrs",
    target: "Children",
  },
  {
    activity: "Water Slide",
    rate: "Ksh 100",
    duration: "3 hrs",
    target: "Children",
  },
  {
    activity: "Bouncing Castle",
    rate: "Ksh 50",
    duration: "3 hrs",
    target: "Children",
  },
  {
    activity: "Mini Car Ride",
    rate: "Ksh 100",
    duration: "10 mins",
    target: "Children (Below 6 yrs)",
  },
  {
    activity: "Swimming Pool",
    rate: "Ksh 400",
    duration: "Full Day",
    target: "Adult",
  },
  {
    activity: "Inflatable Swimming Pool",
    rate: "Ksh 300",
    duration: "Full Day",
    target: "Children (Below 7 yrs)",
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
      {/* Hero Header Section */}
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
            Our Services & Facilities{" "}
            <span style={{ color: theme.orange }}>✳</span>
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
              margin: 0,
            }}
          >
            From professional meeting halls and workstations to refreshing
            outdoor activities for all ages in Kakuma 3 Zone 2 Block 8 (Burundi
            Market).
          </p>
        </div>
      </section>

      {/* Facilities & Workspaces Section */}
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

        {/* Services List Grid */}
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
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(41, 19, 12, 0.08)",
                boxShadow: "0 8px 24px rgba(41, 19, 12, 0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {service.image && (
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
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                    fontSize: "0.85rem",
                    color: theme.espresso,
                    opacity: 0.6,
                  }}
                >
                  Capacity / Access: <strong>{service.capacity}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outdoor Recreation Activities Section */}
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

        {/* Recreation Rate Table */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 24px rgba(41, 19, 12, 0.04)",
            border: "1px solid rgba(41, 19, 12, 0.08)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: theme.espresso,
                    color: theme.yellow,
                    fontFamily: theme.fontHeading,
                  }}
                >
                  <th style={{ padding: "1rem 1.5rem" }}>Activity</th>
                  <th style={{ padding: "1rem 1.5rem" }}>Rate</th>
                  <th style={{ padding: "1rem 1.5rem" }}>Duration</th>
                  <th style={{ padding: "1rem 1.5rem" }}>Target Group</th>
                </tr>
              </thead>
              <tbody>
                {outdoorActivities.map((act, idx) => (
                  <tr
                    key={act.activity}
                    style={{
                      borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fbf9f9",
                    }}
                  >
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        fontWeight: 700,
                        color: theme.espresso,
                      }}
                    >
                      {act.activity}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        color: theme.espresso,
                        fontWeight: 700,
                      }}
                    >
                      {act.rate}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        color: theme.espresso,
                        opacity: 0.8,
                      }}
                    >
                      {act.duration}
                    </td>
                    <td
                      style={{
                        padding: "1rem 1.5rem",
                        color: theme.espresso,
                        opacity: 0.8,
                      }}
                    >
                      {act.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms & Conditions Notice */}
        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
          }}
        >
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
          <ul
            style={{
              margin: 0,
              paddingLeft: "1.25rem",
              color: theme.espresso,
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            <li>
              All bookings are confirmed upon advance payment or official
              commitment.
            </li>
            <li>
              <strong>Payment Terms:</strong> 50% of payment required before
              service delivery unless otherwise agreed.
            </li>
            <li>Payments are non-refundable once services are rendered.</li>
            <li>
              Cancellations made at least 24 hours prior may be rescheduled;
              same-day cancellations may incur charges.
            </li>
            <li>
              Safety measures are in place; all outdoor activities are
              supervised to ensure safety.
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Button to="/contact">Book a space or activity</Button>
        </div>
      </section>
    </div>
  );
}