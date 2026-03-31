<?php
/**
 * Grass Merkur theme setup
 */

if (!defined('GRASS_MERKUR_VERSION')) {
    define('GRASS_MERKUR_VERSION', '0.1.0');
}

require_once get_template_directory() . '/inc/content.php';

function grassmerkur_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    register_nav_menus([
        'primary' => __('Primary Navigation', 'grass-merkur'),
    ]);
}
add_action('after_setup_theme', 'grassmerkur_setup');

function grassmerkur_scripts() {
    wp_enqueue_style(
        'grassmerkur-main',
        get_template_directory_uri() . '/assets/css/page.css',
        [],
        GRASS_MERKUR_VERSION
    );

    wp_enqueue_script(
        'grassmerkur-main',
        get_template_directory_uri() . '/assets/js/main.js',
        [],
        GRASS_MERKUR_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'grassmerkur_scripts');
