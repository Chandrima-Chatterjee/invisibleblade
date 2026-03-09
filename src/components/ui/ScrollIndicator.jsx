import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  return (
    <div className="scrollA" aria-hidden="true">
      <div className="scrollA__label">Scroll</div>
      <div className="scrollA__line" />
    </div>
  );
}