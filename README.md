# Groupe Scolaire NAFAE — Refonte

Site vitrine lumineux en français : accueil riche et pages intérieures. React, TypeScript, Vite et CSS. Aucun backend, service d’envoi, traqueur ou stockage des formulaires.

## Aperçu local

```sh
npm install
npm run dev -- --port 5173
```

Ouvrir http://127.0.0.1:5173/.

- `npm run build` : vérification TypeScript puis compilation Vite dans `dist/`.
- `npm run preview` : consultation du build.
- Sur un futur hébergement statique, rediriger les routes inconnues vers `index.html` pour assurer l’ouverture directe des pages intérieures. Vite fournit ce comportement localement.

## Pages

- `/` : accueil, présentation, cycles, Cambridge, vie scolaire, galerie et invitation à visiter.
- `/notre-ecole` : établissement et projet pédagogique (`#projet-pedagogique`).
- `/nos-cycles` : les cycles configurés.
- `/cycles/maternelle`, `/cycles/primaire`, `/cycles/college`, `/cycles/lycee` : pages de cycle.
- `/vie-scolaire` : vie scolaire, espaces (`#espaces`) et galerie filtrable (`#galerie`).
- `/cambridge` : volet langues et certifications.
- `/contact` et `/preinscription` : coordonnées, formulaire, étapes et FAQ.
- `?demande=visite` ou `?demande=cambridge` : contexte du formulaire.
- `?cycle=primaire#formulaire` : présélection du cycle.

## Modifier le contenu

**`src/data.ts` est le fichier éditorial principal.**

- `site` : nom, logo, navigation, titres, descriptions, liens, coordonnées et textes des pages.
- `cycles` : noms, slugs, pictogrammes, accents, descriptions et rubriques des pages de cycle.
- `pedagogy`, `cambridgeAxes`, `schoolLife`, `faq` : blocs thématiques.
- `photos` : sources, dimensions réelles, alternatives, légendes et cadrages.
- `schoolPhoto` : photographie verticale unique de la section « Notre école ».
- `seoPages` : titre SEO et meta description propres à chaque page.
- `ui`, `formContent`, `pageContent` : boutons, libellés, messages et titres complémentaires.

Une nouvelle entrée dans `cycles` crée automatiquement une carte, une page, une entrée de sous-menu et une option de formulaire. `photoId` sur un cycle est facultatif : l’ajouter uniquement lorsqu’une photo pertinente pour ce cycle est fournie. Aucune photo du terrain n’illustre une salle de classe.

**`src/styles.css`** contient la palette dans `:root`, les espacements et les mises en page responsive. Les composants sont rangés dans **`src/components/`** ; **`src/pages.tsx`** compose les pages intérieures et **`src/main.tsx`** gère la navigation locale avec l’historique du navigateur.

## Photos réellement intégrées

Les photographies fournies ont été inspectées :

- `images-2.jpeg` → `public/images/nafae-hall.jpg` : hall, 738 × 415 px.
- `images-3.jpeg` : copie binaire identique de `images-2.jpeg`, exclue.
- `images-4.jpeg` → `public/images/nafae-sport.jpg` : terrain, rotation de 270° pour le redresser, 597 × 335 px.
- `images-5.jpeg` → `public/images/nafae-accueil.jpg` : accueil, 387 × 516 px.
- `images.jpeg` → `public/images/nafae-exterieur.jpg` : bâtiment et terrain en toiture, 335 × 597 px, affiché intégralement dans « Notre école ».

Les photographies de l’établissement sont les fichiers fournis. La section « Nos cycles » de l’accueil utilise séparément quatre photographies Pexels d’illustration, signalées comme telles. Les couleurs des photographies sont conservées ; les cadrages CSS ne déforment pas les images. Les résolutions modestes limitent les agrandissements utiles ; la lightbox respecte la résolution native. Des fichiers de meilleure définition pourront être substitués dans `photos`.

Aucun fichier de logo autonome validé n’était disponible. Le wordmark est provisoire : renseigner `site.logo.src` et ses dimensions pour le remplacer.

## Formulaire et informations à compléter

Nom, téléphone, cycle et message sont obligatoires. L’email est facultatif, mais validé s’il est rempli. Le téléphone accepte 8 à 15 chiffres et les séparateurs usuels. Les erreurs sont reliées aux champs ; le focus rejoint la première erreur.

