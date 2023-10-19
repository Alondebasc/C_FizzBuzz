import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/router/pages/HomePage.vue'
import AddBookPage from '@/router/pages/AddBookPage.vue'
import BookPage from '@/router/pages/BookPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/books/add',
      name: 'add',
      component: AddBookPage
    },
    {
      path: '/books/:id',
      name: 'books',
      component: BookPage
    }

  ]
})

export default router
