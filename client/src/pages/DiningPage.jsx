const menu = [
  ["Something small", "Mandazi with spiced honey · 350 KES"],
  ["From the garden", "Seasonal grain bowl with greens · 850 KES"],
  ["For the table", "Charred chicken, kachumbari & flatbread · 1,200 KES"],
  ["Something sweet", "Coconut cardamom cake · 500 KES"],
];
export default function DiningPage() {
  return (
    <div className="inner-page">
      <section className="page-hero dining-hero">
        <p className="eyebrow light">
          The garden table <span>✳</span>
        </p>
        <h1>
          Come for the
          <br />
          <i>good stuff.</i>
        </h1>
        <p>
          Bright, generous food made with local ingredients and a little bit of
          love.
        </p>
      </section>
      <section className="menu-section section-pad">
        <div>
          <p className="eyebrow">Today's table</p>
          <h2>
            Good food,
            <br />
            <i>no fuss.</i>
          </h2>
          <p className="prose">
            Our menu changes with the seasons and the market. It is the kind of
            food that leaves you energized, not weighed down.
          </p>
        </div>
        <div className="menu-list">
          {menu.map(([title, detail]) => (
            <div className="menu-item" key={title}>
              <h3>{title}</h3>
              <span>{detail}</span>
            </div>
          ))}
          <small>
            Ask us about vegetarian, vegan, and little-person options.
          </small>
        </div>
      </section>
    </div>
  );
}
