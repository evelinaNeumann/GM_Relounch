# Kontext

## Zweck des Projekts

Das Projekt ist eine mehrseitige Unternehmenswebsite mit Fokus auf Rechenzentrum, Colocation, Cloud, Managed Services und Zertifizierungen.

## Technischer Stack

- Framework: Vue 3
- Build-Tool: Vite
- 3D: `@tresjs/core`, `@tresjs/cientos`, `three`
- Sprache: JavaScript + punktuell TypeScript-Typen

## Architekturmerkmale

- Kein klassischer `vue-router` im Einsatz; stattdessen manuelles Route-Mapping in `main.js`.
- Seitenkomponenten liegen größtenteils auf Root-Ebene statt in `src/pages`.
- Starker CSS-Fokus mit separaten Seiten- und Varianten-Stylesheets.

## Design- und Variantenkontext

- Drei Darstellungsvarianten sind angelegt: `tech`, `business`, `modern`.
- Die Variantenlogik existiert in `composables/useVariant.ts`.
- Styles liegen in:
  - `styles/pages/*.css`
  - `styles/variants/*.css`

## Inhaltskontext

`data/content.ts` bündelt strukturierte Inhalte für zentrale Bereiche:

- Lösungen (Security, Outsourcing, Cloud)
- Services (z. B. Colocation, Cloud, Managed, Security, Network)
- Branchen
- Jobs

## Betrieb / Entwicklung

- Lokale Entwicklung: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Bekannte Besonderheiten

- Es gibt zusätzliche Projektteile (WordPress-Theme, Design-Template, Backups), die parallel im Repository liegen.
- Dadurch ist der Ordner sowohl Laufzeitprojekt als auch Arbeits-/Designablage.
