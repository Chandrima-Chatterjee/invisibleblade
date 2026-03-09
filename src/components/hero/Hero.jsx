import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../ui/Button";
import "./Hero.css";

export default function Hero({
  background,
  logoCornerText = "INVISIBLE BLADE",
  kicker = "Cinematic Studio",
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  align = "left",
}) {
  const sectionRef = useRef(null);

  // ✅ scroll progress ONLY for this hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ✅ subtle parallax while pinned
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  // ✅ optional: fade text a bit as you scroll down
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <section ref={sectionRef} className={`heroWrap heroA--${align}`}>
      {/* ✅ pinned background */}
      <motion.div
        className="heroFixed"
        style={{
          backgroundImage: `url(${background})`,
          y: bgY,
        }}
        aria-hidden="true"
      />

      {/* ✅ content layer */}
      <div className="heroContentContainer">
        <motion.div className="container heroA__inner" style={{ opacity: contentOpacity }}>
          <div className="heroA__topLabel">{logoCornerText}</div>

          <motion.div
            className="heroA__content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="kicker">{kicker}</div>

            <h1 className="heroA__title">
              {title} {highlight ? <span className="heroA__highlight">{highlight}</span> : null}
            </h1>

            <p className="heroA__sub">{subtitle}</p>

            <div className="heroA__cta">
              {primaryCta ? (
                <Button variant="primary" to={primaryCta.to}>
                  {primaryCta.label}
                </Button>
              ) : null}

              {secondaryCta ? (
                <Button variant="ghost" to={secondaryCta.to}>
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}