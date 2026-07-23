import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts";
import Button from "../components/ui/Button";

function LocationBlock({ title, text, image, reverse }) {
  return (
    <div className={`locationBlock${reverse ? " locationBlock--reverse" : ""}`}>
      <div className="locationBlock__text">
        <h3 className="locationBlock__title">{title}</h3>
        <p>{text}</p>
      </div>
      <div className="locationBlock__image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

function FilmStripDivider() {
  return (
    <div className="filmStrip">
      <div className="filmStrip__sprockets" />
      <div className="filmStrip__frames" />
      <div className="filmStrip__sprockets" />
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();

  const post = useMemo(() => POSTS.find((p) => p.slug === slug), [slug]);

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <h1>Post not found</h1>
          <Button variant="primary" to="/blog">Back to blog</Button>
        </div>
      </section>
    );
  }

  return (
    <article className="blogPost">

      {/* HERO */}
      <section className="blogHero">
        <div className="blogHeroImageWrap">
          <img src={post.cover} alt={post.title} className="blogHeroImg" />
        </div>

        <div className="container blogHeroInner">
          <h1 className="blogTitle">{post.title}</h1>
          <p className="blogExcerpt">{post.excerpt}</p>
        </div>
      </section>

      <FilmStripDivider />

      {/* CONTENT */}
      <section className="section">
        <div className="container">
          <div className="blogContent">
            {post.content.map((block, idx) => {
              if (typeof block === "string") {
                return <div key={idx} dangerouslySetInnerHTML={{ __html: block }} />;
              }
              if (block.type === "location") {
                return (
                  <LocationBlock
                    key={idx}
                    title={block.title}
                    text={block.text}
                    image={block.image}
                    reverse={idx % 2 === 1}
                  />
                );
              }
              return null;
            })}

            <blockquote className="blogQuote">
              <span className="blogQuoteMark">“</span>
              Stories are not just told — they are felt.
            </blockquote>

            {/* VIDEO */}
            {post.video && (
              <div className="blogVideoBlock">
                <div className="blogVideoLabel">▶ WATCH</div>
                <div className="blogVideo">
                  <iframe
                    src={`https://www.youtube.com/embed/${post.video}`}
                    title={post.title}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* ACTIONS */}
            <div className="blogActions">
              <Button variant="primary" to="/blog">Back to blog</Button>
              <Link to="/" className="btn btn--ghost">
                Home <span className="btnArrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}