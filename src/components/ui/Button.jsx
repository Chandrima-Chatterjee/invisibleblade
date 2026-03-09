import { Link } from "react-router-dom";
import "./Button.css";

export default function Button({ variant = "primary", to, onClick, children }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
        <span className="btnArrow">→</span>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
      <span className="btnArrow">→</span>
    </button>
  );
}