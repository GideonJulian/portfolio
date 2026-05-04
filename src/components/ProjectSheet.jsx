import { useEffect, useCallback, useState } from "react";
import './../ProjectSheet.css'
export default function ProjectSheet({ project, onClose }) {
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 350);
  }, [onClose]);

  // ESC key
  useEffect(() => {
    if (!project) return;

    const handler = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [project, handleClose]);

  // Lock scroll
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
      className={`sheet-overlay${closing ? " closing" : ""} mb-80`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className={`sheet-panel${closing ? " closing" : ""}`}>
        
        {/* Top bar */}
        <div className="sheet-topbar">
          <button onClick={handleClose}>Close</button>
        </div>

        {/* Content */}
        <div className="sheet-body">
          <h2>{project.name}</h2>
          <p>{project.subtitle}</p>

          <img src={project.image} alt={project.name} />

          <h3>The Build</h3>
          <p>{project.buildDesc}</p>

          <div>
            {project.techStack?.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <h3>Challenges</h3>
          <p>{project.challenges}</p>

          <div>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank">
                Live Demo
              </a>
            )}
            {project.sourceUrl && (
              <a href={project.sourceUrl} target="_blank">
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}