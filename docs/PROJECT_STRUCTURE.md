# Projektstruktur

## Kernverzeichnisse

- `src/`: Kleine, zentrale Komponenten (`BusinessContactForm.vue`, `TechDatacenter3D.vue`) und Typdefinition (`env.d.ts`).
- `styles/`: Haupt-Stylesheets, aufgeteilt in `pages/` (seitenbezogen) und `variants/` (Design-Varianten).
- `assets/`: Bilder, Zertifikats-PDFs und statische Medien.
- `public/models/`: 3D-Modelle (`.glb`) für die Datacenter-Visualisierung.
- `data/`: Inhaltliche Datenstrukturen (`content.ts`) für Solutions/Services/Industries/Jobs.
- `composables/`: Vue-Composable `useVariant.ts` für die Variantenlogik.
- `wp-theme/grass-merkur/`: WordPress-Theme-Integration mit eigener CSS/PHP-Struktur.

## Wichtige Root-Dateien

- `main.js`: Einstiegspunkt, manuelle Routenauflösung und dynamische Page-Imports.
- `App.vue`: Hauptseite / Default-Route.
- `*Page.vue`: Weitere Seiten auf Root-Ebene, z. B. `CloudHostingPage.vue`, `JobsPage.vue`, `RechenzentrumPage.vue`.
- `vite.config.ts`: Vite-Konfiguration.
- `package.json`: Scripts und Abhängigkeiten.

## Seitenrouting (aktuell)

Das Routing ist nicht mit `vue-router` umgesetzt, sondern manuell in `main.js`:

- `/` -> `App.vue`
- `/zertifizierungen` -> `ZertifizierungenBusinessPage.vue`
- `/loesungen/cloud` -> `CloudSolutionsPage.vue`
- `/cloud-hosting` -> `CloudHostingPage.vue`
- `/managed-services` -> `ManagedServicesPage.vue`
- `/han-cix` -> `HanCixPage.vue`
- `/jobs` -> `JobsPage.vue`
- `/rechenzentrum` -> `RechenzentrumPage.vue`
- `/rechenzentrum/sicherheitstechnik` -> `SicherheitstechnikPage.vue`
- `/colocation` -> `ColocationPage.vue`

## Nicht-kernige Verzeichnisse

- `dist/`: Build-Ausgabe.
- `node_modules/`: Installierte Abhängigkeiten.
- `Webpage Design Template/`: Separates Design-/Template-Projekt.
- `backup styles/`: CSS-Backups.
- `figma_vorlagen/`, `modern_UI/`, `nav_struktur/`: Design-/Konzeptmaterial.
