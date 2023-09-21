// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Zealandia Systems',
	tagline: 'Documentation',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://help.zealandia.systems',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/help-site-src',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	//organizationName: 'Zealandia-Systems', // Usually your GitHub org/user name.
	projectName: 'help-site', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					sidebarCollapsible: true,
					routeBasePath: '/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				//title: 'Zealandia Systems',
				logo: {
					alt: 'Zealandia Systems',
					src: 'img/logo.png',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'quickstartSidebar',
						position: 'left',
						label: 'Quick Start',
					},
					{
						type: 'docSidebar',
						sidebarId: 'proteusSidebar',
						position: 'left',
						label: 'Proteus',
					},
					/*{
						type: 'docSidebar',
						sidebarId: 'marsSidebar',
						position: 'left',
						label: 'Mars',
					},*/
					{
						type: 'docSidebar',
						sidebarId: 'gladiusSidebar',
						position: 'left',
						label: 'Gladius',
					},
					{
						type: 'docSidebar',
						sidebarId: 'swordfishSidebar',
						position: 'left',
						label: 'Swordfish',
					},

					/*{
						type: 'docSidebar',
						sidebarId: 'dionysusSidebar',
						position: 'left',
						label: 'Dionysus',
					},*/
					{
						type: 'docSidebar',
						sidebarId: 'technicalSidebar',
						position: 'left',
						label: 'Technical',
					},
				],
			},
			footer: {
				style: 'dark',
				/*links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Gladius',
								to: '/docs/gladius',
							},
						],
					},
				],*/
				copyright: `Copyright © ${new Date().getFullYear()} Zealandia Systems Ltd. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [{ name: 'keywords', content: 'Zealandia, Zelandia, Zealandia Systems, Proteus, CNC, Help, Docs' }],
		}),
};

module.exports = config;
