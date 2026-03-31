<template>
  <div class="page tech han-cix-page">
    <header class="header">
      <div class="header__inner">
        <div class="header__brand">
          <img :src="logo" alt="Grass Merkur Logo" class="header__logo-image" />
          <div class="header__tagline">HAN-CIX – powered by DE-CIX in Hannover</div>
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
              <a class="nav__link" :class="{ 'nav__link--ghost': link.isGhost }" :href="link.href">
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

                <a v-else class="mobile-nav__link" :href="link.href" @click="handleMobileNavLinkClick">
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
        <section class="hero cert-page__hero han-cix-hero">
          <div class="hero__content">
            <p class="hero__eyebrow">Cloud-Exchange Hannover</p>
            <h1 class="hero__title">Eröffnung des HAN-CIX – powered by DE-CIX</h1>
            <p class="hero__subtitle">
              Wirtschaftsminister Olaf Lies gab am 10.04.2024 den Startschuss für den neuen Cloud-Exchange bei
              GRASS–MERKUR. Der direkte Weg in die Cloud beginnt im Rechenzentrum Hannover – sicher, schnell und
              mit niedrigen Latenzen.
            </p>

            <div class="cert-page__hero-grid han-cix-hero__grid">
              <div class="cert-page__hero-card">
                <div class="cert-page__hero-label">Eröffnung</div>
                <div class="cert-page__hero-value">10.04.2024</div>
                <div class="cert-page__hero-meta">Startschuss in Hannover</div>
              </div>
              <div class="cert-page__hero-card">
                <div class="cert-page__hero-label">Gäste</div>
                <div class="cert-page__hero-value">120+</div>
                <div class="cert-page__hero-meta">Feierliche Eröffnung</div>
              </div>
              <div class="cert-page__hero-card">
                <div class="cert-page__hero-label">Ökosystem</div>
                <div class="cert-page__hero-value">DE-CIX</div>
                <div class="cert-page__hero-meta">Interconnection Germany</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section-shell section-shell--flush">
        <section class="section section--flush han-cix-section">
          <div class="section__header">
            <h2 class="section__title">Der direkte Weg in die Cloud</h2>
            <p class="section__subtitle">
              Sichere Verbindungen und niedrige Latenzen zu Cloud-Service-Anbietern sind der Schlüssel für moderne
              Digitalisierungsstrategien. Der HAN-CIX ist Teil des deutschen Interconnection-Ökosystems des DE-CIX.
            </p>
          </div>

          <div class="han-cix-grid">
            <div class="han-cix-card">
              <h3>Warum HAN-CIX?</h3>
              <p>
                Der HAN-CIX bietet den schnellen und sicheren Datenaustausch mit Cloud-Service-Anbietern. Unternehmen
                profitieren von niedrigen Latenzen, sicheren Verbindungen und direkter Anbindung an den DE-CIX in
                Frankfurt.
              </p>
              <ul>
                <li>Niedrige Latenzen zu Hyperscalern</li>
                <li>Direkte Verbindung zum DE-CIX Frankfurt</li>
                <li>Teil des deutschen Interconnection-Ökosystems</li>
              </ul>
            </div>
            <div class="han-cix-card">
              <h3>Partner &amp; Gastgeber</h3>
              <p>
                GRASS–MERKUR, UVN und niedersachsen.digital haben zur Eröffnung eingeladen. Vertreter:innen von DE-CIX
                und dem ECO-Verband unterstrichen die Bedeutung für regionale Wettbewerbsfähigkeit.
              </p>
              <ul>
                <li>DE-CIX: Interconnection-Ökosystem</li>
                <li>eco Verband: Digitale Infrastruktur</li>
                <li>GRASS–MERKUR: Hybrid-Strategien</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div class="section-shell section-shell--flush">
        <section class="section section--flush data-facts han-cix-facts">
          <div class="section__header">
            <h2 class="section__title">Programm &amp; Inhalte</h2>
            <p class="section__subtitle">
              Großes Interesse: über 120 Gäste nahmen an der feierlichen Eröffnung teil. Im Anschluss folgte ein
              exklusiver Blick hinter die Kulissen des Sicherheitsrechenzentrums.
            </p>
          </div>

          <ul class="data-facts__list">
            <li>DE-CIX: Bedeutung des HAN-CIX im Interconnection-Ökosystem</li>
            <li>eco Verband: Digitale Infrastruktur für nachhaltige Transformation</li>
            <li>GRASS–MERKUR: HAN-CIX als Baustein für hybride Geschäftsmodelle</li>
            <li>Swiss Life: Vorteile direkter Cloud-Anbindung für Anwender</li>
            <li>Über 120 Gäste aus Wirtschaft &amp; Institutionen</li>
            <li>Exklusiver Blick hinter die Kulissen des Sicherheitsrechenzentrums</li>
            <li>Netzwerk &amp; Austausch mit Partnern</li>
            <li>Lokale Wettbewerbschancen für Niedersachsen &amp; Norddeutschland</li>
            <li>Direkter Zugang zu AWS, Azure, Google und weiteren Providern</li>
          </ul>
        </section>
      </div>

      <div class="section-shell section-shell--flush">
        <section class="section section--alt section--flush cert-proof han-cix-downloads">
          <div class="cert-proof__panel">
            <p>
              Hier geht’s zur <span class="cert-proof__highlight">Bildergalerie</span> und zum
              <span class="cert-proof__highlight">Download der Vorträge</span>:
            </p>
            <ul>
              <li>
                Galerie
                <a href="#" target="_blank" rel="noopener">Hier geht’s zur Bildergalerie…</a>
              </li>
              <li>
                DE-CIX
                <a href="#" target="_blank" rel="noopener">Bedeutung des HAN-CIX (Dr. Thomas King)</a>
              </li>
              <li>
                eco Verband
                <a href="#" target="_blank" rel="noopener">Digitale Infrastrukturen (Alexander Rabe)</a>
              </li>
              <li>
                GRASS–MERKUR
                <a href="#" target="_blank" rel="noopener">HAN-CIX &amp; hybrides Geschäftsmodell</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>

    <footer class="footer footer--techgrid">
      <div class="footer__inner footer__inner--techgrid">
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
            <a :href="certificationsPageUrl">Zertifizierungen</a>
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
          <div class="footer__bottom-spacer" aria-hidden="true"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, type ComponentPublicInstance } from 'vue'
