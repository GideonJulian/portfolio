import { useEffect, useCallback, useState } from "react";
import "./../ProjectSheet.css";

export default function ProjectSheet({ project, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, handleClose]);

  useEffect(() => {
    if (project) {
      document.body.classList.add("sheet-open");
    } else {
      document.body.classList.remove("sheet-open");
    }
    return () => document.body.classList.remove("sheet-open");
  }, [project]);

  if (!project) return null;

  return (
    <div
      className={`sheet-overlay ${closing ? "closing" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className={`sheet-panel ${closing ? "closing" : ""}`}>

        {/* Top bar */}
        <div className="sheet-topbar">
          <button onClick={handleClose} className="sheet-close">
            Close
          </button>
        </div>

        <div className="sheet-body">

          {/* Header */}
          <div className="sheet-header">
            <h2 className="sheet-title">{project.name}</h2>
            <span className="sheet-year">{project.year}</span>
          </div>

          {/* Image */}
          <div className="sheet-image-wrap">
            <img src={project.image} alt={project.name} />
          </div>

          {/* Story (NEW 🔥) */}
          {project.story && (
            <section className="sheet-section">
              <h3 className="sheet-section-title">Story</h3>
              <p className="sheet-text">{project.story}</p>
            </section>
          )}

          {/* Description */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">Overview</h3>
            <p className="sheet-text">{project.desc}</p>
          </section>

          {/* Stack */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">Stack</h3>
            <div className="sheet-stack">
              {project.lang.split("+").map((tech) => (
                <span key={tech.trim()} className="sheet-tag">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div className="sheet-divider" />

          {/* Actions */}
          <div className="sheet-actions">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project ↗
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}