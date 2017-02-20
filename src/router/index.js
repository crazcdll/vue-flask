import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Search from '../components/Search'
// import Hello from '../components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/search',
      component: Search
    }
  ]
})
