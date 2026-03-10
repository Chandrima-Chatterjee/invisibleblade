import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS } from "../data/posts";
import Button from "../components/ui/Button";
import { useEffect } from "react";


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

      {/* HERO SECTION */}
<section className="blogHero">
  <div className="container blogHeroGrid">

    <div className="blogHeroText">

      <div className="blogMeta tagRow">
      {post.tags.map((t) => (
        <span key={t} className="pill">{t}</span>
      ))}
      <span className="pill pill--accent">{post.readTime}</span>
    </div>

      <h1 className="blogTitle">{post.title}</h1>

      <p className="blogExcerpt">{post.excerpt}</p>

    </div>

    <div className="blogHeroImage">
      <img src={post.cover} alt={post.title} />
    </div>

  </div>
</section>

      {/* CONTENT */}
      <section className="section">
        <div className="container blogContent">

          {post.content.map((para, idx) => (
            <div
              key={idx}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}

          <blockquote className="blogQuote">
            Stories are not just told — they are felt.
          </blockquote>

          {/* VIDEO */}
          {post.video && (
            <div className="blogVideo">
              <iframe
                src={`https://www.youtube.com/embed/${post.video}`}
                title={post.title}
                frameBorder="0"
                tabIndex="-1"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="blogActions">
            <Button variant="primary" to="/blog">Back to blog</Button>

            <Link to="/" className="btn btn--ghost">
              Home <span className="btnArrow">→</span>
            </Link>
          </div>

        </div>
      </section>

      

    </article>
  );
}