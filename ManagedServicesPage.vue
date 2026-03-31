<template>
  <div class="page modern business managed-services-page">
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
              <p class="hero__eyebrow">Managed Services</p>
              <h1 class="hero__title">Managed Services</h1>
              <p class="hero__subtitle">
                Wir sind mehr als nur Infrastrukturanbieter. Als Full-Service IT-Dienstleister bieten wir Ihnen einen
                umfangreichen Service-Katalog mit Leistungen, die Sie individuell miteinander kombinieren können.
              </p>
            </div>

            <div class="hero__visual hero__visual--managed-gallery" aria-label="Bildergalerie">
              <div class="managed-gallery" aria-hidden="true">
                <Transition name="managed-gallery-fade" mode="out-in">
                  <img
                    v-if="activeGalleryImage"
                    :key="activeGalleryIndex"
                    :src="activeGalleryImage"
                    class="managed-gallery__image"
                    :alt="`Rechenzentrum Impression ${activeGalleryIndex + 1}`"
                    loading="lazy"
                    decoding="async"
                  />
                </Transition>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section managed-ms-section">
          <div class="managed-ms-frame managed-ms-frame--why">
            <article class="modern-service-card managed-ms-card managed-ms-card--why">
              <h2 class="managed-ms-card__kicker">Warum GRASS-MERKUR?</h2>

            <div class="managed-ms-why">
              <div class="managed-ms-why__features" aria-label="Vorteile">
                <div class="managed-ms-feature">
                  <div class="managed-ms-feature__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13 2L3 14h7l-1 8 12-14h-7l-1-6Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 class="managed-ms-feature__title">Stromredundanz</h3>
                  <p class="managed-ms-feature__text">100 % Stromredundanz (2N-Konzept) – für maximale Verfügbarkeit.</p>
                </div>

                <div class="managed-ms-feature">
                  <div class="managed-ms-feature__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 2 20 6v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4Z"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 12.2 11.3 14l3.7-4"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 class="managed-ms-feature__title">Sicherheit</h3>
                  <p class="managed-ms-feature__text">Zutrittskontrolle, Monitoring und Prozesse nach ISO 27001.</p>
                </div>

                <div class="managed-ms-feature">
                  <div class="managed-ms-feature__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 7v6l4 2"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 12a9 9 0 1 1-9-9"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <h3 class="managed-ms-feature__title">24/7</h3>
                  <p class="managed-ms-feature__text">24/7-Überwachung &amp; Bereitschaft – auch im Ernstfall.</p>
                </div>

                <div class="managed-ms-feature">
                  <div class="managed-ms-feature__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 4a3 3 0 1 1 6 0v1.2a6.5 6.5 0 0 1 1.9.9l.9-.9 2.1 2.1-.9.9c.4.6.7 1.2.9 1.9H21v3h-1.1a6.5 6.5 0 0 1-.9 1.9l.9.9-2.1 2.1-.9-.9c-.6.4-1.2.7-1.9.9V21H9v-1.1a6.5 6.5 0 0 1-1.9-.9l-.9.9-2.1-2.1.9-.9A6.5 6.5 0 0 1 4.1 15H3v-3h1.1c.2-.7.5-1.3.9-1.9l-.9-.9L6.2 6l.9.9c.6-.4 1.2-.7 1.9-.9V4Z"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 10.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z"
                        stroke="currentColor"
                        stroke-width="1.2"
                      />
                    </svg>
                  </div>
                  <h3 class="managed-ms-feature__title">Expertenwissen</h3>
                  <p class="managed-ms-feature__text">Feste Ansprechpartner statt Hotline – Betrieb &amp; Beratung aus einer Hand.</p>
                </div>
              </div>
            </div>
            </article>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section managed-ms-section">
          <div class="managed-ms-frame managed-ms-frame--split">
            <article class="modern-service-card managed-ms-card managed-ms-card--split">
              <div class="managed-ms-split">
                <div class="managed-ms-split__icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 32h-6a8 8 0 0 1 0-16 10 10 0 0 1 19.2-2.6A7.5 7.5 0 1 1 34.5 32H30"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 36h16"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20 40h8"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>

                <div class="managed-ms-split__content">
                  <h2 class="managed-ms-card__title">Infrastruktur, die Ausfälle verhindert</h2>
                  <p class="modern-service-card__text">
                    Redundante Stromversorgung, energieeffiziente Green-IT-Klimatisierung und 24/7-Überwachung sorgen für maximale
                    Verfügbarkeit – auch im Ernstfall.
                  </p>

                  <div class="managed-ms-split__actions">
                    <a class="btn managed-ms-btn managed-ms-btn--blue" href="/#services">Technisches Konzept ansehen</a>
                  </div>

                  <div class="managed-ms-split__divider" aria-hidden="true"></div>

                  <h3 class="managed-ms-card__subtitle">Hybrid IT als Standard</h3>
                  <p class="modern-service-card__text">
                    Ob Colocation, Private-, Public- oder Hybrid-Cloud: Unsere Lösungen integrieren sich nahtlos in bestehende
                    IT-Landschaften und wachsen mit Ihrem Bedarf.
                  </p>
                  <div class="managed-ms-split__actions">
                    <a class="btn managed-ms-btn managed-ms-btn--ghost" href="/#services">Passende Services finden</a>
                  </div>

                  <div class="managed-ms-split__divider" aria-hidden="true"></div>

                  <h3 class="managed-ms-card__subtitle">Geprüft. Ausgezeichnet. Zukunftssicher.</h3>
                  <p class="modern-service-card__text">
                    Regelmäßige Zertifizierungen und Auszeichnungen als „Rising Star“ bestätigen die Qualität unserer Cloud- und
                    Colocation-Services.
                  </p>
                  <div class="managed-ms-split__actions">
                    <a class="btn managed-ms-btn managed-ms-btn--ghost" href="/zertifizierungen">Zertifizierungen &amp; Referenzen</a>
                  </div>
                </div>

                <div class="managed-ms-split__badge" aria-label="Cloud-Icon">
                  <svg class="managed-ms-split__badge-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path
                      d="M22 46H18a10 10 0 0 1 0-20c.8 0 1.5.1 2.3.3A14 14 0 0 1 46.8 22a9 9 0 0 1 1.2-.1 10 10 0 0 1 0 20H42"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M32 48V30" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                    <path d="M26 36l6-6 6 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14 52h36" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.75" />
                    <path d="M18 56h6" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.75" />
                    <path d="M40 56h6" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.75" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div class="section-shell">
        <section class="section managed-ms-section">
          <div class="managed-ms-frame managed-ms-frame--contact">
            <article class="modern-service-card managed-ms-card managed-ms-card--contact">
              <h2 class="managed-ms-card__kicker">Direkter Draht statt Umwege</h2>
              <p class="managed-ms-card__lead">
                Von der Planung bis zum Betrieb: feste Ansprechpartner, kurze Wege und klare Verantwortung.
              </p>

              <div class="managed-ms-contact">
                <div class="managed-ms-contact__avatar" aria-hidden="true">{{ contactInitials }}</div>
                <div class="managed-ms-contact__body">
                  <h3 class="managed-ms-contact__name">Markus Dietz</h3>
                  <p class="managed-ms-contact__role">Business Development</p>

                  <p class="managed-ms-contact__line">+49 (0)511 475414 – 13</p>
                  <p class="managed-ms-contact__line">markus.dietz@grass-merkur.de</p>
                </div>

                <div class="managed-ms-contact__actions">
                  <a class="btn managed-ms-btn managed-ms-btn--blue" href="mailto:markus.dietz@grass-merkur.de?subject=Managed%20Services">
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
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
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch, type ComponentPublicInstance } from 'vue'
import './styles/pages/managed-services.css'