Après validation, le site affiche : **« Formulaire de démonstration : aucune demande n’a été envoyée. »** Aucun envoi, stockage local ni service distant.

Les coordonnées inconnues restent vides dans `site.contact` et affichent « À compléter ». Le lien Instagram est celui de NAFAE. Aucun agrément, partenariat officiel, résultat, témoignage ou service non confirmé n’est revendiqué.

## Références de la refonte

- https://gsahlen.ma/ : ambiance accueillante, photographie, cycles, équipements et invitations à visiter.
- https://gstangerine.com/ : organisation établissement, pédagogie, certifications, inscriptions et contact.

Les contenus et coordonnées des références n’ont pas été repris pour NAFAE. Les anciennes conventions Backstage ont été retirées : sections numérotées, typographie condensée, surfaces noires et cycles présentés en fenêtres.

## Vérification

Build TypeScript/Vite et contrôles de rendu à 390, 768 et 1440 px sur l’accueil et les dix pages intérieures. Vérification des liens, du sous-menu, du menu mobile, des ancres, des filtres de galerie, de la lightbox avec retour du focus, de la FAQ et des validations du formulaire.

La préférence `prefers-reduced-motion` est respectée. Les apparitions n’empêchent jamais le contenu de rester visible. Poppins est chargée depuis Google Fonts avec une police système de repli.

## Contenus français et SEO

Les textes éditoriaux, les pages détaillées des cycles et la FAQ ont été rédigés en français. Les contenus non confirmés ne sont pas inventés. Les onze pages disposent de titres SEO et de meta descriptions distincts dans `seoPages`, actualisés à chaque navigation. Le document HTML initial contient les métadonnées demandées pour l’accueil.

156 contrôles aux largeurs 390, 768 et 1440 px confirment l’absence de texte de remplissage et de débordement, la hiérarchie H1, les métadonnées distinctes, l’image unique avec son texte alternatif et ses proportions, le hero sans boutons et l’indication de démonstration du formulaire.

## Cartes photographiques des cycles

Seule la section « Nos cycles » de l’accueil emploie `PhotographicCycleCards`. Les pages détaillées et leurs descriptions restent inchangées. Les photos et textes courts sont centralisés dans `cycleCardPhotos` de `src/data.ts`.

Les quatre fichiers sont locaux, dans `public/images/cycles/`. Leurs photographes, URL sources, licence Pexels vérifiée et empreintes sont conservés dans `LICENSES.md`, `sources.json` et `licence-pexels.txt` dans ce même dossier. Ces personnes ne représentent pas les élèves de NAFAE.

## Identité Cambridge English

Le logo officiel est conservé sans modification dans `public/images/brands/cambridge-english.svg`.
Sa source officielle et la confirmation d’autorisation figurent dans `public/images/brands/SOURCES.md`.
Le fichier et son texte alternatif se remplacent dans `site.cambridge.logo` (`src/data.ts`).
La présence du logo ne s’accompagne d’aucune revendication d’agrément ou de partenariat.

## Logo NAFAE et cartes des cycles

Le logo fourni est conservé dans `public/images/nafae-logo-transparent.png` et configuré dans `site.logo`. Le header, le menu mobile et le footer réutilisent le même composant. Le favicon utilise aussi ce fichier. Les cartes de `/nos-cycles` réutilisent `cycleCardPhotos`, comme les cartes de l’accueil. L’ancienne ancre `/#pedagogie` renvoie vers `/notre-ecole#projet-pedagogique`.

## Importer dans Vercel

- Framework : **Vite** (React + TypeScript).
- Root Directory : racine du dépôt (`.`).
- Install Command : `npm ci`.
- Build Command : `npm run build`.
- Output Directory : `dist`.
- Variables d’environnement : aucune.

`vercel.json` prévoit le repli des routes de l’application sur `index.html`, notamment après une actualisation de `/nos-cycles` ou d’une page `/cycles/...`. Les fichiers statiques existants restent servis normalement. Les formulaires restent en démonstration tant qu’aucun service d’envoi n’est connecté.

Le logo PNG comporte un canal alpha réel et des marges réduites. Il est affiché avec `object-fit: contain`, sans étirement ni fond ajouté.
