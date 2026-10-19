import type { ReactNode } from "react";
import { photos, schoolPhoto, site, type Photo } from "../data";
export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h15M13 6l6 6-6 6" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    book: (
      <>
        <path d="M12 5v15M12 5C9 3 5 3 2 4v14c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18M5 6h14M5 18h14" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v2" />
      </>
    ),
    school: (
      <>
        <path d="m2 10 10-7 10 7M4 9v12h16V9M9 21v-7h6v7M10 8h4" />
      </>
    ),
    flower: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M9 5c0-5 6-5 6 0 4-3 8 1 4 5 5 1 4 7-1 7 1 5-5 7-7 2-3 4-8 1-6-3-5-2-3-8 2-7-1-3 0-4 2-4Z" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z" />
      </>
    ),
    cap: (
      <>
        <path d="m2 8 10-5 10 5-10 5-10-5ZM6 10v7c4 3 8 3 12 0v-7M22 8v9" />
      </>
    ),
    ball: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3v18M6 5c7 5 7 9 0 14M18 5c-7 5-7 9 0 14" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="m5 3 4 1 1 5-3 2c2 3 3 4 6 6l2-3 5 1 1 4c-4 7-25-14-16-16Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l4 3" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17 7h.01" />
      </>
    ),
    zoom: (
      <>
        <path d="M3 9V3h6M15 3h6v6M21 15v6h-6M9 21H3v-6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    up: <path d="M12 20V4M5 11l7-7 7 7" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.book}
    </svg>
  );
}
export function Brand() {
  return site.logo.src ? (
    <img
      className="brand-logo"
      src={site.logo.src}
      alt={site.logo.alt}
      width={site.logo.width}
      height={site.logo.height}
    />
  ) : (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <Icon name="book" />
      </span>
      <span>
        <small>{site.brandLabel}</small>
        <strong>
          {site.shortName}
          <span>.</span>
        </strong>
      </span>
    </span>
  );
}
export function PhotoImage({
  id,
  priority = false,
  className = "",
}: {
  id: string;
  priority?: boolean;
  className?: string;
}) {
  const photo =
    id === schoolPhoto.id ? schoolPhoto : photos.find((p) => p.id === id);
  if (!photo) return null;
  return (
    <img
      className={className}
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: photo.position }}
    />
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function Heading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-heading${center ? " centered" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`wave ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 45C260 115 440-18 720 25s440 80 720 4v61H0Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function PhotoCaption({ photo }: { photo: Photo }) {
  return (
    <span className="photo-caption">
      <Icon
        name={
          photo.id === "sport" ? "ball" : photo.id === "hall" ? "school" : "pin"
        }
      />
      {photo.title}
    </span>
  );
}
