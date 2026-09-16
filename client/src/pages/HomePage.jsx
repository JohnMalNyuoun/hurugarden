import HeroSection from "../components/home/HeroSection";
import ImpactPillars from "../components/home/ImpactPillars";
import HighlightsGrid from "../components/home/HighlightsGrid";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactPillars />
      <HighlightsGrid />
      <section className="quote-band">
        <p>
          "The best places make you
          <br />
          <i>want to stay a little longer."</i>
        </p>
        <span>— The Huru feeling</span>
      </section>
    </>
  );
}
