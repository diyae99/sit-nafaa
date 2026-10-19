import {
  cycles,
  cycleCardsNotice,
  faq,
  pageContent,
  pedagogy,
  schoolLife,
  site,
  ui,
  type Cycle,
} from "./data";
import { Eyebrow, Heading, Icon, PhotoImage, Wave } from "./components/ui";
import {
  CambridgeAxes,
  CambridgeIdentity,
  ContactCards,
  CycleCards,
  CycleSidePanel,
  SpacesSection,
  VisitBanner,
} from "./components/Sections";
import { Gallery } from "./components/Gallery";
import { AdmissionForm } from "./components/AdmissionForm";
export function PageHero({
  title,
  text,
  eyebrow,
  photoId,
}: {
  title: string;
  text: string;
  eyebrow?: string;
  photoId?: string;
}) {
  return (
    <section className={`page-hero${photoId ? " with-photo" : ""}`}>
      <div className="container">
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <a href="/">{ui.home}</a>
          <Icon name="chevron" />
          <span>{title}</span>
        </nav>
        <div className="page-hero-grid">
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          {photoId && (
            <div className="page-hero-photo">
              <PhotoImage id={photoId} priority />
            </div>
          )}
        </div>
      </div>
      <Wave />
    </section>
  );
}
export function SchoolPage() {
  return (
    <>
      <PageHero
        title={site.school.pageTitle}
        text={site.school.pageIntro}
        eyebrow={site.school.eyebrow}
        photoId="hall"
      />
      <section className="section">
        <div className="container school-page-intro">
          <div>
            <Heading
              title={site.school.presentationTitle}
              text={site.school.body}
            />
            <p>{pageContent.schoolPresentationExtra}</p>
            <a
              className="button button-primary"
              href="/contact?demande=visite#formulaire"
            >
              {ui.visit}
              <Icon name="arrow" />
            </a>
          </div>
          <figure>
            <PhotoImage id="accueil" />
            <figcaption>{site.name}</figcaption>
          </figure>
        </div>
      </section>
      <section className="section pedagogy-page" id="projet-pedagogique">
        <div className="container">
          <Heading
            center
            eyebrow={site.pedagogySection.eyebrow}
            title={site.school.pedagogyTitle}
            text={site.school.pedagogyText}
          />
          <div className="value-grid">
            {pedagogy.map((p) => (
              <article key={p.title} className="reveal">
                <span className="round-icon">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Heading
            center
            title={pageContent.schoolValuesTitle}
            text={pageContent.schoolValuesIntro}
          />
          <div className="school-value-panels">
            <article>
              <Icon name="heart" />
              <h3>{pedagogy[1].title}</h3>
              <p>{pageContent.schoolValueTexts[0]}</p>
            </article>
            <article>
              <Icon name="people" />
              <h3>{pedagogy[2].title}</h3>
              <p>{pageContent.schoolValueTexts[1]}</p>
            </article>
          </div>
        </div>
      </section>
      <VisitBanner />
    </>
  );
}
export function CyclesPage() {
  return (
    <>
      <PageHero
        title={ui.ourCycles}
        text={site.cycleSection.intro}
        eyebrow={site.cycleSection.eyebrow}
      />
      <section className="section">
        <div className="container">
          <CycleCards photographic />
          <p className="photo-cycle-notice">{cycleCardsNotice}</p>
        </div>
      </section>
      <section className="section cycle-overview-detail">
        <div className="container">
          <Heading
            center
            title={pageContent.cycleLearningTitle}
            text={pageContent.cycleLearningIntro}
          />
          <div className="value-grid">
            {pedagogy.map((p) => (
              <article key={p.title}>
                <Icon name={p.icon} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <VisitBanner />
    </>
  );
}
export function CyclePage({ cycle }: { cycle: Cycle }) {
  return (
    <>
      <PageHero
        title={cycle.title}
        text={cycle.description}
        eyebrow={`${pageContent.cycleWelcome} ${cycle.title.toLowerCase()}`}
      />
      <div className="container cycle-switcher" aria-label={ui.cycleOverview}>
        {cycles.map((c) => (
          <a
            href={`/cycles/${c.slug}`}
            key={c.slug}
            aria-current={cycle.slug === c.slug ? "page" : undefined}
          >
            {c.title}
          </a>
        ))}
      </div>
      <section className="section">
        <div className="container cycle-detail-layout">
          <div className="cycle-detail-text">
            {cycle.details.map((d) => (
              <article className="reveal" key={d.title}>
                <h2>{d.title}</h2>
                <p>{d.text}</p>
                <p>{d.followup}</p>
              </article>
            ))}
            <div className="cycle-visit-callout">
              <Icon name="school" />
              <h3>{pageContent.cycleVisitTitle}</h3>
              <p>{pageContent.cycleVisitText}</p>
              <a
                className="text-link"
                href={`/contact?demande=visite&cycle=${cycle.slug}#formulaire`}
              >
                {ui.visit}
                <Icon name="arrow" />
              </a>
            </div>
          </div>
          <CycleSidePanel cycle={cycle} />
        </div>
      </section>
      <section className="section other-cycles">
        <div className="container">
          <Heading center title={ui.otherCycles} />
          <CycleCards omit={cycle.slug} />
        </div>
      </section>
    </>
  );
}
export function LifePage() {
  return (
    <>
      <PageHero
        title={site.life.pageTitle}
        text={site.life.pageIntro}
        eyebrow={site.life.eyebrow}
        photoId="sport"
      />
      <section className="section">
        <div className="container">
          <Heading center title={site.life.title} text={site.life.intro} />
          <div className="value-grid">
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
        </div>
      </section>
      <SpacesSection />
      <section className="section gallery-page" id="galerie">
        <div className="container">
          <Heading
            center
            title={site.life.galleryTitle}
            text={pageContent.galleryText}
          />
          <Gallery filters />
        </div>
      </section>
      <VisitBanner />
    </>
  );
}
export function CambridgePage() {
  return (
    <>
      <PageHero
        title={site.cambridge.pageTitle}
        text={site.cambridge.pageIntro}
        eyebrow={site.cambridge.eyebrow}
      />
      <section className="section">
        <div className="container cambridge-page-layout">
          <div>
            <CambridgeIdentity />
            <Heading title={site.cambridge.title} text={site.cambridge.body} />
            <a
              className="button button-primary"
              href="/contact?demande=cambridge#formulaire"
            >
              {site.cambridge.cta}
              <Icon name="arrow" />
            </a>
            <p className="program-note">{site.cambridge.note}</p>
          </div>
          <div className="language-panel">
            <span className="language-globe">
              <Icon name="globe" />
            </span>
            <h2>{site.cambridge.panelTitle}</h2>
            <p>{site.cambridge.panelText}</p>
          </div>
        </div>
      </section>
      <section className="section cambridge-path">
        <div className="container">
          <Heading
            center
            title={pageContent.cambridgeDetailTitle}
            text={pageContent.cambridgeDetailText}
          />
          <CambridgeAxes />
        </div>
      </section>
      <section className="section">
        <div className="container narrow-container">
          <Heading
            title={pageContent.cambridgePreparationTitle}
            text={pageContent.cambridgePreparationText}
          />
          <a className="text-link" href="/contact?demande=cambridge#formulaire">
            {site.cambridge.cta}
            <Icon name="arrow" />
          </a>
        </div>
      </section>
      <VisitBanner />
    </>
  );
}
export function ContactPage({
  search,
  admissions = false,
}: {
  search: string;
  admissions?: boolean;
}) {
  const params = new URLSearchParams(search),
    request = params.get("demande") ?? "",
    initialCycle = params.get("cycle") ?? "";
  return (
    <>
      <PageHero
        title={
          admissions ? site.admissions.title : site.contactSection.pageTitle
        }
        text={
          admissions ? site.admissions.intro : site.contactSection.pageIntro
        }
        eyebrow={site.contactSection.eyebrow}
      />
      <section className="section contact-page">
        <div className="container contact-layout">
          <div className="contact-page-copy">
            <Heading
              title={pageContent.contactDetailsTitle}
              text={pageContent.contactDetailsIntro}
            />
            <ContactCards />
            {site.contact.mapUrl && (
              <a
                className="text-link"
                href={site.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {ui.ourSpaces}
                <Icon name="arrow" />
              </a>
            )}
            <a
              className="instagram-card"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="instagram" />
              <span>
                {site.shortName}
                <small>{ui.instagram}</small>
              </span>
              <Icon name="arrow" />
            </a>
            <div className="contact-photo">
              <PhotoImage id="accueil" />
            </div>
          </div>
          <AdmissionForm
            key={search}
            request={request}
            initialCycle={initialCycle}
          />
        </div>
      </section>
      <section className="section admission-steps">
        <div className="container">
          <Heading center title={pageContent.admissionStepsTitle} />
          <div className="steps-grid">
            {site.admissions.steps.map((step, i) => (
              <article key={step}>
                <span className={`round-icon ${["pink", "gold", "sage"][i]}`}>
                  <Icon name={["phone", "school", "book"][i]} />
                </span>
                <h3>{step}</h3>
                <p>{site.admissions.stepDescriptions[i]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <Heading title={ui.faq} />
          <div>
            {faq.map((f) => (
              <details key={f.question}>
                <summary>
                  {f.question}
                  <span>
                    <Icon name="chevron" />
                  </span>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageHero title={ui.notFoundTitle} text={ui.notFoundText} />
      <div className="container not-found">
        <a className="button button-primary" href="/">
          {ui.backHome}
          <Icon name="arrow" />
        </a>
      </div>
    </>
  );
}