import './styles/pages/han-cix.css'

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
  isGhost?: boolean
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
      { label: 'Private Cloud', href: '/cloud/private-cloud', desc: 'Dedizierte Ressourcen im DE-Datacenter' },
      { label: 'Hybrid Cloud', href: '/cloud/hybrid-cloud', desc: 'Verknüpfung aus Hyperscaler & Colocation' },
      { label: 'Consulting', href: '/consulting', desc: 'Strategie, Compliance & Tech-Enablement' },
      { label: 'Zusatzleistungen', href: '/managed-services/zusatzleistungen', desc: 'Backup, Monitoring, Automation' },
      { label: 'Preismodelle', href: '/managed-services/preismodell', desc: 'Planbare Bundles & Opex-Modelle' },
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

const navLinks = computed<NavLinkEntry[]>(() => [{ label: 'Startseite', href: '/', isGhost: true }, ...structuredNavLinks])

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

const isComponentInstance = (
  value: Element | ComponentPublicInstance | null
): value is ComponentPublicInstance => {
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
  { label: 'Standort', value: 'Hannover', meta: 'DE-CIX Peering vor Ort' },
  { label: 'Verfügbarkeit', value: '99,99%', meta: 'N+1 Strom & Klima' },
  { label: 'Zutritt', value: 'Mehrstufig', meta: 'Video, Schleusen, 24/7' },
]

const certifications = [
  {
    id: 'sicherheit',
    title: 'Sicherheitstechnik',
    focus: 'Zutritt, Video & 24/7 Monitoring',
    description:
      'Mehrstufige Sicherheitszonen, durchgängige Videoüberwachung und permanente Alarmierung sichern kritische Bereiche.',
    bullets: ['Mehrfaktor-Zutritt & Schleusen', 'Videoanalyse & Dokumentation', 'Security-Team rund um die Uhr'],
    issuer: 'Betrieb 24/7',
    lastAudit: 'laufende Prüfzyklen',
    badge: 'Security',
    image: new URL('./assets/RZ-Impressionen0-558x335.jpg', import.meta.url).href,
  },
  {
    id: 'energie',
    title: 'Energie & Klima',
    focus: 'Redundante Versorgung & Effizienz',
    description:
      'USV, Notstromaggregate und ein redundantes Kühlkonzept sichern den Betrieb auch bei Ausfällen oder Lastspitzen.',
    bullets: ['N+1 USV & Notstrom', 'Getrennte Versorgungsstränge', 'Feinjustierte Klimatisierung'],
    issuer: 'Technisches Management',
    lastAudit: 'monatliche Testläufe',
    badge: 'Energie',
    image: new URL('./assets/ISO_50001_2015_GUTcert_ARNOR_Group.jpg', import.meta.url).href,
  },
  {
    id: 'konnektivitaet',
    title: 'Konnektivität',
    focus: 'Carrier-neutral & HAN-CIX',
    description:
      'Direkte Anbindung an HAN-CIX und multiple Carrier sorgen für geringe Latenzen und flexible Netzdesigns.',
    bullets: ['Peering im Haus', 'Redundante Glasfaserwege', 'SLA-fähige Uplinks'],
    issuer: 'HAN-CIX / DE-CIX',
    lastAudit: 'laufender Ausbau',
    badge: 'Network',
    image: new URL('./assets/han-cix.jpg', import.meta.url).href,
  },
  {
    id: 'betrieb',
    title: 'Betrieb & Services',
    focus: 'Remote Hands & 24/7 Support',
    description:
      'Ein eingespieltes Datacenter-Team übernimmt Monitoring, Incident Response und hands-on Services vor Ort.',
    bullets: ['24/7 Leitwarte', 'Remote Hands & Smart Hands', 'SLA-gesteuerte Prozesse'],
    issuer: 'Service Desk',
    lastAudit: 'quartalsweise Reviews',
    badge: 'Operations',
    image: new URL('./assets/GRASS-MERKUR-04-e1461186830653-573x431.jpg', import.meta.url).href,
  },
]
</script>













