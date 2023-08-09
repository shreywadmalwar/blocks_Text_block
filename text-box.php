<?php

/**
 * Plugin Name:       Text Box
 * Description:       A box of text.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Shreyash Wadmalwar
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       text-box
 *
 * @package           blocks-course
 */
function blocks_course_text_box_block_init()
{
	register_block_type_from_metadata(__DIR__);
}

add_action('init', 'blocks_course_text_box_block_init');
