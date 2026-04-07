<template>
  <div class="page modern business managed-services-page cert-business-page">
    <header class="header">
      <div class="header__inner">
        <div class="header__brand">
          <img :src="logo" alt="Grass Merkur Logo" class="header__logo-image" />
        </div>

        <button
          type="button"
          class="header__hamburger"
          aria-label="Menü öffnen"
          aria-controls="mobile-nav"
          :aria-expanded="mobileNavOpen"
          @click="toggleMobileNav"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        <nav
          class="nav"
          aria-label="Hauptnavigation"
          @mouseenter="cancelMegaClose"
          @mouseleave="handleNavMouseLeave"
          @focusout="handleNavFocusOut"
        >
          <ul class="nav__list">
            <li
              v-for="(link, index) in navLinks"
              :key="link.href"
              class="nav__item"
              :class="{
                'nav__item--has-children': link.children?.length,
                'nav__item--mega-active': activeMegaIndex === index,
              }"
              :ref="(el) => setNavItemRef(el, index)"
              @mouseenter="handleNavItemEnter(index, !!link.children?.length)"
              @focusin="handleNavItemEnter(index, !!link.children?.length)"
            >
              <a class="nav__link" :class="{ 'nav__link--home': index === 0 }" :href="link.href">
                {{ link.label }}
              </a>
              <div
                v-if="link.children?.length"
                class="nav__mega"
                role="menu"
                :class="{ 'nav__mega--visible': activeMegaIndex === index }"
                @mouseenter="handleMegaEnter(index)"
                @mousemove="handleMegaMouseMove"
              >
                <ul class="nav__mega-list">
                  <li
                    v-for="child in link.children"
                    :key="`${link.href}-${child.href}`"
                    class="nav__mega-item"
                  >
                    <a class="nav__mega-link" :href="child.href">
                      <span class="nav__mega-link-label">{{ child.label }}</span>
                      <span v-if="child.desc" class="nav__mega-link-desc">{{ child.desc }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <a href="mailto:kontakt@grass-merkur.de" class="btn btn--primary header__contact-btn">
          Kontakt
        </a>
      </div>

      <Transition name="mobile-nav">
        <div v-if="mobileNavOpen" class="mobile-nav" aria-label="Mobile Navigation">
          <div class="mobile-nav__backdrop" @click="closeMobileNav" aria-hidden="true"></div>

          <div
            id="mobile-nav"
            class="mobile-nav__panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div class="mobile-nav__head">
              <div class="mobile-nav__title">Menü</div>
              <button
                type="button"
                class="mobile-nav__close"
                aria-label="Menü schließen"
                @click="closeMobileNav"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul class="mobile-nav__list">
              <li v-for="(link, index) in navLinks" :key="`mobile-${link.href}`" class="mobile-nav__item">
                <template v-if="link.children?.length">
                  <button
                    type="button"
                    class="mobile-nav__parent"
                    :aria-expanded="mobileNavExpandedIndex === index"
                    @click="toggleMobileNavGroup(index)"
                  >
                    <span class="mobile-nav__label">{{ link.label }}</span>
                    <svg
                      class="mobile-nav__chevron"
                      :class="{ 'mobile-nav__chevron--open': mobileNavExpandedIndex === index }"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div v-show="mobileNavExpandedIndex === index" class="mobile-nav__submenu">
                    <a class="mobile-nav__sub-link" :href="link.href" @click="handleMobileNavLinkClick">
                      Übersicht
                    </a>
                    <a
                      v-for="child in link.children"
                      :key="`mobile-${link.href}-${child.href}`"
                      class="mobile-nav__sub-link"
                      :href="child.href"
                      @click="handleMobileNavLinkClick"
                    >
                      <span class="mobile-nav__sub-label">{{ child.label }}</span>
                      <span v-if="child.desc" class="mobile-nav__sub-desc">{{ child.desc }}</span>
                    </a>
                  </div>
                </template>

                <a
                  v-else
                  class="mobile-nav__link"
                  :class="{ 'mobile-nav__link--home': index === 0 }"
                  :href="link.href"
                  @click="handleMobileNavLinkClick"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </header>

    <main class="page-layout page-layout--single">
      <div class="section-shell section-shell--hero">
        <section class="hero hero--fullbleed">
          <div class="hero__inner hero__inner--modern-simple">
            <div class="hero__content">
              <p class="hero__eyebrow">Unsere</p>
              <h1 class="hero__title">Zertifizierungen</h1>
              <p class="hero__subtitle">
                Auditierte Nachweise für Informationssicherheit, Energie und Verantwortung. Nutzen Sie die Dokumente für
                Ausschreibungen, Vendor-Assessments oder Compliance-Prüfungen.
              </p>
            </div>

            <div class="hero__visual cert-business-hero__visual" aria-label="Zertifikatslogos">
              <div class="cert-business-hero__logos" aria-hidden="true">
                <img src="./assets/icons.jpg" alt="Zertifizierungs-Icons" class="cert-business-hero__image" style="display:block;margin:auto;width:115%;height:auto;" loading="lazy" decoding="async" />
              </div>

              <div class="cert-business-hero__highlights" aria-label="Kennzahlen">
                <div class="cert-business-hero__highlight" v-for="item in heroHighlights" :key="item.label">
                  <div class="cert-business-hero__label">{{ item.label }}</div>
                  <div class="cert-business-hero__value">{{ item.value }}</div>
                  <div class="cert-business-hero__meta">{{ item.meta }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section managed-ms-section">
          <div class="managed-ms-frame">
            <article class="modern-service-card managed-ms-card cert-business__panel">
              <div class="cert-business__panel-head">
                <h2 class="managed-ms-card__title">Unsere aktuellen Zertifizierungen</h2>
                <p class="managed-ms-card__lead">
                  Jede Urkunde ist inkl. Gültigkeit, Prüfinstitut und relevanten Scopes dokumentiert. PDFs lassen sich direkt
                  herunterladen.
                </p>
              </div>

              <div class="cert-business__grid" aria-label="Zertifikate">
                <article
                  v-for="cert in certifications"
                  :key="cert.id"
                  class="modern-service-card cert-business__card"
                  :data-cert-id="cert.id"
                >
                  <div class="cert-business__card-head">
                    <img
                      :src="cert.image"
                      :alt="cert.title"
                      class="cert-business__image"
                      loading="lazy"
                      decoding="async"
                    />
                    <span class="cert-business__badge">{{ cert.badge }}</span>
                  </div>

                  <h3 class="cert-business__title">{{ cert.title }}</h3>
                  <p class="cert-business__focus">{{ cert.focus }}</p>
                  <p class="cert-business__text">{{ cert.description }}</p>

                  <ul class="cert-business__bullets">
                    <li v-for="point in cert.bullets" :key="point">{{ point }}</li>
                  </ul>

                  <div v-if="cert.downloads?.length" class="cert-business__downloads" aria-label="Downloads">
                    <a
                      v-for="file in cert.downloads"
                      :key="file.href"
                      class="managed-ms-link"
                      :href="file.href"
                      :download="file.downloadName"
                      target="_blank"
                      rel="noopener"
                    >
                      {{ file.label }}
                    </a>
                  </div>

                  <div class="cert-business__meta" aria-label="Meta">
                    <span>Prüfgesellschaft: {{ cert.issuer }}</span>
                    <span>Letztes Audit: {{ cert.lastAudit }}</span>
                  </div>
                </article>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section managed-ms-section">
          <div class="managed-ms-frame">
            <article class="modern-service-card managed-ms-card cert-business__panel">
              <h2 class="managed-ms-card__title">Weitere Dokumente</h2>
              <p class="managed-ms-card__lead">
                Ausführliche Details zum Thema Datenschutz und Datensicherheit finden Sie in folgenden Leitlinien:
              </p>

              <ul class="cert-business__docs">
                <li>
                  Leitlinie
                  <a
                    class="managed-ms-link"
                    href="https://www.grass-merkur.de/wp-content/uploads/2024/07/2020-09-leitlinie.Cloud_Services_Sicherheit.20200930.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    IT-Sicherheitsinformationen zu Cloud-Services
                  </a>
                </li>
                <li>
                  Leitlinie
                  <a
                    class="managed-ms-link"
                    href="https://www.grass-merkur.de/wp-content/uploads/2024/07/2020-09-Leitlinie.Cloud-Datenschutz.20200930.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    Datenschutz Cloud-Services
                  </a>
                </li>
                <li>
                  Leitlinie
                  <a
                    class="managed-ms-link"
                    href="https://www.grass-merkur.de/wp-content/uploads/2019/08/2018-10-Leitlinie.Cloud_.gesetzeskonforme-Nutzung.20181018.pdf"
                    target="_blank"
                    rel="noopener"
                  >
                    Gesetzeskonforme Nutzung Cloud-Services
                  </a>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer footer--tealgrid">
      <div class="footer__inner footer__inner--tealgrid">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="logo logo--small">GRASS·MERKUR</div>
            <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Services</h3>
            <a href="/#services">Colocation</a>
            <a href="/#services">Cloud Hosting</a>
            <a href="/#services">Consulting</a>
            <a :href="managedServicesHref">Managed Services</a>
            <a href="/#services">Security</a>
            <a href="/#services">Network</a>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Unternehmen</h3>
            <a href="/#solutions">Lösungen</a>
            <a href="/#news">News</a>
            <a :href="certificationsPageUrl" aria-current="page">Zertifizierungen</a>
            <a href="mailto:kontakt@grass-merkur.de">Kontakt</a>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Rechtliches</h3>
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
            <a href="#">Cookie-Richtlinie</a>
          </div>
        </div>

        <div class="footer__divider" aria-hidden="true"></div>

        <div class="footer__bottom">
          <div class="footer__bottom-spacer" aria-hidden="true"></div>
          <div class="footer__copyright">© {{ currentYear }} GRASS·MERKUR. Alle Rechte vorbehalten.</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type ComponentPublicInstance } from 'vue'
import './styles/pages/zertifizierungen-business.css'

const logo = new URL('./assets/LogoGrassMerkur-300.png', import.meta.url).href

const certificationsPageUrl = '/zertifizierungen'
const managedServicesPageUrl = '/managed-services'

const resolveAppPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const basePrefix = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePrefix}${normalizedPath}`
}

const managedServicesHref = resolveAppPath(managedServicesPageUrl)

const currentYear = new Date().getFullYear()

type NavChildLink = {
  label: string
  href: string
  desc?: string
}

type NavLinkEntry = {
  label: string
  href: string
  children?: NavChildLink[]
}

const structuredNavLinks: NavLinkEntry[] = [
  {
    label: 'Lösungen',
    href: '/loesungen',
    children: [
      { label: 'Cloud Lösungen', href: '/loesungen/cloud', desc: 'Virtuelle Plattformen & souveräne Clouds' },
      { label: 'Managed Services', href: '/managed-services', desc: 'Betrieb & SLAs aus einer Hand' },
      { label: 'IT-Security', href: '/loesungen/it-security', desc: 'Zero Trust, SOC & Compliance' },
      { label: 'Automatisierung', href: '/loesungen/automatisierung', desc: 'IaC, Workflow- und API-Strecken' },
      { label: 'Infrastruktur', href: '/loesungen/infrastruktur', desc: 'Hardware, Edge & Netzwerk' },
    ],
  },
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Colocation & Housing', href: '/colocation', desc: 'Stellfläche, Racks & Cages' },
      { label: 'Cloud & Hosting', href: '/cloud-hosting', desc: 'Public/Private Cloud & Konfigurator' },
      { label: 'Managed Services', href: '/managed-services', desc: 'Betrieb, Patching & Monitoring' },
      { label: 'Consulting', href: '/consulting', desc: 'Strategie, Prozesse & Enablement' },
      { label: 'Security', href: '/security', desc: 'Schutzschichten & Compliance' },
      { label: 'Network', href: '/network', desc: 'Connectivity, Peering & SD-WAN' },
    ],
  },
  {
    label: 'Rechenzentrum',
    href: '/rechenzentrum',
    children: [
      { label: 'Daten & Fakten', href: '/rechenzentrum/daten-fakten', desc: 'Kennzahlen & Standortprofil' },
      { label: 'Sicherheitstechnik', href: '/rechenzentrum/sicherheitstechnik', desc: 'Zutritt, Video & 24/7 Monitoring' },
      { label: 'Energie & Klima', href: '/rechenzentrum/klimatisierung', desc: 'N+1 Infrastruktur & HVO 100' },
      { label: 'Qualitätsmanagement', href: '/rechenzentrum/qualitaetsmanagement', desc: 'ISO, Audits & Prozesse' },
      { label: 'Bildergalerie', href: '/rechenzentrum/bildergalerie', desc: 'Impressionen aus Hannover' },
      { label: 'HAN-CIX', href: '/han-cix', desc: 'Powered by DE-CIX, lokale Peering-Hubs' },
    ],
  },
  {
    label: 'Unternehmen',
    href: '/unternehmen',
    children: [
      { label: 'Über uns', href: '/unternehmen/ueber-uns', desc: 'Mission, Werte & Historie' },
      { label: 'Zertifizierungen', href: '/zertifizierungen', desc: 'Nachweise & Gutachten' },
      { label: 'Nachhaltigkeit', href: '/unternehmen/nachhaltigkeit', desc: 'Green DC Programme & Reports' },
      { label: 'News', href: '/news', desc: 'Aktuelle Projekte & Termine' },
      { label: 'Jobs', href: '/jobs', desc: 'Karriere im Datacenter-Team' },
      { label: 'Imagefilm', href: '/imagefilm', desc: 'Einblicke in den Betrieb' },
    ],
  },
]

const navLinks = computed<NavLinkEntry[]>(() => [{ label: 'Startseite', href: '/' }, ...structuredNavLinks])

type TimerHandle = ReturnType<typeof setTimeout>

const mobileNavOpen = ref(false)
const mobileNavExpandedIndex = ref<number | null>(null)

const closeMobileNav = () => {
  mobileNavOpen.value = false
  mobileNavExpandedIndex.value = null
}

const activeMegaIndex = ref<number | null>(null)
const toggleMobileNav = () => {
  mobileNavOpen.value = !mobileNavOpen.value
  if (!mobileNavOpen.value) {
    mobileNavExpandedIndex.value = null
  }
  activeMegaIndex.value = null
}

const toggleMobileNavGroup = (index: number) => {
  mobileNavExpandedIndex.value = mobileNavExpandedIndex.value === index ? null : index
}

const handleMobileNavLinkClick = () => {
  closeMobileNav()
}

const navItemRefs = ref<Array<HTMLElement | null>>([])

const isComponentInstance = (value: Element | ComponentPublicInstance | null): value is ComponentPublicInstance => {
  return value !== null && typeof value === 'object' && '$el' in value
}

const setNavItemRef = (el: Element | ComponentPublicInstance | null, index: number) => {
  if (el instanceof HTMLElement) {
    navItemRefs.value[index] = el
    return
  }

  if (isComponentInstance(el)) {
    navItemRefs.value[index] = el.$el instanceof HTMLElement ? el.$el : null
    return
  }

  navItemRefs.value[index] = null
}

let megaCloseTimer: TimerHandle | null = null

const clearMegaCloseTimer = () => {
  if (megaCloseTimer) {
    clearTimeout(megaCloseTimer)
    megaCloseTimer = null
  }
}

const scheduleMegaClose = () => {
  if (typeof window === 'undefined') {
    activeMegaIndex.value = null
    return
  }

  clearMegaCloseTimer()
  megaCloseTimer = setTimeout(() => {
    activeMegaIndex.value = null
    megaCloseTimer = null
  }, 120)
}

const cancelMegaClose = () => {
  clearMegaCloseTimer()
}

const handleNavMouseLeave = () => {
  scheduleMegaClose()
}

const handleNavFocusOut = (event: FocusEvent) => {
  const navEl = event.currentTarget as HTMLElement | null
  const related = event.relatedTarget as Node | null
  if (!navEl || (related && navEl.contains(related))) {
    return
  }
  scheduleMegaClose()
}

const handleNavItemEnter = (index: number, hasChildren: boolean) => {
  cancelMegaClose()
  if (!hasChildren) {
    activeMegaIndex.value = null
    return
  }
  activeMegaIndex.value = index
}

const handleMegaEnter = (index: number) => {
  cancelMegaClose()
  if (navLinks.value[index]?.children?.length) {
    activeMegaIndex.value = index
  }
}

const handleMegaMouseMove = (event: MouseEvent) => {
  const pointerX = event.clientX
  let matchedIndex: number | null = null

  for (let i = 0; i < navItemRefs.value.length; i += 1) {
    const itemEl = navItemRefs.value[i]
    if (!itemEl) continue
    const rect = itemEl.getBoundingClientRect()
    if (pointerX >= rect.left && pointerX <= rect.right) {
      matchedIndex = i
      break
    }
  }

  if (matchedIndex === null) {
    return
  }

  if (navLinks.value[matchedIndex]?.children?.length) {
    activeMegaIndex.value = matchedIndex
  } else {
    activeMegaIndex.value = null
  }
}

const handleMobileNavEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMobileNav()
  }
}

watch(mobileNavOpen, (open) => {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('is-mobile-nav-open', open)
  document.body.classList.toggle('is-mobile-nav-open', open)

  if (typeof window === 'undefined') return
  if (open) {
    window.addEventListener('keydown', handleMobileNavEscape)
  } else {
    window.removeEventListener('keydown', handleMobileNavEscape)
  }
})

const heroHighlights = [
  { label: 'Zyklus ISO-Audit', value: 'jährlich', meta: 'TÜV & GUTcert' },
  { label: 'Letztes Surveillance', value: 'Q4 2024', meta: 'ohne Abweichung' },
  { label: 'Scope', value: 'Datacenter & Cloud', meta: 'inkl. Managed Services' },
]

const certifications = [
  {
    id: 'iso27001',
    title: 'ISO/IEC 27001',
    focus: 'Informationssicherheits-Managementsystem',
    description:
      'Zertifiziertes ISMS mit risikobasiertem Ansatz, dokumentierten Prozessen und kontinuierlicher Verbesserung.',
    bullets: ['BSI Grundschutz-inspiriert', '24/7 Monitoring & Incident Response', 'Regelmäßige Penetrationstests'],
    issuer: 'BSI-zertifizierte Prüfstelle',
    lastAudit: 'Oktober 2024',
    badge: 'Security',
    image: new URL('./assets/ISO_IEC-27001-bsi-Logo.png', import.meta.url).href,
    downloads: [
      {
        label: 'ISO 27001 Zertifikat (PDF)',
        href: new URL('./assets/2024-08-27-Zertfikat-ISO27001-IS-587831.d.pdf', import.meta.url).href,
        downloadName: 'ISO27001.pdf',
      },
      {
        label: 'ISO 27017 Cloud (PDF)',
        href: new URL('./assets/2024-08-27-Zertifikat-ISO27017-CLOUD-689261-001.d.pdf', import.meta.url).href,
        downloadName: 'ISO27017.pdf',
      },
      {
        label: 'ISO 27018 PII (PDF)',
        href: new URL('./assets/2024-08-27-Zertifikat-ISO27018-PII-689264-001.d.pdf', import.meta.url).href,
        downloadName: 'ISO27018.pdf',
      },
    ],
  },
  {
    id: 'tisax',
    title: 'TISAX',
    focus: 'Informationssicherheit in der Automotive-Lieferkette',
    description:
      'Assessment-Standard für Informationssicherheit, Datenschutz und Prototypenschutz in der Automobilbranche.',
    bullets: ['Supplier-Assessment nach VDA ISA', 'Rollenbasierte Nachweise', 'Geeignet für OEM- und Tier-1-Anforderungen'],
    issuer: 'ENX Association',
    lastAudit: '2024',
    badge: 'Security',
    image: new URL('./assets/tisaxlogo-2024.png', import.meta.url).href,
  },
  {
    id: 'iso50001-2015',
    title: 'ISO 50001:2015',
    focus: 'Energiemanagement',
    description: 'Energiemanagementsystem nach ISO 50001 – dokumentierte Maßnahmen und kontinuierliche Verbesserung.',
    bullets: ['Messbare Effizienzmaßnahmen', 'Verbrauchs-Monitoring & Reporting', 'Kontinuierlicher Verbesserungsprozess'],
    issuer: 'GUTcert',
    lastAudit: '2024',
    badge: 'Energie',
    image: new URL('./assets/ISO_50001_2015_GUTcert_ARNOR_Group.jpg', import.meta.url).href,
    downloads: [
      {
        label: 'ISO 50001 Zertifikat (PDF)',
        href: new URL('./assets/2025-06-04-50001.pdf', import.meta.url).href,
        downloadName: 'ISO50001.pdf',
      },
    ],
  },
  {
    id: 'iso50001-2018',
    title: 'ISO 50001:2018',
    focus: 'Energiemanagement',
    description: 'Energiemanagementsystem nach ISO 50001 – Fokus auf Wirksamkeit, Transparenz und belastbare Kennzahlen.',
    bullets: ['Kennzahlen & Energieperformance', 'Auditfähige Dokumentation', 'Ableitung von Optimierungsmaßnahmen'],
    issuer: 'GUTcert',
    lastAudit: '2024',
    badge: 'Energie',
    image: new URL('./assets/ISO_50001_2018_GUTcert_ARNOR_Group.jpg', import.meta.url).href,
    downloads: [
      {
        label: 'ISO 50001 Zertifikat (PDF)',
        href: new URL('./assets/2025-06-04-50001.pdf', import.meta.url).href,
        downloadName: 'ISO50001.pdf',
      },
    ],
  },
  {
    id: 'crefo',
    title: 'CrefoZert Bonitätssiegel',
    focus: 'Finanzielle Stabilität',
    description: 'Unabhängige Prüfung der wirtschaftlichen Leistungsfähigkeit und Zahlungstreue.',
    bullets: ['Top 2% Rating in DACH', 'Laufende Monitoringpflicht', 'Verlässlicher Partner für Langfristverträge'],
    issuer: 'Creditreform',
    lastAudit: 'September 2024',
    badge: 'Finance',
    image: new URL('./assets/Bonitaetszertifikat-bis-10.26-797x1024.jpg', import.meta.url).href,
  },
  {
    id: 'ecozert',
    title: 'EcoZert',
    focus: 'Nachhaltige Unternehmensführung',
    description: 'Bewertung der Governance, Lieferkette und gesellschaftlichen Verantwortung.',
    bullets: ['ESG-Roadmap veröffentlicht', 'Klimaneutrale Rechenzentrumskapazitäten', 'Soziale Projekte in der Region'],
    issuer: 'Sustainable Europe AG',
    lastAudit: 'Mai 2024',
    badge: 'ESG',
    image: new URL('./assets/EcoZert-GJ-2025-777x1024.jpg', import.meta.url).href,
  },
]

const heroLogoOrder = ['iso50001-2015', 'iso50001-2018', 'crefo', 'ecozert', 'iso27001', 'tisax'] as const

const heroLogos = computed(() => {
  const byId = new Map(certifications.map((cert) => [cert.id, cert]))
  return heroLogoOrder.map((id) => byId.get(id)).filter(Boolean)
})
</script>
