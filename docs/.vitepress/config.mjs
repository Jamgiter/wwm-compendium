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
      { text: 'Builds', link: '/builds', activeMatch: '/builds' },
      { text: 'Ausrüstung', link: '/ausruestung', activeMatch: '/ausruestung' },
      { text: 'Bosse', link: '/bosses/', activeMatch: '/bosses/' },
      { text: 'Challenges', link: '/challenges', activeMatch: '/challenges' },
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
