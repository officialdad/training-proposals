import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Training Proposals',
  tagline: 'Per-course shareable proposals',
  favicon: 'img/favicon.ico',

  url: 'https://officialdad.github.io',
  baseUrl: '/training-proposals/',
  organizationName: 'officialdad',
  projectName: 'training-proposals',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  noIndex: true,

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {defaultMode: 'dark', respectPrefersColorScheme: true},
    navbar: {
      title: 'Training Proposals',
      logo: {alt: 'logo', src: 'img/logo.svg'},
      items: [],
    },
    footer: {style: 'dark', copyright: `© ${new Date().getFullYear()} officialdad`},
  } satisfies Preset.ThemeConfig,
};

export default config;
