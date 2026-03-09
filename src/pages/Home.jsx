import Hero from "../components/hero/Hero";
import SectionTitle from "../components/ui/SectionTitle";
import EpisodeCard from "../components/ui/EpisodeCard";
import PostCard from "../components/ui/PostCard";
import Button from "../components/ui/Button";
import AboutSection from "../components/sections/AboutSection";

import heroBg from "../assets/images/hero1.jpg";

import { EPISODES } from "../data/episodes";
import { POSTS } from "../data/posts";

export default function Home() {
  return (
    <main>

      {/* ================= HERO (H1) ================= */}

      <header>
        <Hero
          background={heroBg}
          kicker="Invisible Blade Studio"
          title="Crafting Sound"
          highlight="& Stories"
          subtitle="Music production, cinematic visuals, and a blog that documents the journey — clean, premium, and intentional."
          primaryCta={{ label: "Read the blog", to: "/blog" }}
          secondaryCta={{ label: "About the studio", to: "/about" }}
          showScroll
          align="left"
        />

        {/* Hidden SEO intro paragraph */}
        <p className="srOnly">
          Invisible Blade Studio is a music production and cinematic storytelling studio
          founded by Saikat Bhattacharya. The studio produces Rabindra Sangeet covers,
          Bollywood arrangements, short films, mashups, and musical collaborations
          filmed across India and internationally.
        </p>
      </header>

      {/* ================= ABOUT SECTION (H2) ================= */}

      <section aria-labelledby="about-heading">
        <AboutSection />
      </section>

      {/* ================= FEATURED VIDEOS ================= */}

      <section className="section section--tight" aria-labelledby="featured-videos">
        <div className="container">

          {/* H2 */}
          <SectionTitle
            kicker="Featured"
            title="Most popular"
            highlight="videos"
            right="Watch • Listen • Learn"
            id="featured-videos"
          />

          <div className="episodeSlider">
            {EPISODES.map((ep) => (
              <article className="episodeSlide" key={ep.id}>
                {/* EpisodeCard should contain an H3 title internally */}
                <EpisodeCard ep={ep} />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BLOG POSTS ================= */}

      <section className="section" aria-labelledby="latest-posts">
        <div className="container">

          {/* H2 */}
          <SectionTitle
            kicker="News & Stories"
            title="Latest"
            highlight="posts"
            right="Studio notes"
            id="latest-posts"
          />

          <div className="grid3">
            {POSTS.slice(0, 3).map((p) => (
              <article key={p.slug}>
                {/* PostCard should contain an H3 title internally */}
                <PostCard post={p} />
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Button variant="primary" to="/blog">
              View all posts
            </Button>

            <Button variant="ghost" to="/about">
              See the studio
            </Button>
          </div>

        </div>
      </section>

    </main>
  );
}