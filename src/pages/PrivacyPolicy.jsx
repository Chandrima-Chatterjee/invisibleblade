import SectionTitle from "../components/ui/SectionTitle";

export default function PrivacyPolicy() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 820 }}>

        <SectionTitle
          kicker="Legal"
          title="Privacy"
          highlight="Policy"
        />

        <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
          Invisible Blade Studio respects your privacy. This website does not
          collect personal data directly unless you contact us via email or
          external platforms.
        </p>

        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 16 }}>
          We may use third-party services such as YouTube, social media
          platforms, or analytics tools which may collect data according to
          their own privacy policies.
        </p>

        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 16 }}>
          By using this website, you agree to the use of such third-party
          services. For any concerns, contact us at:
          <br />
          <strong>invisiblebladeproductions@gmail.com</strong>
        </p>

      </div>
    </div>
  );
}