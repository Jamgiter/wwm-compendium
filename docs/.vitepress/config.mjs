import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'WWM Compendium',
  appearance: 'dark',
  description: 'Where Winds Meet – Waffen-Guides, Boss-Strategien & Pfad-Optimierung',
  lang: 'de-DE',
  base: '/wwm-compendium/',

  themeConfig: {
    logo: '/wwm-compendium/logo.svg',

    nav: [
      { text: 'Start', link: '/' },
      {
        text: 'Waffen',
        items: [
          { text: 'Übersicht', link: '/waffen/' },
          { text: 'Pfade', link: '/builds' },
          { text: 'Fähigkeiten', link: '/skills' },
        ],
      },
      {
        text: 'Bosse',
        items: [
          { text: 'Übersicht', link: '/bosses/' },
          { text: 'Mini-Bosse', link: '/bosses/mini-bosse' },
          { text: 'Herausforderungen', link: '/challenges' },
        ],
      },
      { text: 'Quests', link: '/quests' },
      { text: 'Sekten', link: '/sekten' },
      {
        text: 'Items',
        items: [
          { text: 'Ausrüstung', link: '/ausruestung' },
          { text: 'Kuriositäten', link: '/kuriositaeten' },
          { text: 'Händler', link: '/haendler' },
          { text: 'Reittiere', link: '/pferde' },
          { text: 'Materialien', link: '/materialien' },
          { text: 'Housing', link: '/housing' },
        ],
      },
      {
        text: 'Info',
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Mini-Spiele', link: '/minispiele' },
          { text: 'Karten', link: '/karten' },
          { text: 'Glossar', link: '/glossar' },
          { text: 'Videos', link: '/videos' },
          { text: 'Impressum', link: '/impressum' },
        ],
      },
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
          text: 'Story-Bosse',
          items: [
            { text: 'Übersicht', link: '/bosses/' },
            { text: 'Heartseeker', link: '/bosses/heartseeker' },
            { text: 'Qianye', link: '/bosses/qianye' },
            { text: 'Ye Wanshan', link: '/bosses/ye-wanshan' },
            { text: 'The Void King', link: '/bosses/void-king' },
            { text: 'Lucky Seventeen', link: '/bosses/lucky-seventeen' },
            { text: 'Tian Ying', link: '/bosses/tian-ying' },
            { text: 'Dao Lord', link: '/bosses/dao-lord' },
            { text: 'Zheng the Frostwing', link: '/bosses/zheng-frostwing' },
            { text: 'Murong Yuan', link: '/bosses/murong-yuan' },
            { text: 'God of Avarice', link: '/bosses/god-of-avarice' },
            { text: 'River Master', link: '/bosses/river-master' },
            { text: 'Guo Xin', link: '/bosses/guo-xin' },
            { text: 'Wucan', link: '/bosses/wucan' },
            { text: 'Town Gate Roar', link: '/bosses/town-gate-roar' },
          ],
        },
        {
          text: 'Weltbosse',
          items: [
            { text: 'Qinghe-Region', link: '/bosses/weltbosse-qinghe' },
            { text: 'Kaifeng-Region', link: '/bosses/weltbosse-kaifeng' },
            { text: 'Hexi-Region', link: '/bosses/weltbosse-hexi' },
            { text: 'Liangzhou-Region', link: '/bosses/weltbosse-liangzhou' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jamgiter/wwm-compendium' },
    ],

    footer: {
      message: 'Fan-Projekt zu Where Winds Meet von NetEase | <a href="/wwm-compendium/impressum">Impressum & Datenschutz</a>',
      copyright: 'Design & Creator J.Muck — DS v4 | Hermes Agent',
    },

    search: {
      provider: 'local',
    },
  },
})
