<?php
/**
 * Template Name: Grass Merkur Landing
 */

declare(strict_types=1);

$variant = 'tech';

$variant_copy = [
    'tagline' => [
        'tech' => 'ISO 27001 Datacenter · Colocation · Cloud · Managed Services',
        'business' => 'Rechenzentrum & IT-Services für Ihr Unternehmen',
    ],
    'hero_eyebrow' => [
        'tech' => 'Enterprise Datacenter & Cloud Plattform',
        'business' => 'Rechenzentrum & IT aus Deutschland',
    ],
    'hero_title' => [
        'tech' => 'Performante Infrastruktur für kritische Workloads',
        'business' => 'Sichere IT-Lösungen, die Ihr Unternehmen entlasten',
    ],
    'hero_subtitle' => [
        'tech' => 'Colocation, Private Cloud, Managed Services und Security-Stacks in einem ISO 27001-zertifizierten Rechenzentrum.',
        'business' => 'Wir betreiben Ihre IT sicher, skalierbar und DSGVO-konform – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
    ],
    'hero_secondary' => [
        'tech' => 'Technische Services ansehen',
        'business' => 'Lösungen entdecken',
    ],
    'hero_visual_label' => [
        'tech' => 'Auslastung Cluster',
        'business' => 'Zufriedene Kunden',
    ],
    'hero_visual_value' => [
        'tech' => '72%',
        'business' => '98%',
    ],
    'hero_visual_meta' => [
        'tech' => 'Live KPI aus Monitoring',
        'business' => 'geben uns 5 von 5 Sternen',
    ],
    'solution_cta' => [
        'tech' => 'Architekturvorschlag anfordern',
        'business' => 'Mehr zur Lösung',
    ],
    'service_cta' => [

            <section id="services" class="section">
                <div class="section__header">
                    <h2 class="section__title">Unsere Services</h2>
                    <p class="section__subtitle">
                        Ein konsistentes Set an Service-Karten bildet die Grundlage für ein wiedererkennbares UI-Pattern auf allen Unterseiten.
                    </p>
                </div>

                <div class="cards cards--services">
                    <?php foreach ($services as $service) : ?>
                        <article class="card card--service" id="service-<?php echo esc_attr($service['id']); ?>">
                            <div class="card__icon" aria-hidden="true"><?php echo esc_html($service['icon']); ?></div>
                            <h3 class="card__title"><?php echo esc_html($service['title']); ?></h3>
                            <p class="card__text"><?php echo esc_html($service['text']); ?></p>

                            <dl class="card__meta">
                                <?php foreach ($service['meta'] as $meta) : ?>
                                    <div class="card__meta-row">
                                        <dt><?php echo esc_html($meta['label']); ?></dt>
                                        <dd><?php echo esc_html($meta['value']); ?></dd>
                                    </div>
                                <?php endforeach; ?>
                            </dl>

                            <button
                                class="card__cta"
                                type="button"
                                data-variant-copy
                                data-text-tech="<?php echo esc_attr($variant_copy['service_cta']['tech']); ?>"
                                data-text-business="<?php echo esc_attr($variant_copy['service_cta']['business']); ?>"
                            >
                                <?php echo esc_html($variant_copy['service_cta'][$variant]); ?>
                            </button>
                        </article>
                    <?php endforeach; ?>
                </div>
            </section>

            <?php grassmerkur_render_cert_rail('right', $certifications_right); ?>
        </div>

        <div class="section-shell">
            <?php grassmerkur_render_cert_rail('left', $certifications_left); ?>

            <section id="industries" class="section section--alt">
                <div class="section__header">
                    <h2 class="section__title">Branchen &amp; Einsatzszenarien</h2>
                    <p class="section__subtitle">
                        Branchen-Kacheln mit klaren Nutzenversprechen dienen als visuelle Einstiege für unterschiedliche Zielgruppen.
                    </p>
                </div>

                <div class="cards cards--industries">
                    <?php foreach ($industries as $industry) : ?>
                        <?php
                        $text_classes = 'card__text';
                        if ($industry['id'] === 'public') {
                            $text_classes .= ' card__text--spaced';
                        }
                        ?>
                        <article class="card card--industry" id="industry-<?php echo esc_attr($industry['id']); ?>">
                            <h3 class="card__title"><?php echo esc_html($industry['title']); ?></h3>
                            <p class="<?php echo esc_attr($text_classes); ?>"><?php echo esc_html($industry['text']); ?></p>
                            <div class="card__chips">
                                <?php foreach ($industry['chips'] as $chip) : ?>
                                    <span class="chip"><?php echo esc_html($chip); ?></span>
                                <?php endforeach; ?>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>
            </section>

            <?php grassmerkur_render_cert_rail('right', $certifications_right); ?>
        </div>

        <div class="section-shell">
            <?php grassmerkur_render_cert_rail('left', $certifications_left); ?>

            <section id="company" class="section">
                <div class="section__header">
                    <h2 class="section__title">Unternehmen &amp; Rechenzentrum</h2>
                    <p class="section__subtitle">
                        Dieser Bereich kombiniert Storytelling-Elemente mit harten Fakten – ideal als eigenes Figma-Frame.
                    </p>
                </div>

                <div class="company-layout">
                    <div class="company-layout__col company-layout__col--story">
                        <h3 class="company-layout__headline">Warum wir?</h3>
                        <p class="company-layout__text">
                            Seit über 20 Jahren betreiben wir hochverfügbare Rechenzentrumsinfrastruktur und individuelle
                            IT-Lösungen für mittelständische Unternehmen und öffentliche Auftraggeber.
                        </p>
                        <ul class="company-layout__list">
                            <li>Eigener Standort in Deutschland</li>
                            <li>Langjährige Erfahrung mit kritischen Workloads</li>
                            <li>Direkter Zugang zu Expert:innen statt Hotline-Schleifen</li>
                        </ul>
                    </div>

                    <div class="company-layout__col company-layout__col--facts">
                        <div class="fact-grid">
                            <div class="fact-grid__item">
                                <div class="fact-grid__value">2</div>
                                <div class="fact-grid__label">Rechenzentrumsstandorte</div>
                            </div>
                            <div class="fact-grid__item">
                                <div class="fact-grid__value">99,99%</div>
                                <div class="fact-grid__label">Verfügbarkeit</div>
                            </div>
                            <div class="fact-grid__item">
                                <div class="fact-grid__value">24/7</div>
                                <div class="fact-grid__label">Monitoring &amp; Betrieb</div>
                            </div>
                            <div class="fact-grid__item">
                                <div class="fact-grid__value">ISO</div>
                                <div class="fact-grid__label">27001 zertifiziert</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <?php grassmerkur_render_cert_rail('right', $certifications_right); ?>
        </div>

        <div class="section-shell">
            <?php grassmerkur_render_cert_rail('left', $certifications_left); ?>

            <section id="career" class="section section--alt">
                <div class="section__header">
                    <h2 class="section__title">Karriere im Rechenzentrum</h2>
                    <p class="section__subtitle">
                        Jobs werden in einem wiederverwendbaren Card-Layout dargestellt, das in Figma als Komponente angelegt werden kann.
                    </p>
                </div>

                <div class="cards cards--career">
                    <?php foreach ($jobs as $job) : ?>
                        <article class="card card--job" id="job-<?php echo esc_attr($job['id']); ?>">
                            <h3 class="card__title"><?php echo esc_html($job['title']); ?></h3>
                            <p class="card__text"><?php echo esc_html($job['text']); ?></p>
                            <div class="card__meta-inline">
                                <span><?php echo esc_html($job['location']); ?></span>
                                <span> · </span>
                                <span><?php echo esc_html($job['type']); ?></span>
                            </div>
                            <button class="card__cta" type="button">Details &amp; Bewerbung</button>
                        </article>
                    <?php endforeach; ?>
                </div>
            </section>

            <?php grassmerkur_render_cert_rail('right', $certifications_right); ?>
        </div>
    <main class="page-layout">
        <div class="cert-rail cert-rail--left" aria-hidden="true">
            <?php foreach ($certifications_left as $file) : ?>
                <img
                    class="cert-rail__image"
                    src="<?php echo esc_url($cert_base . $file); ?>"
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
            <?php endforeach; ?>
        </div>

        <div class="page-stack">
        <div class="section-shell section-shell--hero">
        <div class="footer__inner">
            <div class="footer__brand">
                <div class="logo logo--small">GRASS·MERKUR</div>
                <p>Rechenzentrum &amp; IT-Dienstleistungen aus Deutschland.</p>
            </div>
            <div class="footer__links">
                <a href="#">Impressum</a>
                <a href="#">Datenschutz</a>
                <a href="#">Zertifizierungen</a>
            </div>
        </div>
    </footer>
</div>

<?php get_footer(); ?>
