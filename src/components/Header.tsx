import { useEffect, useRef, useState } from "react";
import { cycles, site, ui } from "../data";
import { Brand, Icon } from "./ui";
export function Header({ path }: { path: string }) {
  const [menu, setMenu] = useState(false),
    [dropdown, setDropdown] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null),
    cycleButton = useRef<HTMLButtonElement>(null),
    header = useRef<HTMLElement>(null);
  useEffect(() => {
    setMenu(false);
    setDropdown(false);
  }, [path]);
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (dropdown) {
          setDropdown(false);
          cycleButton.current?.focus();
        } else if (menu) {
          setMenu(false);
          menuButton.current?.focus();
        }
      }
    }
    function outside(e: MouseEvent) {
      if (!header.current?.contains(e.target as Node)) {
        setMenu(false);
        setDropdown(false);
      }
    }
    window.addEventListener("keydown", key);
    window.addEventListener("click", outside);
    return () => {
      window.removeEventListener("keydown", key);
      window.removeEventListener("click", outside);
    };
  }, [menu, dropdown]);
  function close() {
    setMenu(false);
    setDropdown(false);
  }
  return (
    <div className="header-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{site.name}</span>
          <div>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              <Icon name="instagram" />
              {ui.instagram}
            </a>
            <span className="topbar-divider" />
            <a href="/contact?demande=visite#formulaire">
              {ui.visit}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
      <header ref={header} className="site-header">
        <div className="container header-inner">
          <a href="/" aria-label={`${site.name} — ${ui.home}`} onClick={close}>
            <Brand />
          </a>
          <button
            className="menu-toggle"
            ref={menuButton}
            aria-expanded={menu}
            aria-controls="primary-nav"
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? ui.close : ui.menu}
            <Icon name={menu ? "close" : "menu"} />
          </button>
          <nav
            id="primary-nav"
            className={menu ? "open" : ""}
            aria-label={ui.mainNav}
          >
            {site.nav.map((n) =>
              n.href === "/nos-cycles" ? (
                <div
                  key={n.href}
                  className="nav-cycles"
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node))
                      setDropdown(false);
                  }}
                >
                  <div className="nav-cycle-control">
                    <a
                      href={n.href}
                      aria-current={
                        path.startsWith("/cycles/") || path === n.href
                          ? "page"
                          : undefined
                      }
                      onClick={close}
                    >
                      {n.label}
                    </a>
                    <button
                      ref={cycleButton}
                      className="submenu-toggle"
                      aria-label={ui.cycleMenu}
                      aria-expanded={dropdown}
                      aria-controls="cycles-submenu"
                      onClick={() => setDropdown((v) => !v)}
                    >
                      <Icon name="chevron" />
                    </button>
                  </div>
                  <div
                    id="cycles-submenu"
                    className="submenu"
                    hidden={!dropdown}
                  >
                    {cycles.map((c) => (
                      <a
                        key={c.slug}
                        href={`/cycles/${c.slug}`}
                        onClick={close}
                      >
                        <span className={`submenu-icon ${c.accent}`}>
                          <Icon name={c.icon} />
                        </span>
                        <span>
                          {c.title}
                          <small>{c.tagline}</small>
                        </span>
                        <Icon name="arrow" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={close}
                  aria-current={path === n.href ? "page" : undefined}
                >
                  {n.label}
                </a>
              ),
            )}
            <a
              className="button button-primary header-cta"
              href="/preinscription"
              onClick={close}
            >
              {ui.preinscription}
              <Icon name="arrow" />
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
