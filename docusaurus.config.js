// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  stylesheets: [
    {
      rel: 'icon',
      href: '/img/docusaurus.png'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://icdn.talentbrick.com/main/icons/apple-touch-icon.png'
    },
  ],
  title: 'NEET@TalentBrick',
  tagline: 'Prepare for National Eligibility cum Entrance Test at a glance with TalentBrick open-source education model.',
  url: 'https://neet.talentbrick.com',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'talentbrick', // Usually your GitHub org/user name.
  projectName: 'web-exam-neet', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/talentbrick/web-exam-neet/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          blogSidebarCount: 0,
          feedOptions: {
            type: null,
            copyright: `Copyright © ${new Date().getFullYear()} | Talent Brick | All Rights Reserved`,
          },
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/talentbrick/web-exam-neet/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      hideableSidebar: true,
      navbar: {
        title: 'NEET@TalentBrick',
        hideOnScroll: true,
        logo: {
          alt: 'TalentBrick NEET Preparation',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/talentbrick/web-exam-neet',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Start Learning',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://ask.talentbrick.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/pqSDdW3tuM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/talentbrick',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/talentbrick/web-exam-neet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} · <a href="https://www.talentbrick.com/" alt="TalentBrick">Talent Brick</a> · All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
