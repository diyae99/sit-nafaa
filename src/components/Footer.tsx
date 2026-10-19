import { site, ui } from "../data";
import { Brand, Icon } from "./ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-identity">
          <a href="/" aria-label={`${site.name} — ${ui.home}`}>
            <Brand />
          </a>
          <p>{site.footer.tagline}</p>
          <a className="text-link" href="/preinscription">
            {ui.preinscription}
            <Icon name="arrow" />
          </a>
        </div>
        <div>
          <h2>{site.footer.schoolTitle}</h2>
          <nav aria-label={ui.footerNav}>
            {site.nav
              .filter((n) => n.href !== "/")
              .map((n) => (
                <a href={n.href} key={n.href}>
                  {n.label}
                </a>
              ))}
          </nav>
        </div>
        <div>
          <h2>{site.footer.contactTitle}</h2>
          <dl>
            <dt>{ui.address}</dt>
            <dd>{site.contact.address || ui.toComplete}</dd>
            <dt>{ui.phone}</dt>
            <dd>{site.contact.phone || ui.toComplete}</dd>
            <dt>{ui.hours}</dt>
            <dd>{site.contact.hours || ui.toComplete}</dd>
          </dl>
        </div>
        <div className="footer-social">
          <h2>{site.footer.socialTitle}</h2>
          <p>{site.footer.socialText}</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <Icon name="instagram" />
            {ui.instagram}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.footer.bottom}</span>
        <a href="#haut" className="back-top">
          {ui.backTop}
          <Icon name="up" />
        </a>
      </div>
    </footer>
  );
}
