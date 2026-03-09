import { useMemo, useState } from "react";
import Hero from "../components/hero/Hero";
import SectionTitle from "../components/ui/SectionTitle";
import PostCard from "../components/ui/PostCard";

import heroBg from "../assets/images/hero2.jpg";
import { POSTS } from "../data/posts";

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  const allTags = useMemo(() => {
    const tags = new Set();
    POSTS.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  const visible = useMemo(() => {
    if (activeTag === "All") return POSTS;
    return POSTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div>
      <Hero
        background={heroBg}
        kicker="Studio Blog"
        title="News"
        highlight="& Stories"
        subtitle="Short, punchy posts about music production, branding, design, and building the Invisible Blade world."
        primaryCta={{ label: "Back to Home", to: "/" }}
        secondaryCta={{ label: "About", to: "/about" }}
        showScroll={false}
        align="left"
      />

      <section className="section section--tight">
        <div className="container">
          <SectionTitle
            kicker="Filter"
            title="Browse by"
            highlight="tag"
            right={`${visible.length} posts`}
          />

          <div className="tagRow" style={{ marginBottom: 18 }}>
            {allTags.map((t) => (
              <button
                key={t}
                className={t === activeTag ? "pill pill--accent" : "pill"}
                style={{ cursor: "pointer" }}
                onClick={() => setActiveTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid3">
            {visible.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}