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
