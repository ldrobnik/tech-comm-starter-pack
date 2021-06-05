/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Technical Communication Tools',
  tagline: 'An introduction to selected technical communication tools',
  url: 'https://drobnik.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ldrobnik', // Usually your GitHub org/user name.
  projectName: 'tech-comm-tools', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Technical Communication Tools',
      logo: {
        alt: 'Technical Communication Tools Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'vsc',
          position: 'left',
          label: 'Visual Studio Code',
        },
        {
          type: 'doc',
          docId: 'markdown',
          position: 'left',
          label: 'Markdown',
        },
        {
          type: 'doc',
          docId: 'github/github-basics',
          position: 'left',
          label: 'GitHub',
        },
        {
          href: 'https://github.com/ldrobnik/tech-comm-tools',
          label: 'Repository',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/lukasz-drobnik/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/drobnik',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Official Website',
              to: 'https://drobnik.co',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ldrobnik',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Łukasz Drobnik. Built with Docusaurus.`,
    },
  },
  colorMode: {
    defaultMode: 'light',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    switchConfig: {
      darkIcon: '☾',
      darkIconStyle: {},
      lightIcon: '🌣',
      lightIconStyle: {}
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ldrobnik/tech-comm-tools/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
