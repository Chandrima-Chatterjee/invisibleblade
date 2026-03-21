import Hero from "../components/hero/Hero";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";
import AboutSection from "../components/sections/AboutSection";

import heroBg from "../assets/images/hero3.jpg";

export default function About() {
  return (
    <div>

      {/* HERO */}
      <Hero
        background={heroBg}
        kicker="About"
        title="Invisible"
        highlight="Blade"
        subtitle="A cinematic music and storytelling studio founded by Saikat Bhattacharya — blending sound, visuals, and emotion into immersive creative work."
        primaryCta={{ label: "Explore the blog", to: "/blog" }}
        secondaryCta={{ label: "Back home", to: "/" }}
        showScroll={false}
        align="left"
      />
      

       {/* ABOUT SECTION */}
      <AboutSection />

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="container">

          <SectionTitle
            kicker="Studio Philosophy"
            title="Art"
            highlight="meets story"
            right="Music • Film • Narrative"
          />

          <div className="grid2">

            <div className="card" style={{ padding: 22, borderRadius: 22 }}>
              <div className="kicker">01</div>

              <h3
                style={{
                  marginTop: 10,
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Emotion First
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginTop: 10,
                }}
              >
                Every Invisible Blade project begins with emotion. Whether it
                is a mashup, cinematic music video, or short film, the goal is
                always the same — create something that people can feel, not
                just watch or hear.
              </p>
            </div>

            <div className="card" style={{ padding: 22, borderRadius: 22 }}>
              <div className="kicker">02</div>

              <h3
                style={{
                  marginTop: 10,
                  textTransform: "uppercase",
                  fontWeight: 900,
                }}
              >
                Cinematic Storytelling
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  marginTop: 10,
                }}
              >
                Invisible Blade combines music production, filmmaking, and
                visual storytelling into one cinematic experience. From
                Santiniketan to Italy, Dubai to Kolkata, the studio explores
                global collaborations and diverse cultural sounds.
              </p>
            </div>

          </div>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" to="/blog">
              Read the blog
            </Button>

            <Button variant="ghost" to="/">
              Back home
            </Button>
          </div>
        </div>
      </section>

     

    </div>
  );
}