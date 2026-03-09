import "./Footer.css";
import {
  FaFacebookF,
  FaSpotify,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="dividerGlow" />

      <div className="container footerInner">

        {/* LEFT */}
        <div className="footerLeft">
          <div className="footerBrand">Invisible Blade</div>
          <div className="footerMuted">
            Cinematic music • Visual storytelling • Global audience
          </div>
        </div>

        {/* CENTER — SOCIAL ICONS */}
        <div className="footerSocial">
          <a
            className="socialBtn"
            href="https://facebook.com/InvisibleBladeOfficial"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            className="socialBtn"
            href="https://open.spotify.com/artist/2VRRu9peJTG5aRFLmUPt9V"
            target="_blank"
            rel="noreferrer"
            aria-label="Spotify"
          >
            <FaSpotify />
          </a>

          <a
            className="socialBtn"
            href="https://facebook.com/saikat.bhattacharya.7906"
            target="_blank"
            rel="noreferrer"
            aria-label="Business"
          >
            <FaGlobe />
          </a>

          <a
            className="socialBtn"
            href="https://instagram.com/invisible_blade_official"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            className="socialBtn"
            href="https://twitter.com/blade_invisible"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            className="socialBtn"
            href="https://www.youtube.com/@InvisibleBlade"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        {/* RIGHT */}
        <div className="footerRight">
          <div className="footerLinks">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="mailto:contact@invisibleblade.com">Contact</a>
          </div>

          <div className="footerCopy">
            © {new Date().getFullYear()} Invisible Blade
          </div>
        </div>
      </div>
    </footer>
  );
}