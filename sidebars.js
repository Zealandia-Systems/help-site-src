/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	helpSidebar: [
		'Gladius/Introduction',
		{
			type: 'category',
			label: 'Getting Started',
			items: [
				'Gladius/Getting Started/Installation',
				'Gladius/Getting Started/User Interface',
				'Gladius/Getting Started/Machine Startup',
				'Gladius/Getting Started/Moving the Machine',
				'Gladius/Getting Started/Running GCode'
			],
		},
		{
			type: 'category',
			label: 'User Guide',
			items: [
				{
					type: 'category',
					label: 'Workspace',
					link: { type: 'doc', id: 'Gladius/User Guide/Workspace/Workspace' },
					items: [
						'Gladius/User Guide/Workspace/Console',
						'Gladius/User Guide/Workspace/GCode Viewer',
						'Gladius/User Guide/Workspace/Probe Widget',
						'Gladius/User Guide/Workspace/Spindle Widget',
						'Gladius/User Guide/Workspace/Macros',
					]
				},
				'Gladius/User Guide/Keyboard Shortcuts',
				'Gladius/User Guide/Tool Change'
			]
		},
		{
			type: 'category',
			label: 'Advanced Functions',
			link: { type: 'doc', id: 'Gladius/Advanced Functions/Advanced Functions' },
			items: [
				'Gladius/Advanced Functions/GCode Commands',
				'Gladius/Advanced Functions/Configuration Settings'
			]
		}

	],


	// But you can create a sidebar manually
	/*
	tutorialSidebar: [
		'intro',
		'hello',
		{
			type: 'category',
			label: 'Tutorial',
			items: ['tutorial-basics/create-a-document'],
		},
	],
	 */
};

module.exports = sidebars;
