import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'NovelAI Bot',
  description: '基于 NovelAI 的画图机器人',

  themeConfig: {
    outline: [2, 3],
    sidebar: [{
      text: '指南',
      items: [
        { text: '介绍', link: '/' },
        { text: '用法', link: '/usage' },
        { text: '配置项', link: '/config' },
      ],
    }, {
      text: '进阶',
      items: [
        { text: '配置文件', link: '/advanced/config' },
        { text: '指令设置', link: '/advanced/command' },
        { text: '上下文过滤', link: '/advanced/filter' },
        { text: '自定义回复', link: '/advanced/i18n' },
        { text: '部署到公网', link: '/advanced/server' },
      ],
    }, {
      text: '更多',
      items: [
        { text: 'Koishi', link: 'https://koishi.chat' },
        { text: 'Koishi Play', link: 'https://play.koishi.chat' },
        { text: 'Prompt Wiki', link: 'https://prompt-wiki.vercel.app' },
      ],
    }],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/xfxYwmd284' },
      { icon: 'github', link: 'https://github.com/koishijs/novelai-bot' }
    ],
  
    footer: {
      message: `Released under the MIT License.`,
      copyright: 'Copyright © 2022-present Shigma & Ninzore',
    },
  },

  vite: {
    resolve: {
      dedupe: ['vue'],
    },
  },
})
