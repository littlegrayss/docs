module.exports = {
  title: 'littlegrayss ',
  description: 'Just playing around',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [
          { text: '技术积累', link: '/accumulate/' },
          { text: '生活感悟', link: '/lifeThinking/' },
          { text: '翻译', link: '/translation/' },
          
        ]
      },
      { text: '博客', link: 'http://www.littlegrayss.com' }
    ],
    sidebar: {
      '/accumulate/': [
        
        {
          path: '/', // accumulate文件夹的README.md 不是下拉框形式
          title: '技术积累',
          children: [
            ['', 'a title'],
            '/accumulate/js/base64',
          ]
        }
      ],
      '/lifeThinking/': [],
      '/translation/': []
    },
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    smoothScroll: true
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}
