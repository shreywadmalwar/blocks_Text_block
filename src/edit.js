import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';

import './editor.scss';

import {
	__experimentalBoxControl as BoxControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';

import classnames from 'classnames';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, shadow, shadowOpacity } = attributes;

	const onChangeAlignment = (newAlignment) => {
		setAttributes({ textAlignment: newAlignment });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};

	const onChangeShadowOpacity = (newShadowOpacity) => {
		setAttributes({ shadowOpacity: newShadowOpacity });
	};

	const toggleShadow = () => {
		setAttributes({ shadow: !shadow });
	};

	const classes = classnames(`text-box-align-${textAlignment}`, {
		'has-shadow': shadow,
		[`shadow-opacity-${shadowOpacity}`]: shadow && shadowOpacity,
	});

	return (
		<>
			<InspectorControls>
				{shadow && (
					<PanelBody title={__('Shadow Settings', 'text-block')}>
						<RangeControl
							label={__('Shadow Opacity', 'text-block')}
							value={shadowOpacity}
							min={10}
							max={40}
							step={10}
							onChange={onChangeShadowOpacity}
						/>
					</PanelBody>
				)}
			</InspectorControls>
			<BlockControls
				controls={[
					{
						icon: 'admin-page',
						title: __('Shadow'),
						onClick: toggleShadow,
						isActive: shadow,
					},
				]}
			>
				<AlignmentToolbar
					value={textAlignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<div
				{...useBlockProps({
					className: classes,
				})}
			>
				<RichText
					onChange={onChangeText}
					value={text}
					placeholder={__('Your Text', 'text-box')}
					tagName="p"
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}

// import {
// 	PanelBody,
// 	TextControl,
// 	TextareaControl,
// 	ToggleControl,
// 	AnglePickerControl,
// 	ColorPicker,
// 	ColorPalette,
// } from '@wordpress/components';
// import {
// 	ToolbarGroup,
// 	ToolbarButton,
// 	DropdownMenu,
// } from '@wordpress/components';

// export default function Edit({ attributes, setAttributes }) {
// 	const { text } = attributes;
// 	return (
// 		<RichText
// 			{...useBlockProps()}
// 			onChange={(text) => setAttributes({ text })}
// 			value={text}
// 			placeholder={__('Your Text Here', 'text-box')}
// 			tagName="h4"
// 			allowedFormats={['core/bold']}
// 		/>
// 	);
// }

// const onChangeBackgroundColor = (newBackgroundColor) => {
// 	setAttributes({ backgroundColor: newBackgroundColor });
// };

// const onChangeTextColor = (newTextColor) => {
// 	setAttributes({ textColor: newTextColor });
// };
{
	/* <TextControl
						title="Input Lable"
						value={text}
						onChange={(text) =>
							setAttributes({ ...attributes, text })
						}
						help="Help Text"
					/>
					<TextareaControl
						title="Text Area Label"
						value={text}
						onChange={(text) =>
							setAttributes({ ...attributes, text })
						}
						help="Help Text"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={true}
						onChange={(v) => console.log(v)}
					/>
					<AnglePickerControl />
					<ColorPicker
						color={'F03'}
						onChangeComplete={(v) => console.log(v)}
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#FF0000' },
							{ name: 'black', color: '#000000' },
						]}
						value={backgroundColor}
						onChange={onChangeBackgroundColor}
					/> */
}

// controls={[
// 	{
// 		title: 'Button 1',
// 		icon: 'admin-generic',
// 		isActive: true,
// 		onClick: () => console.log('Button 1 clicked'),
// 	},
// 	{
// 		title: 'Button 2',
// 		icon: 'admin-generic',
// 		isActive: true,
// 		onClick: () => console.log('Button 2 clicked'),
// 	},
// 	{
// 		title: 'Button 3',
// 		icon: 'admin-generic',
// 		isActive: true,
// 		onClick: () => console.log('Button 3 clicked'),
// 	},
// ]}

{
	/* <ToolbarGroup>
					<ToolbarButton
						title="Align left"
						icon="editor-alignleft"
						onClick={() => console.log('left clicked')}
					/>
					<ToolbarButton
						title="Align Center"
						icon="editor-aligncenter"
						onClick={() => console.log('Center clicked')}
					/>
					<ToolbarButton
						title="Align Right"
						icon="editor-alignright"
						onClick={() => console.log('Right clicked')}
					/>
					<DropdownMenu
						icon="arrow-down-alt2"
						label={__('More Alignments', 'text_box')}
						controls={[
							{
								title: __('Align wide', 'text-box'),
								icon: 'align-wide',
								onClick: () => console.log('Wide Align'),
							},
							{
								title: __('Align FUll', 'text-box'),
								icon: 'align-full-width',
								onClick: () => console.log('Full Align'),
							},
						]}
					/>
				</ToolbarGroup> */
}
