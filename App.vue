<template>
  <div
    :class="[
      'page',
      displayVariant,
      { business: isBusiness, 'has-cert-rail-row': !isModernExperience && shouldCollapseCertRails },
    ]"
  >
    <!-- HEADER / NAVIGATION -->
    <header ref="headerRef" class="header">
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
              <a class="nav__link" :href="link.href">
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

    <main class="page-layout">
      <div class="section-shell section-shell--hero">
        <!-- HERO -->
        <section class="hero hero--fullbleed" ref="heroRef">
          <div class="hero__inner" :class="{ 'hero__inner--modern-simple': isModernExperience }">
            <div class="hero__content">
              <p class="hero__eyebrow">
                {{ activeCopy.heroEyebrow }}
              </p>
              <h1 class="hero__title">
                {{ activeCopy.heroTitle }}
              </h1>
              <p class="hero__subtitle">
                {{ activeCopy.heroSubtitle }}
              </p>

              <div class="hero__actions">
                <a href="mailto:kontakt@grass-merkur.de" class="btn btn--primary">
                  Architekturgespräch anfragen
                </a>
                <a href="#services" class="btn btn--secondary">
                  {{ activeCopy.heroSecondaryCta }}
                </a>
              </div>

              <div class="hero__badges">
                <span class="badge">ISO 27001</span>
                <span class="badge">Standort: Deutschland</span>
                <span class="badge">24/7 Betrieb</span>
              </div>
            </div>

            <div v-if="!isModernExperience" class="hero__visual">
              <div class="hero__visual-card">
                <div class="hero__visual-label">
                  {{ activeCopy.heroVisualLabel }}
                </div>
                <div class="hero__visual-value">
                  {{ activeCopy.heroVisualValue }}
                </div>
                <div class="hero__visual-meta">
                  {{ activeCopy.heroVisualMeta }}
                </div>
              </div>
              <div class="hero__visual-grid">
                <div class="hero__visual-pill">Colocation</div>
                <div class="hero__visual-pill">Cloud</div>
                <div class="hero__visual-pill">Backup</div>
                <div class="hero__visual-pill">Security</div>
              </div>
            </div>
            <div v-else class="hero__visual hero__visual--modern-sketch">
              <img
                :src="modernHeroSketch"
                alt="Visualisierung eines modernen Rechenzentrums"
                class="hero__visual-sketch"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <h2
          v-if="isBusiness"
          class="hero__title business-cert-row__title"
        >
          Unsere Zertifizierungen
        </h2>

        <nav
          v-if="isBusiness"
          class="business-cert-row"
          aria-label="Zertifizierungen"
        >
          <a
            v-for="(logo, index) in businessCertificationRowLogos"
            :key="`business-cert-${index}`"
            :href="certificationsPageUrl"
            class="cert-rail__link"
            :aria-label="`Mehr zu ${logo.label}`"
          >
            <img
              :src="logo.src"
              :alt="logo.label"
              class="cert-rail__image"
              :class="{
                'business-cert-row__image--lg':
                  logo.label === 'ISO/IEC 27001 Zertifikat' ||
                  logo.label === 'CrefoZert Bonitätszertifikat' ||
                  logo.label === 'EcoZert Nachhaltigkeit',
                'business-cert-row__image--md':
                  logo.label === 'ISO 14001 Umweltmanagement' ||
                  logo.label === 'ISO 50001 Energiemanagement',
              }"
              loading="lazy"
              decoding="async"
            />
          </a>
        </nav>

        <nav
          v-if="isTech && !heroCollapsed"
          class="cert-rail-row cert-rail-row--below-hero"
          aria-label="Zertifizierungen"
        >
          <div class="cert-rail-row__inner" aria-hidden="false">
            <a
              v-for="(logo, index) in certificationRailRowLogos"
              :key="`rail-row-hero-${index}`"
              :href="certificationsPageUrl"
              class="cert-rail__link"
              :aria-label="`Mehr zu ${logo.label}`"
            >
              <img
                :src="logo.src"
                :alt="logo.label"
                class="cert-rail__image"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </nav>
      </div>

      <div v-if="isModernExperience" class="modern-services-shell">
        <div class="modern-services-layout">
          <section class="modern-services-panel">
            <header class="modern-panel__head">
              <p class="modern-panel__eyebrow">Unsere Services</p>
              <h2 class="modern-panel__title">Unsere Services</h2>
            </header>

            <div
              class="modern-services-grid"
              :class="{ 'modern-services-grid--business': isBusiness }"
            >
              <article
                v-for="service in modernGridServices"
                :key="service.id"
                class="modern-service-card"
                :class="{
                  'modern-service-card--link':
                    service.id === 'managed' ||
                    service.id === 'colocation' ||
                    service.id === 'cloud-hosting',
                }"
                :role="
                  service.id === 'managed' ||
                  service.id === 'colocation' ||
                  service.id === 'cloud-hosting'
                    ? 'link'
                    : undefined
                "
                :tabindex="
                  service.id === 'managed' ||
                  service.id === 'colocation' ||
                  service.id === 'cloud-hosting'
                    ? 0
                    : undefined
                "
                @click="
                  service.id === 'managed'
                    ? navigateToManagedServices()
                    : service.id === 'colocation'
                      ? navigateToColocation()
                      : service.id === 'cloud-hosting'
                        ? navigateToCloudHosting()
                      : undefined
                "
                @keydown.enter="
                  service.id === 'managed'
                    ? navigateToManagedServices()
                    : service.id === 'colocation'
                      ? navigateToColocation()
                      : service.id === 'cloud-hosting'
                        ? navigateToCloudHosting()
                      : undefined
                "
              >
                <div class="modern-service-card__icon" aria-hidden="true">{{ service.icon }}</div>
                <h3 class="modern-service-card__title">{{ service.title }}</h3>
                <p class="modern-service-card__text">{{ service.text }}</p>

                <dl class="modern-service-card__meta">
                  <div
                    v-for="meta in service.meta"
                    :key="meta.label"
                    class="modern-service-card__meta-row"
                  >
                    <dt>{{ meta.label }}</dt>
                    <dd>{{ meta.value }}</dd>
                  </div>
                </dl>

                <button
                  class="modern-service-card__cta"
                  type="button"
                  @click.stop="
                    service.id === 'managed'
                      ? navigateToManagedServices()
                      : service.id === 'colocation'
                        ? navigateToColocation()
                        : service.id === 'cloud-hosting'
                          ? navigateToCloudHosting()
                        : undefined
                  "
                >
                  {{ activeCopy.serviceCta }}
                </button>
              </article>
            </div>

          </section>

          <aside v-if="isModernOnly" class="modern-sidebar">
            <section class="modern-sidebar__section modern-sidebar__section--search">
              <h3 class="modern-sidebar__title">Suche</h3>
              <label class="modern-search-field">
                <span class="visually-hidden">Service durchsuchen</span>
                <input
                  v-model="modernSearchQuery"
                  type="text"
                  class="modern-search-field__input"
                  placeholder="Suchen..."
                />
              </label>
            </section>

            <section class="modern-sidebar__section modern-sidebar__section--contact">
              <h3 class="modern-sidebar__title">Schnellkontakt</h3>
              <dl class="modern-contact-list">
                <div
                  v-for="contact in modernQuickContacts"
                  :key="contact.label"
                  class="modern-contact-list__item"
                >
                  <dt>{{ contact.label }}</dt>
                  <dd>{{ contact.value }}</dd>
                </div>
              </dl>
            </section>

            <section class="modern-sidebar__section">
              <h3 class="modern-sidebar__title">Unsere Vorteile</h3>
              <ul class="modern-benefits-list">
                <li v-for="benefit in modernBenefits" :key="benefit">{{ benefit }}</li>
              </ul>
            </section>

            <section class="modern-sidebar__section modern-sidebar__section--sustainability">
              <h3 class="modern-sidebar__title">Nachhaltigkeit</h3>
              <p class="modern-sustainability__lead">
                {{ sustainabilityLead }}
              </p>
              <ul class="modern-sustainability__list">
                <li v-for="highlight in sustainabilityHighlights" :key="highlight">{{ highlight }}</li>
              </ul>
              <div class="modern-sustainability__actions">
                <a
                  class="modern-sustainability__link"
                  href="https://www.grass-merkur.de/wp-content/uploads/2025/05/2025-1-29-HVO-100-Eigenschaften-Vorteile.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nachhaltigkeitskonzept 2025 (PDF)
                </a>
                <a class="modern-sustainability__cta" href="mailto:vertrieb@grass-merkur.de">
                  Nachhaltigkeitstermin vereinbaren
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>

      <Transition name="cert-rail-vertical">
        <div v-if="!isModernExperience && !isTech" class="cert-rail cert-rail--left">
          <a
            v-for="(logo, index) in certificationLogosLeft"
            :key="`rail-left-${index}`"
            :href="certificationsPageUrl"
            class="cert-rail__link"
            :aria-label="`Mehr zu ${logo.label}`"
          >
            <img
              :src="logo.src"
              :alt="logo.label"
              class="cert-rail__image"
              :style="leftRailItemHeight ? { height: leftRailItemHeight } : undefined"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </Transition>

      <Transition name="cert-rail-row">
        <div v-if="isTech && heroCollapsed" class="cert-rail-row cert-rail-row--sticky">
          <div class="cert-rail-row__inner" aria-hidden="false">
            <a
              v-for="(logo, index) in certificationRailRowLogos"
              :key="`rail-row-${index}`"
              :href="certificationsPageUrl"
              class="cert-rail__link"
              :aria-label="`Mehr zu ${logo.label}`"
            >
              <img
                :src="logo.src"
                :alt="logo.label"
                class="cert-rail__image"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </Transition>

      <div class="page-stack" ref="pageStackRef">
        <div v-if="!isModernExperience" class="section-shell section-shell--flush">
          <!-- LÖSUNGEN / USE CASES -->
          <section id="solutions" class="section section--alt section--flush" ref="solutionsRef">
            <div class="section__header">
              <h2 class="section__title">Lösungen nach Bedarf</h2>
              <p class="section__subtitle">
                Einstieg über Anwendungsfälle statt Technik – optimiert für Nutzer:innen, die schnelle Orientierung brauchen.
              </p>
            </div>

            <div class="cards cards--solutions">
              <article
                v-for="solution in solutions"
                :key="solution.id"
                class="card card--solution"
                :style="getTechCardStyle(solution.id)"
              >
                <div
                  v-if="isTech"
                  class="card__icon"
                  aria-hidden="true"
                  v-html="getTechCardIconSvg(solution.id)"
                ></div>
                <div v-else class="card__icon" aria-hidden="true">
                  {{ getTechCardIcon(solution.id) }}
                </div>
                <h3 class="card__title">{{ solution.title }}</h3>
                <p class="card__text">{{ solution.text }}</p>
                <ul class="card__bullets">
                  <li v-for="point in solution.points" :key="point">{{ point }}</li>
                </ul>
                <button class="card__cta">
                  {{ activeCopy.solutionCta }}
                </button>
              </article>
            </div>
          </section>
        </div>

        <div v-if="!isModernExperience" class="section-shell section-shell--flush">
          <!-- SERVICES -->
          <section id="services" class="section section--flush">
            <div class="section__header">
              <h2 class="section__title">Unsere Services</h2>
              <p class="section__subtitle">
                Ein konsistentes Set an Service-Karten bildet die Grundlage für ein wiedererkennbares UI-Pattern auf allen Unterseiten.
              </p>
            </div>

            <div class="cards cards--services">
              <article
                v-for="service in services"
                :key="service.id"
                class="card card--service"
                :data-service-id="service.id"
                :style="getTechCardStyle(service.id)"
              >
                <div
                  v-if="isTech"
                  class="card__icon"
                  aria-hidden="true"
                  v-html="getTechCardIconSvg(service.id)"
                ></div>
                <div v-else class="card__icon" aria-hidden="true">
                  {{ service.icon }}
                </div>
                <h3 class="card__title">{{ service.title }}</h3>
                <p class="card__text">{{ service.text }}</p>

                <dl class="card__meta">
                  <div class="card__meta-row" v-for="meta in service.meta" :key="meta.label">
                    <dt>{{ meta.label }}</dt>
                    <dd>{{ meta.value }}</dd>
                  </div>
                </dl>

                <button class="card__cta">
                  {{ activeCopy.serviceCta }}
                </button>
              </article>
            </div>
          </section>
        </div>

        <div class="section-shell section-shell--flush">
          <!-- NEWS -->
          <section id="news" class="section section--alt section--flush">
            <div class="section__header">
              <h2 class="section__title">Was gibt's Neues?</h2>
              <p class="section__subtitle">
                Kuratierte Highlights aus Veranstaltungen, Studien und Medien rund um GRASS-MERKUR.
              </p>
            </div>

            <div
              class="news-carousel"
              :class="{
                'news-carousel--scrollable': newsCanScroll,
                'news-carousel--autoscroll': shouldAutoScrollNews,
              }"
            >
              <div class="news-carousel__track" ref="newsCarouselRef">
                <article
                  v-for="post in newsPosts"
                  :key="post.id"
                  class="card news-card news-carousel__item"
                >
                  <div class="news-card__thumb">
                    <img
                      :src="post.image"
                      :alt="post.imageAlt"
                      loading="lazy"
                      decoding="async"
                      @click="handleNewsThumbClick"
                    />
                  </div>
                  <div class="news-card__body">
                    <p class="news-card__meta">{{ post.date }}</p>
                    <h3 class="news-card__title">{{ post.title }}</h3>
                    <p class="news-card__excerpt">{{ post.excerpt }}</p>
                    <a
                      class="news-card__link"
                      :href="post.link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Artikel lesen
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div class="section-shell section-shell--flush">
            <BusinessContactForm v-if="isBusiness" />
            <TechDatacenter3D v-else />
        </div>
      </div>

      <Transition name="cert-rail-vertical">
        <div v-if="!isModernExperience && !isTech" class="cert-rail cert-rail--right">
          <a
            v-for="(logo, index) in certificationLogosRight"
            :key="`rail-right-${index}`"
            :href="certificationsPageUrl"
            class="cert-rail__link"
            :aria-label="`Mehr zu ${logo.label}`"
          >
            <img
              :src="logo.src"
              :alt="logo.label"
              class="cert-rail__image"
              :style="rightRailItemHeight ? { height: rightRailItemHeight } : undefined"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>
      </Transition>
    </main>

    <!-- FOOTER -->
    <footer
      class="footer"
      :class="{
        'footer--techgrid': isTech,
        'footer--tealgrid': isBusiness || isModern,
      }"
    >
      <div v-if="isTech" class="footer__inner footer__inner--techgrid">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="logo logo--small">GRASS·MERKUR</div>
            <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Services</h3>
            <a href="#services">Colocation</a>
            <a href="#services">Cloud Hosting</a>
            <a href="#services">Consulting</a>
            <a :href="managedServicesHref">Managed Services</a>
            <a href="#services">Security</a>
            <a href="#services">Network</a>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Unternehmen</h3>
            <a href="#solutions">Lösungen</a>
            <a href="#news">News</a>
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
          <div class="footer__variant-toggle">
            <div class="variant-toggle" aria-label="Darstellung wechseln">
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isTech }"
                @click="variant = 'tech'"
              >
                Tech UI
              </button>
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isBusiness }"
                @click="variant = 'business'"
              >
                Business UI (Var. 3)
              </button>
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isModern }"
                @click="variant = 'modern'"
              >
                Modern UI (Var. 1)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="isBusiness || isModern" class="footer__inner footer__inner--tealgrid">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="logo logo--small">GRASS·MERKUR</div>
            <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Services</h3>
            <a href="#services">Colocation</a>
            <a href="#services">Cloud Hosting</a>
            <a href="#services">Consulting</a>
            <a :href="managedServicesHref">Managed Services</a>
            <a href="#services">Security</a>
            <a href="#services">Network</a>
          </div>

          <div class="footer__col">
            <h3 class="footer__col-title">Unternehmen</h3>
            <a href="#solutions">Lösungen</a>
            <a href="#news">News</a>
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
          <div class="footer__variant-toggle">
            <div class="variant-toggle" aria-label="Darstellung wechseln">
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isTech }"
                @click="variant = 'tech'"
              >
                Tech UI
              </button>
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isBusiness }"
                @click="variant = 'business'"
              >
                Business UI (Var. 3)
              </button>
              <button
                class="variant-toggle__btn"
                :class="{ 'variant-toggle__btn--active': isModern }"
                @click="variant = 'modern'"
              >
                Modern UI (Var. 1)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="footer__inner">
        <div class="footer__brand">
          <div class="logo logo--small">GRASS·MERKUR</div>
          <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
        </div>
        <div class="footer__links">
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a :href="certificationsPageUrl">Zertifizierungen</a>
        </div>
        <div class="footer__variant-toggle">
          <div class="variant-toggle" aria-label="Darstellung wechseln">
            <button
              class="variant-toggle__btn"
              :class="{ 'variant-toggle__btn--active': isTech }"
              @click="variant = 'tech'"
            >
              Tech UI
            </button>
            <button
              class="variant-toggle__btn"
              :class="{ 'variant-toggle__btn--active': isBusiness }"
              @click="variant = 'business'"
            >
              Business UI (Var. 3)
            </button>
            <button
              class="variant-toggle__btn"
              :class="{ 'variant-toggle__btn--active': isModern }"
              @click="variant = 'modern'"
            >
              Modern UI (Var. 1)
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { useVariant, type Variant } from './composables/useVariant'
import { services, solutions } from './data/content'
import type { Service as ServiceEntry } from './data/content'
import type { Service } from './data/content'
import TechDatacenter3D from '@/components/TechDatacenter3D.vue'
import BusinessContactForm from '@/components/BusinessContactForm.vue'
import homeTechCssHref from './styles/variants/home-tech.css?url'
import homeBusinessCssHref from './styles/variants/home-business.css?url'
import homeModernCssHref from './styles/variants/home-modern.css?url'

