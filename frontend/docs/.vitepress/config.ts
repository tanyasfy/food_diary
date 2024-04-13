import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ein kleines projekt für Campus 2024",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/' },
      {text: 'Components', link: '/src/index1'},
      {text: 'Frontend TS', link: '/frontend/index'},
      {text: 'Backend TS', link: '/backend/index'} ],
    sidebar: [
        {text: 'Build Doku', link: '/deploy' },
        {text: 'Run App local', link: '/runapp' },
      ]
  },
  
})
