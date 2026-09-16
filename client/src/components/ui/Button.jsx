import { Link } from "react-router-dom";
export default function Button({
  children,
  to,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const className = `button button-${variant}`;
  return to ? (
    <Link className={className} to={to}>
      {children}
      <span></span>
    </Link>
  ) : (
    <button className={className} type={type} onClick={onClick}>
      {children}
      <span></span>
    </button>
  );
}
