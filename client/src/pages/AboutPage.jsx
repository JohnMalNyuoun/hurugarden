import Button from "../components/ui/Button";
export default function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-hero olive">
        <p className="eyebrow light">
          Our story <span>✳</span>
        </p>
        <h1>
          Rooted here.
          <br />
          <i>Open to all.</i>
        </h1>
        <p>
          Huru means freedom. We built a place where that feeling can be shared
          across a table, a garden, and a whole community.
        </p>
      </section>
      <section className="split-section section-pad">
        <div>
          <p className="eyebrow">A social enterprise</p>
          <h2>
            Good spaces can
            <br />
            <i>do good work.</i>
          </h2>
        </div>
        <div className="prose">
          <p>
            Huru Garden is a community-centered hospitality space in Kakuma,
            Kenya. We believe joy, safety, and opportunity are not extras; they
            are the foundation.
          </p>
          <p>
            Our work brings together play-based learning, nourishing food, and
            meaningful gatherings. Every plate and every booking helps us create
            space for local talent to grow.
          </p>
          <Button to="/contact">Come say hello</Button>
        </div>
      </section>
      <section className="number-band">
        <strong>01</strong>
        <span>Play creates possibility.</span>
        <strong>02</strong>
        <span>Food brings us home.</span>
        <strong>03</strong>
        <span>Community is the point.</span>
      </section>
    </div>
  );
}
