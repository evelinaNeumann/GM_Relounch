# API-Dokumentation

## Überblick

Das Projekt stellt aktuell keine klassische HTTP-Backend-API bereit. Es ist primär eine frontend-seitige Vue-Anwendung mit statischen Inhalten und komponentenbasierten Datenquellen.

## Datenquellen im Projekt

### `data/content.ts`

Die zentrale inhaltliche Datenquelle im Frontend enthält:

- `solutions`
- `services`
- `industries`
- `jobs`

Diese Daten werden lokal importiert und direkt in Komponenten gerendert.

## Formularverhalten

### `src/components/BusinessContactForm.vue`

- Kein API-POST.
- Versand wird über `mailto:`-URL ausgelöst.
- Felder: `name`, `email`, `subject`, `message`.

Konsequenz:

- Kein serverseitiges Logging.
- Keine serverseitige Validierung.
- Abhängig vom lokal konfigurierten Mail-Client.

## 3D-Inhalte

`src/components/TechDatacenter3D.vue` lädt Modelle aus `public/models/*.glb`.

- Abruf erfolgt als statische Datei-Auslieferung durch den Webserver.
- Keine gesonderte API-Schicht.

## Falls später API benötigt wird

1. `src/services/` für API-Client einführen.
2. `BASE_URL` über `.env` konfigurieren.
3. Formular auf `fetch`/`axios` mit Backend-Endpoint umstellen.
4. Fehlerbehandlung und Loading-Status in Komponenten ergänzen.
