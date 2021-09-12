module.exports = {
  host: '0.0.0.0',
  title: '蜂巢',
  description: '使用蜂巢快速搭建开发测试环境',
  dest: 'dist',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    ['script', { src: '/js/jquery.slim.min.js' }],
    ['script', { src: '/js/jquery.fancybox.min.js' }],
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/css/jquery.fancybox.min.css'
      }
    ],
    [
      'script',
      {
        src: '/js/simple_player.js'
      }
    ],
    [
      'script',
      {
        src: '/js/hlsPlayer.js'
      }
    ]
  ],
  themeConfig: {
    logo: '/assets/smartLogo.png',
    search: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        nav: [
         
          {
            text: '文档',
            link: '/guide/quick/introduce.md'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '运营规范',
              collapsable: true,
              children: genStandardSidebar()
            },
            {
              title: '功能简介',
              collapsable: false,
              children: genFunctionSidebar()
            },
            {
              title: '常见问题',
              collapsable: false,
              children: genQuestionSidebar()
            }
          ]
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genStandardSidebar(type = '') {
  const mapArr = [
    '/guide/quick/standardGoal.md',
    '/guide/quick/standardName.md',
    '/guide/quick/standardPrivateEnv.md',
    '/guide/quick/standardPublicEnv.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genFunctionSidebar(type = '') {
  const mapArr = [
    '/guide/quick/introduce.md',

    '/guide/quick/quickSearch.md',
    '/guide/quick/public.md',
    '/guide/quick/private.md',

    '/guide/quick/workorder.md',
    '/guide/quick/serverMonitor.md',
    '/guide/quick/apm.md',
    '/guide/quick/podMonitor.md',
    '/guide/quick/dubboAdmin.md',
    '/guide/quick/buildLog.md',
    '/guide/quick/operationLog.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genQuestionSidebar(type = '') {
  const mapArr = [
    '/guide/question/env.md',
    '/guide/question/project.md',
    '/guide/question/middle.md',
    '/guide/question/use.md',
    '/guide/question/nginx.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
