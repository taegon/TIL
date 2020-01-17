var CONST = require("./const");

module.exports = {
  title: `Today I Learned`,
  description: `Today I Learned generated by vuepress`,
  base: "/TIL/",
  plugins: {
    "vuepress-plugin-disqus-comment":
    {
      /* options */
      'shortname': 'taegon-TIL' 
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-97091494-1' // UA-00000000-0
    },
    '@vuepress/back-to-top': {},
    '@vuepress/last-updated': {}
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '1. Bookmarks',
        children: CONST.BookmarkList
      },{
        title: '2. Blog',
        children: CONST.BlogList
      },{
        title: '3. Python',
        children: CONST.PythonList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/taegon/'
      }, {
        text: 'Blog',
        link: 'https://code.taegon.kr/'
      }
    ]
  }
}