import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { cycles, site, ui, seoPages } from "./data";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Sections";
import {
  CambridgePage,
  ContactPage,
  CyclePage,
  CyclesPage,
  LifePage,
  NotFound,
  SchoolPage,
} from "./pages";
import "./styles.css";
function currentUrl() {
  const next = new URL(window.location.href);
  if (next.pathname === "/" && next.hash === "#pedagogie") {
    next.pathname = "/notre-ecole";
    next.hash = "#projet-pedagogique";
    history.replaceState({}, "", next);
  }
  return next;
}
function App() {
  const [url, setUrl] = useState(currentUrl);
  const main = useRef<HTMLElement>(null);
  const firstLoad = useRef(true);
  useEffect(() => {
    function sync() {
      setUrl(currentUrl());
    }
    function links(e: MouseEvent) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        e.shiftKey
      )
        return;
      const a = (e.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target || a.hasAttribute("download")) return;
      const next = new URL(a.href);
      if (next.origin !== location.origin) return;
      e.preventDefault();
      if (next.href !== location.href) {
        history.pushState({}, "", next);
        sync();
      } else {
        if (next.hash)
          document
            .getElementById(decodeURIComponent(next.hash.slice(1)))
            ?.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
    document.addEventListener("click", links);
    window.addEventListener("popstate", sync);
    history.scrollRestoration = "manual";
    return () => {
      document.removeEventListener("click", links);
      window.removeEventListener("popstate", sync);
    };
  }, []);
  const path = url.pathname.replace(/\/$/, "") || "/";
  const cycle = cycles.find((c) => path === `/cycles/${c.slug}`);
  const metadata = seoPages[path] ?? seoPages["404"];
  useEffect(() => {
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    const frame = requestAnimationFrame(() => {
      if (!firstLoad.current) main.current?.focus({ preventScroll: true });
      if (url.hash)
        document
          .getElementById(decodeURIComponent(url.hash.slice(1)))
          ?.scrollIntoView({ behavior: "instant", block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      firstLoad.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [url, metadata, path]);
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.animate?.(
              [
                { opacity: 0.5, transform: "translateY(15px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 550, easing: "ease-out" },
            );
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    main.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [path]);
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/notre-ecole") page = <SchoolPage />;
  else if (path === "/nos-cycles") page = <CyclesPage />;
  else if (cycle) page = <CyclePage cycle={cycle} />;
  else if (path === "/vie-scolaire") page = <LifePage />;
  else if (path === "/cambridge") page = <CambridgePage />;
  else if (path === "/contact" || path === "/preinscription")
    page = (
      <ContactPage
        search={url.search}
        admissions={path === "/preinscription"}
      />
    );
  else page = <NotFound />;
  return (
    <>
      <div id="haut" />
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <Header path={path} />
      <main id="main" ref={main} tabIndex={-1}>
        {page}
      </main>
      <Footer />
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
