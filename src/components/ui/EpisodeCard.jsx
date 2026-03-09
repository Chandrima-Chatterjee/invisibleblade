import { useState } from "react";
import "./EpisodeCard.css";

export default function EpisodeCard({ ep }) {
  const [open, setOpen] = useState(false);

  // Extract video ID safely
  const videoId = ep.link.includes("youtu.be")
    ? ep.link.split("youtu.be/")[1].split("?")[0]
    : ep.link.split("v=")[1];

  return (
    <>
      <div className="epCard">
        <div className="epCard__thumb">
          <img src={ep.cover} alt={ep.title} />

          <button
            className="epCard__play"
            onClick={() => setOpen(true)}
            aria-label="Play"
          >
            ▶
          </button>
        </div>

        <div className="epCard__content">
          <div className="epCard__title">{ep.title}</div>
          <div className="epCard__desc">{ep.description}</div>

          <div className="epCard__row">
            {/* 🔥 NEW: Watch on YouTube button */}
            <a
            className="epCard__watchBtn"
            href={ep.link}
            target="_blank"
            rel="noreferrer"
          >
            ▶ Watch on YouTube
          </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="videoModal" onClick={() => setOpen(false)}>
          <div
            className="videoModal__inner"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={ep.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}