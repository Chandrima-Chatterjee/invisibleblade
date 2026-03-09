import "./SectionTitle.css";

export default function SectionTitle({ kicker, title, highlight, right }) {
  return (
    <div className="sectionTitle">
      <div>
        {kicker ? <div className="kicker">{kicker}</div> : null}
        <h2 className="sectionTitle__h2">
          {title} {highlight ? <span className="sectionTitle__hi">{highlight}</span> : null}
        </h2>
      </div>
      {right ? <div className="sectionTitle__right">{right}</div> : null}
    </div>
  );
}