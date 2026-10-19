import {
  cambridgeAxes,
  cycleCardPhotos,
  cycleCardsNotice,
  cycles,
  pedagogy,
  photos,
  schoolLife,
  site,
  ui,
  type Cycle,
} from "../data";
import { Eyebrow, Heading, Icon, PhotoCaption, PhotoImage, Wave } from "./ui";
import { Gallery } from "./Gallery";
export function CycleCards({ omit, photographic = false }: { omit?: string; photographic?: boolean }) {
  return (
    <div className={`cycle-grid${photographic ? " cycle-grid-photographic" : ""}`}>
      {cycles
        .filter((c) => c.slug !== omit)
        .map((c) => (
          <article className={`cycle-card ${c.accent} reveal`} key={c.slug}>
            {photographic ? (
              <div className="cycle-photo">
                <img src={cycleCardPhotos[c.slug].src} width={cycleCardPhotos[c.slug].width} height={cycleCardPhotos[c.slug].height} alt={cycleCardPhotos[c.slug].alt} style={{objectPosition: cycleCardPhotos[c.slug].position}} loading="lazy" decoding="async" />
              </div>
            ) : c.photoId ? (
              <div className="cycle-photo">
                <PhotoImage id={c.photoId} />
              </div>
            ) : (
              <div className="cycle-art" aria-hidden="true">
                <span className="cycle-orbit" />
                <Icon name={c.icon} />
                <span className="cycle-dot" />
              </div>
            )}
            <div className="cycle-card-content">
              <p className="cycle-tagline">{c.tagline}</p>
              <h3>
                <a href={`/cycles/${c.slug}`}>{c.title}</a>
              </h3>
              <p>{c.description}</p>
              <a
                className="text-link"
                href={`/cycles/${c.slug}`}
                aria-label={`${ui.discoverCycle} ${c.title}`}
              >
                {ui.discoverCycle}
                <Icon name="arrow" />
              </a>
            </div>
          </article>
        ))}
    </div>
  );
}
function PhotographicCycleCards() {
  return <>
    <div className="photo-cycle-grid">
      {cycles.map(cycle => {
        const photo = cycleCardPhotos[cycle.slug];
        return <article className={`photo-cycle-card ${cycle.accent}`} key={cycle.slug}>
          <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" style={{objectPosition:photo.position}}/>
          <div className="photo-cycle-content">
            <h3>{cycle.title}</h3>
            <p>{photo.description}</p>
            <a href={`/cycles/${cycle.slug}`} aria-label={`${ui.discoverCycle} ${cycle.title}`}>Découvrir <Icon name="arrow"/></a>
          </div>
        </article>;
      })}
    </div>
    <p className="photo-cycle-notice">{cycleCardsNotice}</p>
  </>;
}
export function SchoolIntro() {
  return (
    <section className="section school-intro" id="notre-ecole">
      <div className="container school-intro-grid">
        <figure className="school-single-photo reveal">
          <PhotoImage id={site.school.photoId} />
        </figure>
        <div className="school-intro-copy reveal">
          <Heading
            eyebrow={site.school.eyebrow}
            title={site.school.title}
            text={site.school.intro}
          />
          <div className="intro-points">
            {pedagogy.map((p) => (
              <span key={p.title}>
                <Icon name="check" />
                {p.title}
              </span>
            ))}
          </div>
          <div className="action-row">
            <a className="button button-primary" href="/notre-ecole">
              {ui.schoolMore}
              <Icon name="arrow" />
            </a>
            <a className="text-link" href="/notre-ecole#projet-pedagogique">
              {ui.pedagogyMore}
              <Icon name="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CyclesSection() {
  return (
    <section className="section cycles-section" id="cycles">
      <div className="container">
        <Heading
          center
          eyebrow={site.cycleSection.eyebrow}
          title={site.cycleSection.title}
          text={site.cycleSection.intro}
        />
        <PhotographicCycleCards />
      </div>
    </section>
  );
}
export function CambridgeAxes() {
  return (
    <div className="cambridge-axes">
      {cambridgeAxes.map((a) => (
        <article key={a.title}>
          <span className="cambridge-axis-icon"><Icon name={a.icon} /></span>
          <h3>{a.title}</h3>
          <p>{a.text}</p>
        </article>
      ))}
    </div>
  );
}
export function CambridgeIdentity() {
  return <img className="cambridge-logo" src={site.cambridge.logo.src} width={863} height={148} alt={site.cambridge.logo.alt} loading="lazy" decoding="async" />;
}
export function CambridgeSection() {
  return (
    <section className="section cambridge-section" id="cambridge">
      <div className="container">
        <div className="cambridge-layout">
          <div className="cambridge-copy reveal">
            <CambridgeIdentity />
            <Heading eyebrow={site.cambridge.eyebrow} title={site.cambridge.title} text={site.cambridge.intro} />
            <a className="button button-primary" href="/cambridge">{ui.discoverCambridge}<Icon name="arrow" /></a>
          </div>
          <aside className="cambridge-language-card reveal">
            <span className="cambridge-language-icon" aria-hidden="true"><Icon name="globe" /></span>
            <p className="cambridge-language-title">{site.cambridge.languageTitle}</p>
            <p>{site.cambridge.panelText}</p>
            <a className="text-link" href="/contact?demande=cambridge#formulaire">{site.cambridge.cta}<Icon name="arrow" /></a>
          </aside>
        </div>
        <CambridgeAxes />
      </div>
    </section>
  );
}
export function SpacesSection() {
  return (
    <section className="section spaces-section" id="espaces">
      <div className="container">
        <div className="heading-with-link">
          <Heading
            eyebrow={site.spaces.eyebrow}
            title={site.spaces.title}
            text={site.spaces.intro}
          />
          <a className="text-link" href="/vie-scolaire#espaces">
            {ui.spacesMore}
            <Icon name="arrow" />
          </a>
        </div>
        <div className="spaces-grid">
          {photos.map((p) => (
            <article key={p.id} className={`space-card space-${p.id} reveal`}>
              <div className="space-photo">
                <PhotoImage id={p.id} />
                <PhotoCaption photo={p} />
              </div>
              <p>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function LifeSection() {
  return (
    <section className="section life-section">
      <div className="container">
        <Heading
          center
          eyebrow={site.life.eyebrow}
          title={site.life.title}
          text={site.life.intro}
        />
        <Gallery />
        <div className="life-points">
          {schoolLife.map((p) => (
            <article key={p.title} className="reveal">
              <span className="round-icon">
                <Icon name={p.icon} />
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
        <div className="center-actions">
          <a className="button button-secondary" href="/vie-scolaire">
            {ui.lifeMore}
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
export function VisitBanner() {
  return (
    <section className="visit-section">
      <Wave />
      <div className="container visit-inner reveal">
        <div className="visit-icon" aria-hidden="true">
          <Icon name="school" />
        </div>
        <div>
          <Eyebrow>{site.visit.eyebrow}</Eyebrow>
          <h2>{site.visit.title}</h2>
          <p>{site.visit.text}</p>
        </div>
        <a
          className="button button-primary"
          href="/contact?demande=visite#formulaire"
        >
          {site.visit.cta}
          <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
export function ContactCards() {
  return (
    <div className="contact-cards">
      {ui.contactCards.map((c) => {
        const value = site.contact[c.key];
        return (
          <article key={c.key}>
            <span className="round-icon">
              <Icon name={c.icon} />
            </span>
            <div>
              <h3>{c.label}</h3>
              {value && c.key === "phone" ? (
                <a href={`tel:${value.replace(/\s/g, "")}`}>{value}</a>
              ) : value && c.key === "email" ? (
                <a href={`mailto:${value}`}>{value}</a>
              ) : (
                <p>{value || ui.toComplete}</p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function Home() {
  const heroPhoto = photos.find((photo) => photo.id === site.hero.photoId);
  return (
    <>
      <section
        className="hero hero-cover"
        id="accueil"
        style={{
          backgroundImage: heroPhoto ? `url("${heroPhoto.src}")` : undefined,
        }}
      >
        <div className="hero-cover-content">
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>
          <h1>{site.hero.title}</h1>
          <p className="hero-cover-intro">{site.hero.intro}</p>
          <p className="hero-cover-cycles">
            {cycles.map((cycle) => (
              <span key={cycle.slug}>{cycle.title}</span>
            ))}
          </p>
        </div>
      </section>
      <div className="container quick-links">
        {ui.schoolLinks.map((l) => (
          <a href={l.href} key={l.title}>
            <span className="round-icon">
              <Icon name={l.icon} />
            </span>
            <span>
              <strong>{l.title}</strong>
              <small>
                {l.title === ui.ourCycles
                  ? site.cycleSection.eyebrow
                  : l.title === site.school.presentationTitle
                    ? site.school.eyebrow
                    : ui.visit}
              </small>
            </span>
            <Icon name="arrow" />
          </a>
        ))}
      </div>
      <SchoolIntro />
      <CyclesSection />
      <CambridgeSection />
      <LifeSection />
      <VisitBanner />
      <section className="section home-contact">
        <div className="container">
          <Heading
            center
            eyebrow={site.contactSection.eyebrow}
            title={site.contactSection.title}
            text={site.contactSection.intro}
          />
          <ContactCards />
        </div>
      </section>
    </>
  );
}
export function CycleSidePanel({ cycle }: { cycle: Cycle }) {
  return (
    <aside className={`cycle-side-panel ${cycle.accent}`}>
      <span className="round-icon">
        <Icon name={cycle.icon} />
      </span>
      <h2>{cycle.title}</h2>
      <p>{cycle.description}</p>
      <ul>
        {cycle.details.map((d) => (
          <li key={d.title}>
            <Icon name="check" />
            {d.title}
          </li>
        ))}
      </ul>
      <a
        className="button button-primary"
        href={`/preinscription?cycle=${cycle.slug}#formulaire`}
      >
        {ui.preinscription}
        <Icon name="arrow" />
      </a>
    </aside>
  );
}
