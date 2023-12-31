import { registerBlockType, createBlock } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';
import Edit from './edit';
import save from './save';
import v1 from './v1';
import v2 from './v2';

registerBlockType('blocks-course/text-box', {
	icon: {
		src: 'text-page',
		background: '#FF0000',
		foreground: '#FFFFFF',
	},
	edit: Edit,
	save,
	deprecated: [v2, v1],
	variations: [
		{
			name: 'blocks-course/gradient-text-box',
			title: __('Gradient Text Box'),
			icon: 'wordpress',
			attributes: {
				gradient: 'Red-to-blue',
			},
		},
	],
	transforms: {
		from: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				transform: ({ content, align }) => {
					return createBlock('blocks-course/text-box', {
						text: content,
						textAlignment: align,
					});
				},
			},
			{
				type: 'enter',
				regExp: /textbox/i,
				transform: () => {
					return createBlock('blocks-course/text-box', {
						shadow: true,
						gradient: 'Red-to-blue',
					});
				},
			},
			{
				type: 'prefix',
				prefix: 'textbox',
				transform: () => {
					return createBlock('blocks-course/text-box', {
						shadow: true,
						gradient: 'Red-to-blue',
					});
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: ['core/paragraph'],
				isMatch: ({ text }) => {
					return text ? true : false;
				},
				transform: ({ text, textAlignment }) => {
					return createBlock('core/paragraph', {
						content: text,
						align: textAlignment,
					});
				},
			},
		],
	},
});
