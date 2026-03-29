import type { ThemeConfig } from '@/types'

export const themeConfig: ThemeConfig = {
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  site: {
    // site title
    title: 'ai77ee blog',
    // site subtitle
    subtitle: 'Writing whatever',
    // site description
    description: 'ughhhh',
    // use i18n title/subtitle/description from src/i18n/ui.ts instead of static ones above
    i18nTitle: true, // true | false
    // author name
    author: 'ai77ee',
    // site url
    url: 'https://retypeset.radishzz.cc',
    // base path
    // root directory for all pages and assets
    base: '/', // e.g., '/blog', '/docs'
    // favicon url
    // recommended formats: svg, png or ico
    favicon: '/icons/favicon.svg', // or https://example.com/favicon.svg
  },
  // SITE INFORMATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  color: {
    // default theme mode
    mode: 'auto', // light | dark | auto
    light: {
      primary: 'oklch(0.60 0.18 5)', // Un rosa "bubblegum" vibrante pero suave
      secondary: 'oklch(0.40 0.05 320)', // Un gris ciruela oscuro (más divertido que el gris normal)
      background: 'oklch(0.97 0.015 15)', // Fondo "Marshmallow" (un blanco con calidez rosa)
      highlight: 'oklch(0.85 0.15 5 / 0.3)', // Un rosa traslúcido para resaltar texto
    },
    dark: {
      primary: 'oklch(0.88 0.12 10)', // Rosa pastel brillante (fácil de leer)
      secondary: 'oklch(0.75 0.04 320)', // Gris lila claro para el texto secundario
      background: 'oklch(0.22 0.03 320)', // Fondo "Deep Grape" (un gris muy oscuro y saturado)
      highlight: 'oklch(0.88 0.12 10 / 0.2)', // Resplandor rosa sutil
    },
  },
  // COLOR SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  global: {
    // default language
    locale: 'en', // de | en | es | fr | ja | ko | pl | pt | ru | zh | zh-tw
    // more languages
    // not fill in the locale code above again, can be an empty array []
    moreLocales: ['es'], // ['de', 'en', 'es', 'fr', 'ja', 'ko', 'pl', 'pt', 'ru', 'zh', 'zh-tw']
    // post font style
    fontStyle: 'serif', // sans | serif
    // post date format
    dateFormat: 'YYYY-MM-DD', // YYYY-MM-DD | MM-DD-YYYY | DD-MM-YYYY | MMM D YYYY | D MMM YYYY
    // enable table of contents
    toc: true, // true | false
    // enable katex math rendering
    katex: true, // true | false
    // reduce motion
    reduceMotion: false, // true | false
  },
  // GLOBAL SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  comment: {
    // enable comment system
    enabled: true, // true | false
    // giscus
    // https://giscus.app/
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      envId: '',
      // version: frontend version can be changed in package.json
    },
    // waline
    // https://waline.js.org/en/
    waline: {
      // server url
      serverURL: 'https://blog-comments.ai77ee.xyz/',
      // emoji url
      emoji: [
        'https://unpkg.com/@waline/emojis@1.4.0/bmoji',
        // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
        // more emojis: https://waline.js.org/en/guide/features/emoji.html
      ],
      // gif search
      search: true, // true | false
      // image uploader
      imageUploader: false, // true | false
    },
  },
  // COMMENT SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  seo: {
    // @twitter ID
    twitterID: '@ai77ee',
    // site verification
    verification: {
      // google search console
      // https://search.google.com/search-console
      google: '',
      // bing webmaster tools
      // https://www.bing.com/webmasters
      bing: '',
      // yandex webmaster
      // https://webmaster.yandex.com
      yandex: '',
      // baidu search
      // https://ziyuan.baidu.com
      baidu: '',
    },
    // google analytics
    // https://analytics.google.com
    googleAnalyticsID: '',
    // umami analytics
    // https://cloud.umami.is
    umamiAnalyticsID: '5d7fc4f5-6e2d-4258-a472-abc9c3df7453',
    // follow verification
    // https://follow.is/
    follow: {
      // feed ID
      feedID: '',
      // user ID
      userID: '',
    },
    // apiflash access key
    // generate website screenshots for open graph images
    // get your access key at: https://apiflash.com/
    apiflashKey: '',
  },
  // SEO SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  footer: {
    // social links
    links: [
      {
        name: 'RSS',
        url: '/atom.xml', // or /rss.xml
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ai77ee',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/ai77ee',
      },
      {
        name: 'Last.fm',
        url: 'https://www.last.fm/user/aiimeee',
      },
      // {
      //   name: 'X',
      //   url: 'https://x.com/radishzz_',
      // },
    ],
    // year of website start
    startYear: 2026,
  },
  // FOOTER SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END

  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START
  preload: {
    // image hosting url
    // optimize remote images and generate low-quality placeholders
    imageHostURL: '',
    // custom google analytics js
    // for users who proxy tracking scripts to a custom domain
    // see https://gist.github.com/xiaopc/0602f06ca465d76bd9efd3dda9393738
    customGoogleAnalyticsJS: '',
    // custom umami analytics js
    // for users who self-deploy umami or proxy tracking scripts to a custom domain
    // see https://umami.is/docs/bypass-ad-blockers
    customUmamiAnalyticsJS: '',
  },
  // PRELOAD SETTINGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END
}

export const base = themeConfig.site.base === '/' ? '' : themeConfig.site.base.replace(/\/$/, '')
export const defaultLocale = themeConfig.global.locale
export const moreLocales = themeConfig.global.moreLocales
export const allLocales = [defaultLocale, ...moreLocales]
