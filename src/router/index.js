import Vue from 'vue'
import Router from 'vue-router'
import promises from '../components/promises/promises'
import friends from '../components/friends/friends'
import loan from '../components/loan/loan'
import moneybag from '../components/moneybag/moneybag'
import infoman from '../components/infoman/infoman'
import outman from '../components/outman/outman'

Vue.use(Router)
const routes = [{
  path: '/',
  redirect: '/promises'
}, {
  path: '/promises',
  component: promises,
  children: [{
    path: '/',
    redirect: '/promises/infoman'
  }, {
    path: '/promises/infoman',
    component: infoman
  }, {
    path: 'outman',
    component: outman
  }]
}, {
  path: '/friends',
  component: friends
}, {
  path: '/loan',
  component: loan
}, {
  path: '/moneybag',
  component: moneybag
}]
export default new Router({
  linkActiveClass: 'active',
  routes
})


