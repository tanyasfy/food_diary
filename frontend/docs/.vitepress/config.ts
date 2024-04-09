import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ein kleines projekt für Campus 2024",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {text: 'Components', link: '/src/index'},
      {text: 'Frontend TS', link: '/frontend/index'},
      {text: 'Backend TS', link: '/backend/index'} ],

    sidebar: {
      '/src/': [
        {
          text: 'Components',
          items: [
            { text: 'UserData', link: '/src/components/UserData' }
          ]
        },
        {
        text: 'Modals',
        items: [
          { text: 'AddNewUser', link: '/src/components/modals/AddNewUser' },
          { text: 'EditInfoModal', link: '/src/components/modals/EditInfoModal' },
          { text: 'Modal', link: '/src/components/modals/modal' }
        ]
      },
      {
        text: 'Views',
        items: [
          { text: 'HomeView', link: '/src/views/HomeView' },
          { text: 'UserDetails', link: '/src/views/UserDetails' }
        ]
      }],
  }
  }
})
