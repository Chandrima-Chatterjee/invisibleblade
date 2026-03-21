import SectionTitle from "../components/ui/SectionTitle";

export default function Terms() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 820 }}>

        <SectionTitle
          kicker="Legal"
          title="Terms"
          highlight="of Use"
        />

        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
          All content on Invisible Blade Studio, including music, videos,
          visuals, and text, is the property of the creator unless otherwise
          stated.
        </p>

        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 16 }}>
          You may not copy, distribute, or reproduce any content without
          permission. External links and embedded content belong to their
          respective owners.
        </p>

        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 16 }}>
          By using this website, you agree to respect the intellectual property
          and usage guidelines outlined here.
        </p>

      </div>
    </div>
  );
}