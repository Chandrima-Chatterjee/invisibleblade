import { Link } from "react-router-dom";
import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <Link className="postCard" to={`/blog/${post.slug}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="postCard__media">
        <img src={post.cover} alt={post.title} />
        <div className="postCard__shine" />
      </div>

      <div className="postCard__body">
        <div className="tagRow">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        <div className="postCard__title">{post.title}</div>
        <div className="postCard__excerpt">{post.excerpt}</div>

        <div className="postCard__meta">
          <span>{post.date}</span>
          <span className="postCard__dot">•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}