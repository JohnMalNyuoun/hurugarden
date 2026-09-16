import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
export default function PlayPage() {
  return (
    <div className="inner-page">
      <section className="page-hero play-hero">
        <p className="eyebrow light">
          The play garden <span>✳</span>
        </p>
        <h1>
          Big feelings.
          <br />
          <i>Wide open.</i>
        </h1>
        <p>
          Structured play and unstructured wonder, designed for every kind of
          curious kid.
        </p>
      </section>
      <section className="section-pad">
        <div className="section-intro row-intro">
          <div>
            <p className="eyebrow">A place to be</p>
            <h2>
              Play is serious
              <br />
              <i>good business.</i>
            </h2>
          </div>
          <p className="intro-text">
            Our play garden is a safe, sensory-rich space for children to
            explore, make friends, and practice the things that matter most:
            empathy, confidence, and joy.
          </p>
        </div>
        <div className="pillar-grid">
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
        <Button to="/contact">Ask about play sessions</Button>
      </section>
    </div>
  );
}
