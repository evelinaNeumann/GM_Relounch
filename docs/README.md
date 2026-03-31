# Projektdokumentation

Diese Dokumentation beschreibt die aktuelle Struktur und den Kontext des Projekts.

## Dateien

- `PROJECT_STRUCTURE.md`: Verzeichnisstruktur und technische Einordnung.
- `COMPONENTS.md`: Übersicht der Vue-Komponenten und Seiten.
- `CONTEXT.md`: Fachlicher und technischer Kontext des Projekts.

## Schnellstart

```bash
npm install
npm run dev
```

## Hinweise

- Routing erfolgt aktuell manuell in `main.js` über `window.location.pathname` und Hash-Auswertung.
- Das Projekt enthält zusätzlich Artefakte und Templates (`dist`, `Webpage Design Template`, `backup styles`), die nicht Teil der produktiven Kernlogik sind.
