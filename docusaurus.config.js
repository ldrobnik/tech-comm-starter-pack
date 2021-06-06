/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Tech Comm Tools',
    tagline: 'An introduction to selected technical communication tools',
    url: 'https://drobnik.co',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'ldrobnik', // Usually your GitHub org/user name.
    projectName: 'tech-comm-tools', // Usually your repo name.
    themeConfig: {
        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: false,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '☀️',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        navbar: {
            title: 'Tech Comm Tools',
            logo: {
                alt: 'Tech Comm Tools Logo',
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
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
