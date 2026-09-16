import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function HighlightsGrid() {
  return (
    <section className="highlights section-pad">
      <div className="highlight-main">
        <div>
          <p className="eyebrow light">
            Your kind of day <span></span>
          </p>
          <h2>
            Make room for
            <br />
            <i>good things.</i>
          </h2>
        </div>
        <p>
          Whether it is a slow afternoon with your little one, a big table of
          your favorite people, or simply a really good meal, Huru is made for
          it.
        </p>
      </div>
      <div className="highlight-links">
        <Link to="/play">
          <span>01</span>
          <strong>Come play</strong>
          <ArrowUpRight /> 
        </Link>
        <Link to="/services">
          <span>02</span>
          <strong>Come hungry</strong>
          <ArrowUpRight />
        </Link>
        <Link to="/events">
          <span>03</span>
          <strong>Come together</strong>
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