const logo = new URL('./assets/LogoGrassMerkur-300.png', import.meta.url).href
// const isoLogo = new URL('./assets/ISO_IEC-27001-bsi-Logo.png', import.meta.url).href

const contactInitials = 'MD'

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
      { label: 'Private Cloud', href: '/cloud/private-cloud', desc: 'Dedizierte Ressourcen im DE-Datacenter' },
      { label: 'Hybrid Cloud', href: '/cloud/hybrid-cloud', desc: 'Verknüpfung aus Hyperscaler & Colocation' },
      { label: 'Consulting', href: '/consulting', desc: 'Strategie, Compliance & Tech-Enablement' },
      { label: 'Zusatzleistungen', href: '/managed-services/zusatzleistungen', desc: 'Backup, Monitoring, Automation' },
      { label: 'Preismodelle', href: '/managed-services/preismodell', desc: 'Planbare Bundles & Opex-Modelle' },
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

const galleryModules = import.meta.glob('./assets/bild_gallery/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const galleryImages = Object.keys(galleryModules)
  .sort()
  .map((path) => galleryModules[path])

const activeGalleryIndex = ref(0)
const activeGalleryImage = computed(() => galleryImages[activeGalleryIndex.value] ?? '')

let galleryTimer: number | undefined

onMounted(() => {
  if (galleryImages.length <= 1) return

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (prefersReducedMotion) return

  galleryTimer = window.setInterval(() => {
    activeGalleryIndex.value = (activeGalleryIndex.value + 1) % galleryImages.length
  }, 25000)
})

onUnmounted(() => {
  if (galleryTimer) window.clearInterval(galleryTimer)
})
</script>