const { variant, isTech, isBusiness, isModern } = useVariant()
const displayVariant = computed(() => (isBusiness.value ? 'modern' : variant.value))
const isModernExperience = computed(() => displayVariant.value === 'modern')
const HOME_VARIANT_STYLESHEET_ID = 'home-variant-stylesheet'
const HOME_VARIANT_STYLES: Record<Variant, string> = {
  tech: homeTechCssHref,
  business: homeBusinessCssHref,
  modern: homeModernCssHref,
}
const logo = new URL('./assets/LogoGrassMerkur-300.png', import.meta.url).href
const modernHeroSketch = new URL(
  './assets/Gemini_Generated_Image_7zq1jd7zq1jd7zq1.png',
  import.meta.url
).href
const CERT_RAIL_GAP = 12
const HERO_COLLAPSE_HIDE_RATIO = 0.22
const HERO_COLLAPSE_SHOW_RATIO = 0.4
const HERO_COLLAPSE_DEBOUNCE = 160
type TimerHandle = ReturnType<typeof setTimeout>

const certificationsPageUrl = '/zertifizierungen'
const managedServicesPageUrl = '/managed-services'
const colocationPageUrl = '/colocation'
const cloudHostingPageUrl = '/cloud-hosting'

const resolveAppPath = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL ?? '/'
  const basePrefix = baseUrl === '/' ? '' : baseUrl.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePrefix}${normalizedPath}`
}

const managedServicesHref = resolveAppPath(managedServicesPageUrl)
const colocationHref = resolveAppPath(colocationPageUrl)
const cloudHostingHref = resolveAppPath(cloudHostingPageUrl)

const currentYear = new Date().getFullYear()

const navigateToManagedServices = () => {
  if (typeof window === 'undefined') return

  const isHtmlEntry = window.location.pathname.toLowerCase().endsWith('.html')
  if (window.location.protocol === 'file:' || isHtmlEntry) {
    window.location.hash = '#/managed-services'
    window.location.reload()
    return
  }

  window.location.href = managedServicesHref
}

const navigateToColocation = () => {
  if (typeof window === 'undefined') return

  const isHtmlEntry = window.location.pathname.toLowerCase().endsWith('.html')
  if (window.location.protocol === 'file:' || isHtmlEntry) {
    window.location.hash = '#/colocation'
    window.location.reload()
    return
  }

  window.location.href = colocationHref
}

const navigateToCloudHosting = () => {
  if (typeof window === 'undefined') return

  const isHtmlEntry = window.location.pathname.toLowerCase().endsWith('.html')
  if (window.location.protocol === 'file:' || isHtmlEntry) {
    window.location.hash = '#/cloud-hosting'
    window.location.reload()
    return
  }

  window.location.href = cloudHostingHref
}

type CertificationLogo = {
  src: string
  label: string
}

const certificationLogosLeft: CertificationLogo[] = [
  {
    src: new URL('./assets/ISO_IEC-27001-bsi-Logo.png', import.meta.url).href,
    label: 'ISO/IEC 27001 Zertifikat',
  },
  {
    src: new URL('./assets/tisaxlogo-2024.png', import.meta.url).href,
    label: 'TISAX Label',
  },
  {
    src: new URL('./assets/ISO_50001_2015_GUTcert_ARNOR_Group.jpg', import.meta.url).href,
    label: 'ISO 50001:2015 Energiemanagement',
  },
  {
    src: new URL('./assets/ISO_50001_2018_GUTcert_ARNOR_Group.jpg', import.meta.url).href,
    label: 'ISO 50001:2018 Energiemanagement',
  },
]

const certificationLogosRight: CertificationLogo[] = [
  {
    src: new URL('./assets/Bonitaetszertifikat-bis-10.26-797x1024.jpg', import.meta.url).href,
    label: 'CrefoZert Bonitätszertifikat',
  },
  {
    src: new URL('./assets/EcoZert-GJ-2025-777x1024.jpg', import.meta.url).href,
    label: 'EcoZert Nachhaltigkeit',
  },
]

const certificationRailRowLogos: CertificationLogo[] = [
  ...certificationLogosLeft,
  ...certificationLogosRight,
]

type TechCardStyle = Record<string, string>

const TECH_RED = 'rgb(244, 99, 99)'
const TECH_RED_ICON_BG = 'rgba(244, 99, 99, 0.14)'

const TECH_CARD_STYLES: Record<string, TechCardStyle> = {
  security: {
    '--card-accent': 'rgb(12, 151, 155)',
    '--card-icon-bg': 'rgba(12, 151, 155, 0.16)',
    '--card-icon-fg': 'rgb(12, 151, 155)',
  },
  outsourcing: {
    '--card-accent': 'rgb(12, 151, 155)',
    '--card-icon-bg': 'rgba(12, 151, 155, 0.16)',
    '--card-icon-fg': 'rgb(12, 151, 155)',
  },
  cloud: {
    '--card-accent': TECH_RED,
    '--card-icon-bg': TECH_RED_ICON_BG,
    '--card-icon-fg': TECH_RED,
  },
  colocation: {
    '--card-accent': 'rgb(12, 151, 155)',
    '--card-icon-bg': 'rgba(12, 151, 155, 0.16)',
    '--card-icon-fg': 'rgb(12, 151, 155)',
  },
  'cloud-hosting': {
    '--card-accent': 'rgb(12, 151, 155)',
    '--card-icon-bg': 'rgba(12, 151, 155, 0.16)',
    '--card-icon-fg': 'rgb(12, 151, 155)',
  },
  managed: {
    '--card-accent': TECH_RED,
    '--card-icon-bg': TECH_RED_ICON_BG,
    '--card-icon-fg': TECH_RED,
  },
  consulting: {
    '--card-accent': 'rgb(12, 151, 155)',
    '--card-icon-bg': 'rgba(12, 151, 155, 0.16)',
    '--card-icon-fg': 'rgb(12, 151, 155)',
  },
  network: {
    '--card-accent': TECH_RED,
    '--card-icon-bg': TECH_RED_ICON_BG,
    '--card-icon-fg': TECH_RED,
  },
}

const TECH_CARD_ICONS: Record<string, string> = {
  security: '🛡️',
  outsourcing: '🔁',
  cloud: '☁️',
}

const TECH_CARD_ICON_SVGS: Record<string, string> = {
  colocation:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="6" rx="2"/><rect x="4" y="14" width="16" height="6" rx="2"/><path d="M8 7h.01M8 17h.01"/></svg>',
  'cloud-hosting':
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18z"/></svg>',
  managed:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3"/><path d="M12 19v3"/><path d="M4.2 4.2l2.1 2.1"/><path d="M17.7 17.7l2.1 2.1"/><path d="M2 12h3"/><path d="M19 12h3"/><path d="M4.2 19.8l2.1-2.1"/><path d="M17.7 6.3l2.1-2.1"/><circle cx="12" cy="12" r="4"/></svg>',
  consulting:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-1.1 1-1.8 2.2-2 4H10c-.2-1.8-.9-3-2-4z"/></svg>',
  security:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"/><path d="M9 12l2 2 4-5"/></svg>',
  network:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
  cloud:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.6 1.6A3.5 3.5 0 0 0 7 18z"/></svg>',
  outsourcing:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 0-9-9"/><path d="M3 12a9 9 0 0 0 9 9"/><path d="M12 3l-2 2 2 2"/><path d="M12 21l2-2-2-2"/></svg>',
  default:
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l1.2 6.2L20 12l-6.8 3.8L12 22l-1.2-6.2L4 12l6.8-3.8L12 2z"/></svg>',
}

const getTechCardStyle = (id: string): TechCardStyle | undefined => {
  if (!isTech.value) return undefined
  return TECH_CARD_STYLES[id]
}

const getTechCardIcon = (id: string): string => {
  return TECH_CARD_ICONS[id] ?? '✦'
}

const getTechCardIconSvg = (id: string): string => {
  return TECH_CARD_ICON_SVGS[id] ?? TECH_CARD_ICON_SVGS.default
}

const businessCertificationRowLogos: CertificationLogo[] = [
  certificationLogosLeft[1],
  certificationLogosLeft[2],
  certificationLogosLeft[3],
  certificationLogosLeft[0],
  certificationLogosRight[0],
  certificationLogosRight[1],
]

const modernBenefits = [
  'ISO 27001 zertifiziert',
  '24/7 deutscher Support',
  '99,99 % SLA Garantie',
  'Redundante Systeme',
]

const sustainabilityHighlights = [
  'CO2-reduzierte Energieversorgung mit zertifiziertem Grünstrom',
  'Hocheffiziente Klimasysteme, Warmgangeinhausung & GLT-Steuerung',
  'Operative Maßnahmen für ressourcenschonende IT-Services',
]

const sustainabilityLead =
  'Nachhaltigkeit im Rechenzentrum bedeutet für GRASS-MERKUR messbare Fortschritte – von energieeffizientem Bau über zertifizierten Grünstrom bis zu HVO 100 für die Notstrom-Flotte.'

const businessModernCards = computed<ServiceEntry[]>(() => {
  const businessIconMap: Record<string, string> = {
    colocation: '▦',
    'cloud-hosting': '☁︎',
    managed: '⚙︎',
    consulting: '✦',
    security: '⛨',
    network: '⌁',
  }

  const baseCards = services.map((service) => ({
    ...service,
    icon: businessIconMap[service.id] ?? service.icon,
  }))

  return baseCards
})
const modernSearchQuery = ref('')

const modernQuickContacts = [
  { label: 'Telefon', value: '+49 (0) 30 1234 5678' },
  { label: 'E-Mail', value: 'info@grass-merkur.de' },
]

const filteredModernServices = computed<ServiceEntry[]>(() => {
  const query = modernSearchQuery.value.trim().toLowerCase()
  if (!query) return services

  return services.filter((service) => {
    const inTitle = service.title.toLowerCase().includes(query)
    const inText = service.text.toLowerCase().includes(query)
    const inMeta = service.meta.some((entry) => {
      return (
        entry.label.toLowerCase().includes(query) || entry.value.toLowerCase().includes(query)
      )
    })
    return inTitle || inText || inMeta
  })
})

const modernGridServices = computed<ServiceEntry[]>(() =>
  isBusiness.value ? businessModernCards.value : filteredModernServices.value
)

const isModernOnly = computed(() => isModern.value)

type NewsPost = {
  id: string
  title: string
  date: string
  excerpt: string
  link: string
  image: string
  imageAlt: string
}

const newsPosts: NewsPost[] = [
  {
    id: 'future-ready-dc',
    title: 'Zukunftssichere Rechenzentren – Strategien für Bestand und Neubau',
    date: '29.09.2025 · GDA-Con25',
    excerpt:
      'Über 900 Teilnehmende diskutierten mit GRASS-MERKUR, wie nachhaltige Energie, IT und Bauplanung zusammenspielen.',
    link: 'https://www.grass-merkur.de/zukunftssichere_rechenzentren/',
    image: 'https://www.grass-merkur.de/wp-content/uploads/2025/09/2025-09-29-Podium-Bild-768x384.jpg',
    imageAlt: 'Paneldiskussion auf der GDA-Con25',
  },
  {
    id: 'isg-rising-star',
    title: 'ISG Studie: „Rising Star“ Auszeichnung für GRASS-MERKUR',
    date: '25.09.2025 · ISG Provider Lens',
    excerpt:
      'Die aktuelle Provider-Lens-Studie bestätigt unsere Colocation-Performance mit der Auszeichnung als Rising Star.',
    link: 'https://www.grass-merkur.de/isg-provider-studie-grass-merkur-rising-star/',
    image: 'https://www.grass-merkur.de/wp-content/uploads/2025/07/2025-09-25-ISG-Award-Ceremony-2-scaled-768x384.jpg',
    imageAlt: 'Teammitglieder halten den ISG Award',
  },
  {
    id: 'sustainable-it-webcast',
    title: 'Webcast: Zukunft der IT nachhaltig gestalten',
    date: '26.09.2025 · InnoFlash #93',
    excerpt:
      'Jens Ahlbrand spricht mit Christian Bredlow darüber, wie Nachhaltigkeit zum Wachstumstreiber in der IT wird.',
    link: 'https://www.grass-merkur.de/webcast/',
    image: 'https://www.grass-merkur.de/wp-content/uploads/2025/09/2025-09-26-InnoFlash-Screenshot-768x384.png',
    imageAlt: 'Screenshot des Nachhaltigkeits-Webcasts',
  },
  {
    id: 'open-data-center-day',
    title: 'Tag der offenen Rechenzentren am 07.11.2025',
    date: '13.11.2025 · Hannover',
    excerpt:
      'Ein Blick hinter die Kulissen: Besucher:innen erleben Live-Demos zur Datensouveränität und Energiestrategie.',
    link: 'https://www.grass-merkur.de/tag-der-offenen-rechenzentren-am-07-11-2025/',
    image: 'https://www.grass-merkur.de/wp-content/uploads/2025/10/2025-10-01-TdoRZ-LOGO-768x384.png',
    imageAlt: 'Grafik für den Tag der offenen Rechenzentren',
  },
]

const newsCarouselRef = ref<HTMLDivElement | null>(null)
const newsCanScroll = ref(false)
const newsCanScrollBack = ref(false)
const newsCanScrollForward = ref(false)
const newsAutoScrollEnabled = ref(false)
const heroVisibilityRatio = ref(1)
const heroCollapsed = ref(false)

const shouldAutoScrollNews = computed(() => {
  if (typeof window === 'undefined') return false
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return false
  return isTech.value && newsAutoScrollEnabled.value && newsCanScroll.value
})

let newsAutoScrollInterval: number | null = null
let newsAutoScrollPaused = false
const NEWS_AUTO_SCROLL_INTERVAL_MS = 3200
let newsAutoScrollResizeHandler: (() => void) | null = null

const stopNewsAutoScroll = () => {
  if (typeof window === 'undefined') return
  if (newsAutoScrollInterval != null) {
    window.clearInterval(newsAutoScrollInterval)
    newsAutoScrollInterval = null
  }
}

const startNewsAutoScroll = () => {
  if (typeof window === 'undefined') return
  if (newsAutoScrollInterval != null) return

  const step = () => {
    if (!shouldAutoScrollNews.value || newsAutoScrollPaused) return
    const trackEl = newsCarouselRef.value
    if (!trackEl) return

    const maxScrollLeft = trackEl.scrollWidth - trackEl.clientWidth
    if (maxScrollLeft <= 1) return

    // Page by one viewport width so we always land on whole-card groups (1/2/3).
    const nextLeft = trackEl.scrollLeft + trackEl.clientWidth
    if (nextLeft >= maxScrollLeft - 4) {
      trackEl.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      trackEl.scrollBy({ left: trackEl.clientWidth, behavior: 'smooth' })
    }
  }

  newsAutoScrollInterval = window.setInterval(step, NEWS_AUTO_SCROLL_INTERVAL_MS)
}

const pauseNewsAutoScroll = () => {
  newsAutoScrollPaused = true
  stopNewsAutoScroll()
}

const resumeNewsAutoScroll = () => {
  newsAutoScrollPaused = false
  startNewsAutoScroll()
}

const updateNewsCarouselState = () => {
  if (typeof document === 'undefined') return
  const trackEl = newsCarouselRef.value
  if (!trackEl) {
    newsCanScroll.value = false
    newsCanScrollBack.value = false
    newsCanScrollForward.value = false
    return
  }

  const { scrollWidth, clientWidth, scrollLeft } = trackEl
  const maxScrollLeft = scrollWidth - clientWidth
  const canScroll = maxScrollLeft > 1
  newsCanScroll.value = canScroll
  if (!canScroll) {
    newsCanScrollBack.value = false
    newsCanScrollForward.value = false
    return
  }

  newsCanScrollBack.value = scrollLeft > 8
  newsCanScrollForward.value = scrollLeft < maxScrollLeft - 8
}

const scrollNews = (direction: 'prev' | 'next') => {
  const trackEl = newsCarouselRef.value
  if (!trackEl) return
  const delta = direction === 'next' ? trackEl.clientWidth * 0.85 : -trackEl.clientWidth * 0.85
  trackEl.scrollBy({ left: delta, behavior: 'smooth' })
}

const handleNewsThumbClick = (event: MouseEvent) => {
  if (!newsCanScroll.value) return
  const target = event.currentTarget as HTMLElement | null
  if (!target) return

  const rect = target.getBoundingClientRect()
  const relativeX = event.clientX - rect.left
  const direction: 'prev' | 'next' = relativeX < rect.width / 2 ? 'prev' : 'next'
  scrollNews(direction)
}

const handleNewsScroll = () => updateNewsCarouselState()

watch(newsCarouselRef, (el, prev) => {
  prev?.removeEventListener('scroll', handleNewsScroll)
  prev?.removeEventListener('mouseenter', pauseNewsAutoScroll)
  prev?.removeEventListener('mouseleave', resumeNewsAutoScroll)
  prev?.removeEventListener('touchstart', pauseNewsAutoScroll)
  prev?.removeEventListener('touchend', resumeNewsAutoScroll)
  if (!el) {
    newsCanScroll.value = false
    newsCanScrollBack.value = false
    newsCanScrollForward.value = false
    return
  }
  el.addEventListener('scroll', handleNewsScroll, { passive: true })
  el.addEventListener('mouseenter', pauseNewsAutoScroll, { passive: true })
  el.addEventListener('mouseleave', resumeNewsAutoScroll, { passive: true })
  el.addEventListener('touchstart', pauseNewsAutoScroll, { passive: true })
  el.addEventListener('touchend', resumeNewsAutoScroll, { passive: true })
  nextTick(() => updateNewsCarouselState())
})

type CopyEntry = {
  tagline: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroSecondaryCta: string
  heroVisualLabel: string
  heroVisualValue: string
  heroVisualMeta: string
  solutionCta: string
  serviceCta: string
}
const modernCopy: CopyEntry = {
  tagline: 'Blue Experience Plattform',
  heroEyebrow: 'Professionelle Rechenzentrum-Lösungen',
  heroTitle: 'Modernes Hosting & Analytics für digitale Teams',
  heroSubtitle:
    'Skalierbare Cloud- und Security-Stacks mit Fokus auf Transparenz, Analytics und Content-Marketing.',
  heroSecondaryCta: 'Features & Blog entdecken',
  heroVisualLabel: 'Live Deployments',
  heroVisualValue: '128',
  heroVisualMeta: 'aktive Projekte weltweit',
  solutionCta: 'Case Study öffnen',
  serviceCta: 'Weiterlesen →',
}

const variantCopy: Record<Variant, CopyEntry> = {
  tech: {
    tagline: 'ISO 27001 Datacenter · Colocation · Cloud · Managed Services',
    heroEyebrow: 'Enterprise Datacenter & Cloud Plattform',
    heroTitle: 'Performante Infrastruktur für kritische Workloads',
    heroSubtitle:
      'Colocation, Private Cloud, Managed Services und Security-Stacks in einem ISO 27001-zertifizierten Rechenzentrum.',
    heroSecondaryCta: 'Technische Services ansehen',
    heroVisualLabel: 'Auslastung Cluster',
    heroVisualValue: '72%',
    heroVisualMeta: 'Live KPI aus Monitoring',
    solutionCta: 'Architekturvorschlag anfordern',
    serviceCta: 'Technische Details',
  },
  business: modernCopy,
  modern: modernCopy,
}

const activeCopy = computed(() => variantCopy[displayVariant.value])

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

const defaultNavLinks: NavLinkEntry[] = [
  { label: 'Lösungen', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Unternehmen', href: '#company' },
  { label: 'Karriere', href: '#career' },
]

const structuredNavLinks: NavLinkEntry[] = [
  {
    label: 'Lösungen',
    href: '/loesungen',
    children: [
      { label: 'Cloud Lösungen', href: '/loesungen/cloud', desc: 'Virtuelle Plattformen & souveräne Clouds' },
      { label: 'IT-Security', href: '/loesungen/it-security', desc: 'Zero Trust, SOC & Compliance' },
      { label: 'Managed Services', href: '/managed-services', desc: 'Betrieb & SLAs aus einer Hand' },
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
      { label: 'Zertifizierungen', href: '/unternehmen/zertifizierungen', desc: 'Nachweise & Gutachten' },
      { label: 'Nachhaltigkeit', href: '/unternehmen/nachhaltigkeit', desc: 'Green DC Programme & Reports' },
      { label: 'News', href: '/news', desc: 'Aktuelle Projekte & Termine' },
      { label: 'Jobs', href: '/jobs', desc: 'Karriere im Datacenter-Team' },
      { label: 'Imagefilm', href: '/imagefilm', desc: 'Einblicke in den Betrieb' },
    ],
  },
]

const techNavLinks: NavLinkEntry[] = structuredNavLinks
const modernNavLinks: NavLinkEntry[] = structuredNavLinks

const navLinks = computed<NavLinkEntry[]>(() => {
  if (isModernExperience.value) return modernNavLinks
  if (isTech.value) return techNavLinks
  return defaultNavLinks
})

const mobileNavOpen = ref(false)
const mobileNavExpandedIndex = ref<number | null>(null)

const closeMobileNav = () => {
  mobileNavOpen.value = false
  mobileNavExpandedIndex.value = null
}

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

const activeMegaIndex = ref<number | null>(null)
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

watch(navLinks, () => {
  activeMegaIndex.value = null
  mobileNavExpandedIndex.value = null
})

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

const headerRef = ref<HTMLElement | null>(null)
const heroRef = ref<HTMLElement | null>(null)
const solutionsRef = ref<HTMLElement | null>(null)
const pageStackRef = ref<HTMLElement | null>(null)
const solutionsHeightValue = ref(0)
const shouldCollapseCertRails = computed(() => isTech.value && heroCollapsed.value)

const updateHeaderHeight = () => {
  if (typeof document === 'undefined') return
  const headerEl = headerRef.value
  if (!headerEl) return
  const height = Math.round(headerEl.getBoundingClientRect().height)
  document.documentElement.style.setProperty('--header-height', `${height}px`)
}

const updateHeroHeight = () => {
  if (typeof document === 'undefined') return
  const heroEl = heroRef.value
  if (!heroEl) return
  const measuredHeight = heroEl.getBoundingClientRect().height
  document.documentElement.style.setProperty('--hero-height', `${measuredHeight}px`)
}

let heroResizeObserver: ResizeObserver | null = null
let headerResizeObserver: ResizeObserver | null = null
let solutionsResizeObserver: ResizeObserver | null = null
let pageStackResizeObserver: ResizeObserver | null = null
let heroIntersectionObserver: IntersectionObserver | null = null
let heroCollapseTimer: TimerHandle | null = null
let heroCollapsePendingTarget: boolean | null = null

const updateSolutionsHeight = () => {
  if (typeof document === 'undefined') return
  const sectionEl = solutionsRef.value
  if (!sectionEl) return
  const height = sectionEl.getBoundingClientRect().height
  document.documentElement.style.setProperty('--solutions-height', `${height}px`)
  solutionsHeightValue.value = height
}

const updateSolutionsOffset = () => {
  if (typeof document === 'undefined') return
  const sectionEl = solutionsRef.value
  const stackEl = pageStackRef.value
  if (!sectionEl || !stackEl) return
  const offset = sectionEl.getBoundingClientRect().top - stackEl.getBoundingClientRect().top
  document.documentElement.style.setProperty('--solutions-offset', `${Math.max(offset, 0)}px`)
}

const handleResize = () => {
  updateHeroHeight()
  updateSolutionsHeight()
  updateSolutionsOffset()
  updateNewsCarouselState()
}

const computeRailItemHeight = (count: number) => {
  if (count <= 0 || solutionsHeightValue.value <= 0) return ''
  const totalGap = CERT_RAIL_GAP * Math.max(count - 1, 0)
  const available = Math.max(solutionsHeightValue.value - totalGap, 0)
  const perItem = available / count
  return `${perItem}px`
}

const leftRailItemHeight = computed(() => computeRailItemHeight(certificationLogosLeft.length))
const rightRailItemHeight = computed(() => computeRailItemHeight(certificationLogosRight.length))

const setRailGapCssVar = () => {
  if (typeof document === 'undefined') return
  document.documentElement.style.setProperty('--cert-rail-gap', `${CERT_RAIL_GAP}px`)
}

const clearHeroCollapseSchedule = () => {
  if (heroCollapseTimer) {
    clearTimeout(heroCollapseTimer)
    heroCollapseTimer = null
  }
  heroCollapsePendingTarget = null
}

const scheduleHeroCollapseChange = (target: boolean) => {
  if (heroCollapsed.value === target) {
    clearHeroCollapseSchedule()
    return
  }

  if (heroCollapsePendingTarget === target && heroCollapseTimer) {
    return
  }

  clearHeroCollapseSchedule()

  if (typeof window === 'undefined') {
    heroCollapsed.value = target
    return
  }

  heroCollapsePendingTarget = target
  heroCollapseTimer = setTimeout(() => {
    heroCollapsed.value = target
    clearHeroCollapseSchedule()
  }, HERO_COLLAPSE_DEBOUNCE)
}

const updateHeroCollapseState = (ratio: number) => {
  heroVisibilityRatio.value = ratio

  if (!isTech.value) {
    clearHeroCollapseSchedule()
    heroCollapsed.value = false
    return
  }

  if (ratio < HERO_COLLAPSE_HIDE_RATIO) {
    scheduleHeroCollapseChange(true)
  } else if (ratio > HERO_COLLAPSE_SHOW_RATIO) {
    scheduleHeroCollapseChange(false)
  } else {
    clearHeroCollapseSchedule()
  }
}

const observeHeroIntersection = () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return
  const heroEl = heroRef.value
  if (!heroEl) return

  heroIntersectionObserver?.disconnect()
  heroIntersectionObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      const ratio = entry?.intersectionRatio ?? 0
      updateHeroCollapseState(Math.max(0, Math.min(1, ratio)))
    },
    { threshold: [0, 0.1, 0.25, 0.4, 0.65, 0.9, 1], rootMargin: '0px 0px -12% 0px' }
  )
  heroIntersectionObserver.observe(heroEl)
}

const applyHomeVariantStylesheet = (nextVariant: Variant) => {
  if (typeof document === 'undefined') return

  let link = document.getElementById(HOME_VARIANT_STYLESHEET_ID) as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.id = HOME_VARIANT_STYLESHEET_ID
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }

  const href = HOME_VARIANT_STYLES[nextVariant]
  if (link.getAttribute('href') !== href) {
    link.setAttribute('href', href)
  }
}

const removeHomeVariantStylesheet = () => {
  if (typeof document === 'undefined') return
  document.getElementById(HOME_VARIANT_STYLESHEET_ID)?.remove()
}

onMounted(() => {
  applyHomeVariantStylesheet(variant.value)
  setRailGapCssVar()
  nextTick(() => updateHeaderHeight())
  updateHeroHeight()
  updateSolutionsHeight()
  updateSolutionsOffset()
  updateNewsCarouselState()
  observeHeroIntersection()

  if (typeof window !== 'undefined') {
    const NEWS_AUTO_SCROLL_MEDIA_QUERY = '(max-width: 1280px) and (max-height: 800px)'
    const updateNewsAutoScrollFlag = () => {
      if (!window.matchMedia) {
        newsAutoScrollEnabled.value = false
        return
      }
      newsAutoScrollEnabled.value = window.matchMedia(NEWS_AUTO_SCROLL_MEDIA_QUERY).matches
    }

    updateNewsAutoScrollFlag()
    newsAutoScrollResizeHandler = updateNewsAutoScrollFlag
    window.addEventListener('resize', updateNewsAutoScrollFlag)

    watch(
      shouldAutoScrollNews,
      (active) => {
        if (active) {
          resumeNewsAutoScroll()
        } else {
          stopNewsAutoScroll()
        }
      },
      { immediate: true }
    )
  }

  if (typeof ResizeObserver !== 'undefined') {
    if (headerRef.value) {
      headerResizeObserver = new ResizeObserver(() => updateHeaderHeight())
      headerResizeObserver.observe(headerRef.value)
    }

    if (heroRef.value) {
      heroResizeObserver = new ResizeObserver(() => updateHeroHeight())
      heroResizeObserver.observe(heroRef.value)
    }

    if (solutionsRef.value) {
      solutionsResizeObserver = new ResizeObserver(() => updateSolutionsHeight())
      solutionsResizeObserver.observe(solutionsRef.value)
    }

    if (pageStackRef.value) {
      pageStackResizeObserver = new ResizeObserver(() => updateSolutionsOffset())
      pageStackResizeObserver.observe(pageStackRef.value)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleMobileNavEscape)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('is-mobile-nav-open')
    document.body.classList.remove('is-mobile-nav-open')
  }

  clearMegaCloseTimer()
  headerResizeObserver?.disconnect()
  headerResizeObserver = null

  heroResizeObserver?.disconnect()
  heroResizeObserver = null

  solutionsResizeObserver?.disconnect()
  solutionsResizeObserver = null

  pageStackResizeObserver?.disconnect()
  pageStackResizeObserver = null

  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
    if (newsAutoScrollResizeHandler) {
      window.removeEventListener('resize', newsAutoScrollResizeHandler)
      newsAutoScrollResizeHandler = null
    }
  }

  newsCarouselRef.value?.removeEventListener('scroll', handleNewsScroll)
  newsCarouselRef.value?.removeEventListener('mouseenter', pauseNewsAutoScroll)
  newsCarouselRef.value?.removeEventListener('mouseleave', resumeNewsAutoScroll)
  newsCarouselRef.value?.removeEventListener('touchstart', pauseNewsAutoScroll)
  newsCarouselRef.value?.removeEventListener('touchend', resumeNewsAutoScroll)
  stopNewsAutoScroll()
  clearHeroCollapseSchedule()
  heroIntersectionObserver?.disconnect()
  heroIntersectionObserver = null
  removeHomeVariantStylesheet()
})

watch(variant, () => {
  applyHomeVariantStylesheet(variant.value)
  clearHeroCollapseSchedule()
  if (!isTech.value) {
    heroCollapsed.value = false
  } else {
    updateHeroCollapseState(heroVisibilityRatio.value)
  }

  nextTick(() => {
    updateHeroHeight()
    updateSolutionsHeight()
    updateSolutionsOffset()
    updateNewsCarouselState()
    observeHeroIntersection()
  })
})
</script>


