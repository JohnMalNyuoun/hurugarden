import React from "react";
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
          Birthday tables, team days, family catch-ups, and everything worth
          gathering for.
        </p>
      </section>

      <section className="event-layout section-pad">
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
              <b>Tue–Sun</b> available
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