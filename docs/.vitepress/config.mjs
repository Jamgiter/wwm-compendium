import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'WWM Compendium',
  description: 'Where Winds Meet – Waffen-Guides, Boss-Strategien & Build-Optimierung',
  lang: 'de-DE',
  base: '/wwm-compendium/',

  themeConfig: {
    logo: '/wwm-compendium/logo.svg',

    nav: [
      { text: 'Start', link: '/' },
      { text: 'Waffen', link: '/waffen/', activeMatch: '/waffen/' },
      { text: 'Bosse', link: '/bosses/', activeMatch: '/bosses/' },
    ],

    sidebar: {
      '/waffen/': [
        {
          text: 'Kampfkunst-Pfade',
          items: [
            { text: 'Übersicht', link: '/waffen/' },
            { text: 'Bellstrike – Splendor', link: '/waffen/bellstrike-splendor' },
            { text: 'Bellstrike – Umbra', link: '/waffen/bellstrike-umbra' },
            { text: 'Silkbind – Deluge', link: '/waffen/silkbind-deluge' },
            { text: 'Silkbind – Jade', link: '/waffen/silkbind-jade' },
            { text: 'Bamboocut – Wind', link: '/waffen/bamboocut-wind' },
            { text: 'Bamboocut – Dust', link: '/waffen/bamboocut-dust' },
            { text: 'Stonesplit – Might', link: '/waffen/stonesplit-might' },
            { text: 'Stonesplit – Strength', link: '/waffen/stonesplit-strength' },
          ],
        },
        {
          text: 'Meta & Tipps',
          items: [
            { text: 'Tier-List', link: '/waffen/#tier-liste' },
            { text: 'Waffen-Vergleich', link: '/waffen/#waffen-vergleichstabelle' },
          ],
        },
      ],
      '/bosses/': [
        {
          text: 'Bosse',
          items: [
            { text: 'Übersicht', link: '/bosses/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thor/wwm-compendium' },
    ],

    footer: {
      message: 'Fan-Projekt zu Where Winds Meet von NetEase',
      copyright: 'MIT License',
    },

    search: {
      provider: 'local',
    },
  },
})
