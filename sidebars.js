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

	quickstartSidebar: [
		'Quick Start/Introduction',
		'Quick Start/Read Before Operating',
		'Quick Start/Unattended Operation',
		'Quick Start/Installation',
		'Quick Start/User Interface',
		'Quick Start/Machine Startup',
		'Quick Start/Moving the Machine',
		'Quick Start/Setting Zero',
		'Quick Start/Running GCode',
	],

	gladiusSidebar: [
		'Gladius/Introduction',
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

	proteusSidebar: [
		'Proteus/Introduction',
		{
			type: 'category',
			label: 'Machine Requirements',
			items: [
				'Proteus/Machine Requirements/Air Supply',
			]
		},
		{
			type: 'category',
			label: 'Maintenance',
			items: [
				'Proteus/Maintenance/Checklist',
				'Proteus/Maintenance/Scheduled Maintenance Programs/Scheduled Maintenance Programs',
				'Proteus/Maintenance/Hardware/Hardware',
				'Proteus/Maintenance/Software/Software',
				'Proteus/Maintenance/Spindle/Spindle',
				'Proteus/Maintenance/Air and Coolant/Air and Coolant',
				'Proteus/Maintenance/3D Probe System/3D Probe System',
				'Proteus/Maintenance/Tool Offset Probe/Tool Offset Probe',
			]
		}
	],


	swordfishSidebar: [
		'Swordfish/Introduction',
		{
			type: 'category',
			label: 'Controller Overview',
			items: [
				'Swordfish/Docs/Documentation',
				'Swordfish/Docs/Supported M Codes',
				'Swordfish/Docs/Supported G Codes',
				'Swordfish/Docs/CAM Post Processors',
			]
		},

	],

	technicalSidebar: [
		'Technical/Introduction',
		{
			type: 'category',
			label: 'Electrical',
			items: [
				'Technical/Wiring/Wiring Overview',
				'Technical/Wiring/Motor Drivers',
			]
		},

	],

	/*marsSidebar: [
		'Technical/Introduction',
		{
			type: 'category',
			label: 'Mars',
			items: [
				'Technical/Wiring/Wiring Overview',
				'Technical/Wiring/Motor Drivers',
		]
		},

	],

	dionysusSidebar: [
		'Technical/Introduction',
		{
			type: 'category',
			label: 'Dionysus',
			items: [
				'Technical/Wiring/Wiring Overview',
				'Technical/Wiring/Motor Drivers',
		]
		},

	],	*/

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
