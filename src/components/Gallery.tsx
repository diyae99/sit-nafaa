import { useEffect, useRef, useState } from "react";
import { photos, ui, type Photo } from "../data";
import { Icon, PhotoImage } from "./ui";
function Lightbox({
  photo,
  onClose,
  onNext,
  onPrevious,
  opener,
}: {
  photo: Photo;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  opener: HTMLElement | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const oldOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = oldOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      className="lightbox-dialog"
      ref={dialog}
      aria-labelledby="lightbox-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Tab") {
          const controls = Array.from(
            e.currentTarget.querySelectorAll<HTMLButtonElement>(
              "button:not(:disabled)",
            ),
          );
          const first = controls[0],
            last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          onNext();
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          onPrevious();
        }
      }}
    >
      <div className="lightbox-content">
        <div className="lightbox-heading">
          <h2 id="lightbox-title">{photo.title}</h2>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label={ui.closeGallery}
            autoFocus
          >
            <Icon name="close" />
          </button>
        </div>
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          style={{ maxWidth: photo.width }}
        />
        <div className="lightbox-controls">
          <button
            className="icon-button"
            onClick={onPrevious}
            aria-label={ui.previous}
          >
            <Icon className="reverse" name="arrow" />
          </button>
          <span>
            {photos.findIndex((p) => p.id === photo.id) + 1} / {photos.length}
          </span>
          <button className="icon-button" onClick={onNext} aria-label={ui.next}>
            <Icon name="arrow" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
export function Gallery({ filters = false }: { filters?: boolean }) {
  const opener = useRef<HTMLElement | null>(null);
  const [filter, setFilter] = useState("all"),
    [selected, setSelected] = useState<string | null>(null);
  const visible =
    filter === "all" ? photos : photos.filter((p) => p.id === filter);
  const photo = photos.find((p) => p.id === selected);
  function move(direction: number) {
    const index = photos.findIndex((p) => p.id === selected);
    setSelected(photos[(index + direction + photos.length) % photos.length].id);
  }
  return (
    <>
      {filters && (
        <div className="gallery-filters" aria-label={ui.ourSpaces}>
          <button
            className={filter === "all" ? "selected" : ""}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            {ui.allPhotos}
          </button>
          {ui.galleryFilters.map((f) => (
            <button
              key={f.id}
              className={filter === f.id ? "selected" : ""}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <div className={`gallery-grid${filters ? " full-gallery" : ""}`}>
        {visible.map((p) => (
          <figure key={p.id} className={`gallery-item gallery-${p.id}`}>
            <button
              onClick={(e) => {
                opener.current = e.currentTarget;
                setSelected(p.id);
              }}
              aria-label={`${ui.enlarge} : ${p.title}`}
            >
              <PhotoImage id={p.id} />
              <span className="gallery-zoom">
                <Icon name="zoom" />
              </span>
            </button>
            <figcaption>{p.title}</figcaption>
          </figure>
        ))}
      </div>
      {photo && (
        <Lightbox
          opener={opener.current}
          photo={photo}
          onClose={() => setSelected(null)}
          onNext={() => move(1)}
          onPrevious={() => move(-1)}
        />
      )}
    </>
  );
}
