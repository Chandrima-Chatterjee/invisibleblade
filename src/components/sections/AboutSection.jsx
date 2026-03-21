import "./AboutSection.css";
import SectionTitle from "../ui/SectionTitle";

import {
  FaFacebookF,
  FaSpotify,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="aboutSection section">
      <div className="container">

        <SectionTitle
          kicker="About"
          title="Who is"
          highlight="Invisible Blade"
          right="Music • Film • Story"
        />

        <div className="aboutSection__grid">

          {/* IMAGE */}
          <div className="aboutSection__imageWrap">
            <img
              src="/ari.PNG"
              alt="Saikat Bhattacharya"
              className="aboutSection__image"
            />
          </div>

          {/* CONTENT */}
          <div className="aboutSection__content">

            <p className="aboutSection__intro">
    <strong>Invisible Blade</strong> is a creative brand and production studio founded by Saikat Bhattacharya, known for music, cinematic storytelling, and global collaborations.
  </p>

            <h2 className="aboutSection__headline">
              Invisible Blade is the creative vision of{" "}
              <span>Saikat Bhattacharya</span>
            </h2>

            <p className="aboutSection__intro">
              Invisible Blade Studio is a creative production studio specializing in music production, cinematic visuals, and storytelling. Founded by <strong>Saikat Bhattacharya</strong>, the studio blends Rabindra Sangeet, Bollywood arrangements, and modern sound design into a unique creative identity.
            </p>

            <p className="aboutSection__intro">
              Beyond production, the platform documents the journey — sharing insights, behind-the-scenes moments, and the evolution of music and film projects.
            </p>

            <p>
              Somewhere on Earth — discovering new faces and seeking harmony —
              Invisible Blade was born as a cinematic music and storytelling
              studio. Founded by musician and filmmaker Saikat Bhattacharya,
              the brand blends emotion, sound, and visual narrative into
              immersive experiences.
            </p>

            <p>
              Since June 18, 2018, the channel has grown into a global
              community with <strong>91.5K+ subscribers</strong> and
              over <strong>20 million views</strong>, reflecting a commitment
              to artistic excellence and cinematic storytelling.
            </p>

            <div className="aboutSection__stats">
              <div className="stat">38 Videos</div>
              <div className="stat stat--accent">91.5K Subscribers</div>
              <div className="stat">20.9M+ Views</div>
            </div>

<br/>
            <div className="aboutSection__socials">
              <a href="https://facebook.com/InvisibleBladeOfficial" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://open.spotify.com/artist/2VRRu9peJTG5aRFLmUPt9V" target="_blank" rel="noreferrer">
                <FaSpotify />
              </a>
              <a href="https://facebook.com/saikat.bhattacharya.7906" target="_blank" rel="noreferrer">
                <FaGlobe />
              </a>
              <a href="https://instagram.com/invisible_blade_official" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/blade_invisible" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@InvisibleBlade" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}