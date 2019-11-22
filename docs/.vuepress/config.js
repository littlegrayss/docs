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
          { text: '技术积累', link: '/accumulate/' },
          { text: '生活感悟', link: '/lifeThinking/' },
          { text: '翻译', link: '/translation/' }
        ]
      },
      // { text: '博客', link: 'http://www.littlegrayss.com' }
    ],
    sidebar: {
      '/accumulate/': [
        '',
        {
          title: 'js',
          children: [
            '/accumulate/js/base64'
          ]
        },
        {
          title: 'css',
          children: [
            '/accumulate/css/需求',
            '/accumulate/css/网站解析'
          ]
        },
        {
          title: 'DevOps',
          children: [
            '/accumulate/DevOps/cdn',
            '/accumulate/DevOps/静态网站部署'
          ]
        },
        {
          title: 'engineering',
          children: [
            '/accumulate/engineering/git'
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
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    smoothScroll: true
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}
