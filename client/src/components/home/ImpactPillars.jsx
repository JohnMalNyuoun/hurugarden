import Card from "../ui/Card";
export default function ImpactPillars() {
  return (
    <section className="pillars section-pad">
      <div className="section-intro">
        <p className="eyebrow">
          More than a venue <span></span>
        </p>
        <h2>
          Where every
          <br />
          <i>moment matters.</i>
        </h2>
      </div>
      <div className="pillar-grid">
        <Card number="01" icon="✦" title="Play with purpose">
          A thoughtful play space where children can be curious, confident, and
          completely themselves.
        </Card>
        <Card number="02" icon="◒" title="Gather generously">
          A warm setting for the celebrations, meetings, and everyday magic that
          bring us together.
        </Card>
        <Card number="03" icon="⌁" title="Grow together">
          Every visit supports local opportunity and the Kakuma community we
          call home.
        </Card>
      </div>
    </section>
  );
}
