# Komponentenübersicht

## Seitenkomponenten (Root)

- `App.vue`: Standard-Startseite mit umfangreicher Layout-/Bereichslogik.
- `CloudSolutionsPage.vue`: Inhalte zu Cloud-Lösungen.
- `CloudHostingPage.vue`: Cloud-Hosting-Angebot.
- `ManagedServicesPage.vue`: Managed Services.
- `ColocationPage.vue`: Colocation/Housing.
- `HanCixPage.vue`: HAN-CIX/Connectivity.
- `JobsPage.vue`: Karriere-/Stellenseite.
- `RechenzentrumPage.vue`: Rechenzentrumsinformationen.
- `SicherheitstechnikPage.vue`: Unterseite Sicherheitstechnik (aktuell sehr klein/Platzhalterstatus).
- `ZertifizierungenPage.vue`, `ZertifizierungenBusinessPage.vue`: Zertifizierungsseiten.

## UI-Zuordnung der Seiten

### Variantenfähig

- `App.vue`
  - Nutzt echte Variantenlogik über `useVariant.ts`.
  - Kann zwischen `tech`, `business` und `modern` wechseln.

### Hart auf Tech verdrahtet

- `RechenzentrumPage.vue`
  - Template: `page tech rechenzentrum-page`
  - CSS: `styles/pages/rechenzentrum.css`
  - CSS enthält zusätzlich auch `.page.modern`- und `.page.business`-Regeln.
- `HanCixPage.vue`
  - Template: `page tech han-cix-page`
  - CSS: `styles/pages/han-cix.css`
  - CSS enthält zusätzlich auch `.page.modern`- und `.page.business`-Regeln.
- `JobsPage.vue`
  - Template: `page tech jobs-page`
  - CSS: `styles/pages/jobs.css`
  - CSS enthält zusätzlich auch `.page.modern`- und `.page.business`-Regeln.
- `ZertifizierungenPage.vue`
  - Template: `page tech`
  - CSS: `styles/pages/zertifizierungen.css`
  - CSS enthält zusätzlich auch `.page.modern`- und `.page.business`-Regeln.

### Hart auf Business/Modern verdrahtet

- `CloudHostingPage.vue`
  - Template: `page modern business managed-services-page cloud-hosting-page`
- `ManagedServicesPage.vue`
  - Template: `page modern business managed-services-page`
- `ColocationPage.vue`
  - Template: `page modern business managed-services-page colocation-page`
- `ZertifizierungenBusinessPage.vue`
  - Template: `page modern business managed-services-page cert-business-page`

### Sonderfall / Fallback

- `SicherheitstechnikPage.vue`
  - Aktuell nur Fallback-Seite ohne `page tech`-Wrapper.
  - Importiert das Seitencss derzeit nicht.
  - `styles/pages/sicherheitstechnik.css` existiert trotzdem und enthält ebenfalls `.page.modern`- und `.page.business`-Regeln.

## Wiederverwendbare Komponenten (`src/components`)

- `BusinessContactForm.vue`
  - Kontaktformular mit Feldern für Name, E-Mail, Betreff, Nachricht.
  - Submit über `mailto:`-Generierung im Browser.
- `TechDatacenter3D.vue`
  - 3D-Darstellung mit TresJS/Three.js.
  - Nutzt Modelle aus `public/models/`.

## Composables

- `useVariant.ts`
  - Verwaltet Variantenstatus (`tech`, `business`, `modern`).
  - Liefert `variant` sowie abgeleitete Computed-Flags (`isTech`, `isBusiness`, `isModern`).

## Datenquellen

- `data/content.ts`
  - Typsichere Inhaltsdaten:
  - `solutions`
  - `services`
  - `industries`
  - `jobs`
