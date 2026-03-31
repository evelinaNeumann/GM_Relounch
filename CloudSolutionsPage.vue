<template>
  <div :class="['page', cloudVariant]">
    <header class="header cloud-header" :class="`cloud-header--${cloudVariant}`">
      <div class="header__inner cloud-header__inner">
        <div class="header__brand">
          <img :src="logo" alt="Grass Merkur Logo" class="header__logo-image" />
          <p class="cloud-header__tagline">{{ heroCopy.tagline }}</p>
        </div>

        <div class="cloud-header__actions">
          <a href="/" class="btn btn--secondary cloud-header__home">Zur Startseite</a>
          <div class="variant-toggle cloud-variant-toggle" role="group" aria-label="Darstellung wechseln">
            <button
              class="variant-toggle__btn"
              :class="{ 'variant-toggle__btn--active': isTech }"
              @click="setVariant('tech')"
            >
              Tech UI
            </button>
            <button
              class="variant-toggle__btn"
              :class="{ 'variant-toggle__btn--active': isModernExperience }"
              @click="setVariant('modern')"
            >
              Modern UI
            </button>
          </div>
          <a href="mailto:kontakt@grass-merkur.de" class="btn btn--primary">Kontakt</a>
        </div>
      </div>
    </header>

    <main class="page-layout page-layout--single cloud-page">
      <div class="section-shell section-shell--hero">
        <section class="hero cloud-hero" :class="`cloud-hero--${cloudVariant}`">
          <div class="cloud-hero__content">
            <p class="hero__eyebrow">{{ heroCopy.eyebrow }}</p>
            <h1 class="hero__title">{{ heroCopy.title }}</h1>
            <p class="hero__subtitle">{{ heroCopy.subtitle }}</p>

            <ul class="cloud-hero__benefits">
              <li v-for="point in heroCopy.points" :key="point">{{ point }}</li>
            </ul>

            <div class="hero__actions">
              <a :href="heroCopy.primaryCta.href" class="btn btn--primary">{{ heroCopy.primaryCta.label }}</a>
              <a :href="heroCopy.secondaryCta.href" class="btn btn--secondary">{{ heroCopy.secondaryCta.label }}</a>
            </div>
          </div>

          <div class="cloud-hero__visual" aria-label="Kennzahlen">
            <article
              v-if="cloudVariant === 'modern' && gmConfiguratorModule"
              class="cloud-card cloud-card--hero"
            >
              <div class="cloud-card__icon" aria-hidden="true">{{ gmConfiguratorModule.icon }}</div>
              <h3 class="cloud-card__title">{{ gmConfiguratorModule.title }}</h3>
              <p class="cloud-card__text">{{ gmConfiguratorModule.description }}</p>
              <ul class="cloud-card__points">
                <li v-for="detail in gmConfiguratorModule.details" :key="detail">{{ detail }}</li>
              </ul>
              <a :href="gmConfiguratorModule.ctaHref" class="cloud-card__cta">{{ gmConfiguratorModule.ctaLabel }}</a>
            </article>
            <template v-else>
              <article class="cloud-hero__stat" v-for="stat in heroStats" :key="stat.label">
                <div class="cloud-hero__stat-value">{{ stat.value }}</div>
                <div class="cloud-hero__stat-label">{{ stat.label }}</div>
                <p class="cloud-hero__stat-meta">{{ stat.meta }}</p>
              </article>
            </template>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section cloud-section">
          <div class="section__header">
            <h2 class="section__title">Cloud Bausteine</h2>
            <p class="section__subtitle">
              Kombinieren Sie GM-Cloud Konfigurator, Public- und Private-Cloud-Module flexibel mit Colocation im Sicherheits-Rechenzentrum
              in Hannover.
            </p>
          </div>

          <div class="cloud-services-grid">
            <article class="cloud-card" v-for="module in cloudModules" :key="module.id">
              <div class="cloud-card__icon" aria-hidden="true">{{ module.icon }}</div>
              <h3 class="cloud-card__title">{{ module.title }}</h3>
              <p class="cloud-card__text">{{ module.description }}</p>
              <ul class="cloud-card__points">
                <li v-for="detail in module.details" :key="detail">{{ detail }}</li>
              </ul>
              <a :href="module.ctaHref" class="cloud-card__cta">{{ module.ctaLabel }}</a>
            </article>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section section--alt cloud-section cloud-section--split">
          <div class="cloud-section__intro">
            <h2>Vertrauen & Erlebbarkeit</h2>
            <p>
              Vorteile, Qualitätsmanagement und Bildergalerie zeigen, wie GRASS-MERKUR Cloud Services betrieben werden –
              rechtssicher in Deutschland und unterstützt durch zertifizierte Prozesse.
            </p>
          </div>

          <div class="cloud-panels">
            <article class="cloud-panel" v-for="panel in cloudHighlights" :key="panel.id">
              <h3>{{ panel.title }}</h3>
              <p>{{ panel.description }}</p>
              <ul class="cloud-panel__list">
                <li v-for="fact in panel.facts" :key="fact">{{ fact }}</li>
              </ul>
              <a :href="panel.ctaHref" class="cloud-panel__cta">{{ panel.ctaLabel }}</a>
            </article>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <div class="logo logo--small">GRASS·MERKUR</div>
          <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
        </div>
        <div class="footer__links">
          <a href="/">Startseite</a>
          <a href="/zertifizierungen">Zertifizierungen</a>
          <a href="mailto:kontakt@grass-merkur.de">Kontakt</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useVariant, type Variant } from './composables/useVariant'
