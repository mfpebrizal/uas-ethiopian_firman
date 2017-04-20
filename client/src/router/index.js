import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MainPage from '@/components/MainPage'
import ArticleForm from '@/components/ArticleForm'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: MainPage
    },
    {
      path: '/post',
      name: 'postArticle',
      component: ArticleForm
    },
    {
      path: '/list',
      name: 'listArticle',
      component: ArticleList
    }
  ]
})
