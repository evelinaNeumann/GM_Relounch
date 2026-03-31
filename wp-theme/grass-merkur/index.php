<?php
/**
 * Default index fallback.
 */

declare(strict_types=1);

get_header();
?>

<main class="section">
    <div class="section__header">
        <h1 class="section__title"><?php esc_html_e('Standardseite', 'grass-merkur'); ?></h1>
    </div>

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article <?php post_class('card card--solution'); ?>>
                <h2 class="card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                <div class="card__text"><?php the_content(); ?></div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <p><?php esc_html_e('Keine Inhalte gefunden.', 'grass-merkur'); ?></p>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