import './styles/pages/cloud-solutions.css'

type CloudVariant = Extract<Variant, 'tech' | 'modern'>

const { variant, isTech, isModern, isBusiness } = useVariant('tech')
const isModernExperience = computed(() => isModern.value || isBusiness.value)
const logo = new URL('./assets/LogoGrassMerkur-300.png', import.meta.url).href
const CONTACT_LINK = 'mailto:vertrieb@grass-merkur.de?subject=Cloud%20Services'

const cloudVariant = computed<CloudVariant>(() => (isModernExperience.value ? 'modern' : 'tech'))

const setVariant = (mode: CloudVariant) => {
  variant.value = mode
}

const heroContent = {
  tech: {
    tagline: 'Cloud Architektur & Betrieb für kritische Workloads',
    eyebrow: 'Cloud Services · Colocation · Compliance',
    title: 'Cloud Services aus dem Sicherheits-Rechenzentrum in Hannover',
    subtitle:
      'GM-Cloud Konfigurator, Public- und Private-Cloud-Module sowie Colocation greifen zu einer belastbaren Plattform zusammen.',
    points: [
      'Kosten und Ressourcen mit dem GM-Cloud Konfigurator kalkulieren',
      'Cloud Services mit Private Cloud oder Colocation kombinieren',
      'Rechtssichere Datenhaltung im Sicherheits-Rechenzentrum in Hannover',
    ],
    primaryCta: { label: 'Cloud-Workshop anfragen', href: CONTACT_LINK },
    secondaryCta: { label: 'Service-Factsheet erhalten', href: CONTACT_LINK },
  },
  modern: {
    tagline: 'Transparente Cloud Experiences für digitale Teams',
    eyebrow: 'Modern UI · Analytics-ready · Storytelling',
    title: 'Cloud Services',
    subtitle:
      'Marketing- und Presales-Teams zeigen Cloud-Angebote mit narrativem Fokus auf Vorteile, Qualitätsmanagement und visuelle Einblicke.',
    points: [
      'Selbst erklärbare Module mit "Weitere Informationen"-CTAs',
      'Public, Private & hybride Szenarien in einer Journey',
      'Visuals und Kennzahlen für Slides, Landingpages und Kampagnen',
    ],
    primaryCta: { label: 'Storytelling-Set sichern', href: CONTACT_LINK },
    secondaryCta: { label: 'Demo anfordern', href: CONTACT_LINK },
  },
}

