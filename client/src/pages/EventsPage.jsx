import React from "react";
import { Link } from "react-router-dom";
import BookingForm from "../components/forms/BookingForm";
import hurueventsimg from "../../../assets/huruevent.jpg";

export default function EventsPage() {
  return (
    <div className="inner-page">
      <section
        className="page-hero events-hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(41, 19, 12, 0.88), rgba(41, 19, 12, 0.55)), url(${hurueventsimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="eyebrow light">
          Your people, your moment <span></span>
        </p>
        <h1>
          Make a day
          <br />
          <i>of it.</i>
        </h1>
        <p>
          Birthday tables, team days, family catchups, and everything worth
          gathering for.
        </p>

        {/* Hero Cafeteria Link / CTA */}
        <div style={{ marginTop: "1.5rem" }}>
          <Link
            to="/cafeteria"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#f26622",
              color: "#ffffff",
              padding: "0.8rem 1.6rem",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(242, 102, 34, 0.3)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
          >
            Fuel Your Event, Explore Cafeteria Menu
          </Link>
        </div>
      </section>

      <section className="event-layout event-layout-stacked section-pad">
        <div>
          <p className="eyebrow">Host at Huru</p>
          <h2>
            Leave the
            <br />
            <i>hosting to us.</i>
          </h2>
          <p className="prose">
            Tell us what you are imagining and we will help shape the details,
            from a play-filled afternoon to a long lunch under the trees.
          </p>
          <div className="event-facts">
            <span>
              <b>10–80</b> guests
            </span>
            <span>
              <b>Monday–Sunday</b> available
            </span>
            <span>
              <b>On site</b> catering
            </span>
          </div>
        </div>
        <BookingForm />
      </section>
    </div>
  );
}