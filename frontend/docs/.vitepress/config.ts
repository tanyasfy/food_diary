import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Food Diary",
  description: "Small project for Campus 2024",
  themeConfig: {
    siteTitle: 'Food Diary',
    nav: [
      { text: 'Home', link: '/' },
      {text: 'Components', link: '/src/index'}, {text: 'Frontend TS', link: '/frontend/index'}, {text: 'Backend TS', link: '/backend/index'}
    ],
    // This sidebar gets displayed when a user
    // is on `components` directory.
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