const heroStatsMap = {
  tech: [
    { label: 'Verfügbare Regionen', value: '2', meta: 'Hannover · Bielefeld' },
    { label: 'Provisioning', value: '~ 15 Min', meta: 'Compute & Storage Templates' },
    { label: 'SLA', value: '99,99 %', meta: 'inkl. 24/7 Betrieb' },
  ],
  modern: [
    { label: 'Assets im Content Hub', value: '48', meta: 'Slides, Bilder & Texte' },
    { label: 'Use-Case Stories', value: '12', meta: 'Cloud & Hybrid Szenarien' },
    { label: 'Aktualisierung', value: 'monatlich', meta: 'Marketing Enablement' },
  ],
}

const cloudModules = [
  {
    id: 'gm-config',
    title: 'GM-Cloud Konfigurator',
    icon: '🧮',
    description:
      'Mit diesem komfortablen Konfigurator für unsere Storage- und Compute-Cloud verschaffen Sie sich schnell einen Überblick über die Kosten und planen Ihr virtuelles Rechenzentrum.',
    details: [
      'Schneller Kostenüberblick für Storage- und Compute-Profile',
      'Planen Sie Ihre heutige IT-Infrastruktur in der GRASS-MERKUR Cloud',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    icon: '☁️',
    description:
      'Kombinieren Sie Cloud Services mit den Vorteilen von Colocation oder einer dedizierten Private Cloud – alles betrieben bei GRASS-MERKUR.',
    details: [
      'Datenhaltung im Sicherheits-Rechenzentrum Hannover',
      'Compute, Storage und Netzwerk modular zusammenschalten',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
  {
    id: 'public-cloud',
    title: 'Public Cloud',
    icon: '🌐',
    description:
      'Wir sind Ihr Ansprechpartner für Auswahl und technische Anbindung an Hyper Scaler wie Amazon oder Microsoft – Sie entscheiden, welche Services wo laufen.',
    details: [
      'Direkte Anbindung an AWS, Azure & Co.',
      'Ein Ansprechpartner für Multi-Cloud-Topologien',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
  {
    id: 'private-cloud',
    title: 'Private Cloud',
    icon: '🔒',
    description:
      'Unsere Private Cloud Services wie Storage-as-a-Service, Backup-as-a-Service und S3 Storage basieren auf OpenStack, Swift und Ceph und werden passgenau zugeschnitten.',
    details: [
      'Individuelle Ressourcenmodelle inklusive Backup-Optionen',
      'API-Zugriff über OpenStack, Swift und Ceph',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
]

const gmConfiguratorModule = cloudModules.find((module) => module.id === 'gm-config')

const cloudHighlights = [
  {
    id: 'benefits',
    title: 'Vorteile',
    description:
      'Sie erhalten qualitativ hochwertige IT-Services, abgerechnet nach tatsächlich benötigter Rechenleistung – flexibel und mit rechtssicherer Datenhaltung in Deutschland.',
    facts: [
      'Flexible Ressourcen statt starre Investitionen',
      'Daten jederzeit geschützt durch moderne Sicherheitssysteme',
      'Transparente Abrechnung nach Bedarf',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
  {
    id: 'quality',
    title: 'Qualitätsmanagement',
    description:
      'Anerkannte Auditierungen und Zertifizierungen gewährleisten die gleichbleibende und nachvollziehbare Qualität unserer Services – Kundenzufriedenheit steht im Fokus.',
    facts: [
      'ISO-gestützte Prozesse mit regelmäßigen Audits',
      'Transparente Dokumentation für Ausschreibungen',
      'Service-Verbesserungen durch Feedback-Loops',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
  {
    id: 'gallery',
    title: 'Bildergalerie',
    description:
      'Machen Sie sich selbst ein Bild davon, wie unser Rechenzentrum Ihre Datenströme managed – wir bewegen täglich unsichtbare Datenfluten.',
    facts: [
      'Hochauflösende Einblicke aus dem Datacenter',
      'Visualisierungen für Präsentationen und Social Media',
      'Storytelling über Menschen, Technik und Prozesse',
    ],
    ctaLabel: 'Weitere Informationen',
    ctaHref: CONTACT_LINK,
  },
]

const heroCopy = computed(() => heroContent[cloudVariant.value])
const heroStats = computed(() => heroStatsMap[cloudVariant.value])
</script>
