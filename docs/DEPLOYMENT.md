# Deployment

## Voraussetzungen

- Node.js (LTS empfohlen)
- npm

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Produktions-Build

```bash
npm run build
```

Build-Ausgabe:

- `dist/`

## Build lokal prüfen

```bash
npm run preview
```

## Static-Hosting

`dist/` kann auf Static-Hostern bereitgestellt werden, z. B.:

- Nginx / Apache
- Netlify
- Vercel
- GitHub Pages

## Routing-Hinweis

Routing läuft manuell in `main.js` via `window.location.pathname`.

Für Deployment wichtig:

- Direkte Aufrufe auf Pfade wie `/jobs`, `/colocation`, `/cloud-hosting` müssen korrekt funktionieren.
- Je nach Host ist ein Fallback auf `index.html` nötig.

## Nginx (konzeptionell)

- `dist/` als Root ausliefern.
- Fallback für nicht gefundene Pfade auf `index.html`.
- Assets unter `/assets` und Modelle unter `/models` direkt ausliefern.

## Go-Live-Checkliste

1. `npm run build` läuft fehlerfrei.
2. Hauptpfade manuell testen (`/`, `/jobs`, `/rechenzentrum`, `/cloud-hosting`, `/colocation`).
3. Bilder/PDFs/GLB-Dateien prüfen.
4. Entscheiden, ob `mailto:` im Kontaktformular ausreichend ist.
