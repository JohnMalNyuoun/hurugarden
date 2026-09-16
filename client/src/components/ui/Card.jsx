export default function Card({
  number,
  icon,
  title,
  children,
  className = "",
}) {
  return (
    <article className={`feature-card ${className}`}>
      <div className="card-top">
        <span className="card-number">{number}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
