# Vérification finale — 19 octobre 2026

## Préparation à Vercel

- Installation propre `npm ci` : réussie ; audit npm sans vulnérabilité.
- `npm run build` : TypeScript et Vite réussis.
- `vercel.json` : framework Vite, installation npm ci, build npm run build, sortie dist, réécriture SPA vers index.html conformément à la documentation officielle Vercel.
- Aucune variable d’environnement requise. Aucun secret trouvé dans les sources à versionner.
- `.gitignore` : node_modules, dist, .vercel, fichiers .env, clés, caches temporaires et captures locales exclus.
- Les sources, le lockfile et les licences des photos sont inclus dans le dépôt.

## Routes et interface

- Onze pages contrôlées à 390, 768 et 1440 px : aucun débordement horizontal, titre tronqué ou texte de remplissage.
- Actualisation des dix routes intérieures testée dans le build servi par Vite Preview, notamment `/nos-cycles` et les quatre pages de cycles.
- Le routage Vercel est configuré ; le déploiement distant lui-même reste à effectuer après import GitHub.
- Logo transparent contrôlé : canal alpha de 0 à 255, plus de 1,2 million de pixels entièrement transparents ; fond et marges superflues retirés. PNG affiché avec object-fit contain dans le header, le menu mobile et le footer ; favicon identique.
- Lisibilité du logo vérifiée sur les fonds blanc et ivoire, sur ordinateur et mobile.
- Accueil : hero conservé sans boutons, section pédagogique retirée, transition directe cycles / Cambridge ; ancienne ancre #pedagogie redirigée vers le projet pédagogique de Notre école.
- `/nos-cycles` : quatre photos locales partagées avec l’accueil, object-fit cover, visages visibles, images chargées, cartes de même hauteur et liens alignés. Destinations conservées.
- Menu mobile et sous-menu des cycles : ouverture, navigation et fermeture après sélection validées.
- Cambridge : contexte présélectionné dans le formulaire.
- Formulaire : erreurs lisibles et focus sur le premier champ ; email facultatif ; confirmation explicite qu’aucune demande n’est envoyée.
- FAQ et galerie accessibles : ouverture, navigation, Échap et retour du focus vérifiés.

Le site reste un prototype frontend autonome ; aucun service d’envoi de formulaire n’est connecté.
