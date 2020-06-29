var env = process.argv[4];
module.exports = {
  base: env == 'netlify' ? '' :'/docs/',
  title: 'littlegrayss ',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [
          { text: '技术积累', link: '/accumulation/' },
          { text: '生活感悟', link: '/lifeThinking/' },
          { text: '翻译', link: '/translation/' }
        ]
      },
      // { text: '博客', link: 'http://www.littlegrayss.com' }
    ],
    sidebar: {
      '/accumulation/': [
        '',
        {
          title: 'js',
          children: [
            '/accumulation/js/base64',
            '/accumulation/js/whiteboard-coding'
          ]
        },
        {
          title: 'DevOps',
          children: [
            '/accumulation/DevOps/cdn',
            '/accumulation/DevOps/static-webpage-deploy'
          ]
        },
        {
          title: 'FEE',
          children: [
            '/accumulation/FEE/git',
            '/accumulation/FEE/git-internals',
            '/accumulation/FEE/workflow',
            '/accumulation/FEE/web-component'
          ]
        },
        {
          title: 'demo',
          children: [
            '/accumulation/demo/qiniu-upload-chrome-extensions'
          ]
        }
      ],
      '/translation/OpenCV/': [{
        title: '目录',
        collapsable: false,
        children: [
          'chapter1'
        ]
      }]
    },
    sidebarDepth: 3, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    
    smoothScroll: true
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    ['@vuepress/google-analytics', {
      'ga': 'UA-129343486-2'
    }],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class='title'>${info}</p>`,
        after: '</div>',
        defaultTitle: '',
      }
    ],
    // ['@vuepress/medium-zoom', {
    //   selector: '.zoom-img',
    //   delay: 300,
    //   options: {
    //     margin: 48,
    //     background: '#fff',
    //     scrollOffset: 0,
    //   },
    // }],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.zoom-img',
        scaleBase: 1.4,
        customSize: null
      },
    ],
  ],
  markdown: {
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-attrs'))
    }
  }
}
