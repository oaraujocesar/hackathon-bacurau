import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fd876cb0 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _d5e09eba = () => interopDefault(import('../pages/ranking/index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _ac5cb8c6 = () => interopDefault(import('../pages/home/educacional/index.vue' /* webpackChunkName: "pages/home/educacional/index" */))
const _5c74aff0 = () => interopDefault(import('../pages/home/educacional/_id/index.vue' /* webpackChunkName: "pages/home/educacional/_id/index" */))
const _6b614588 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _fd876cb0,
    name: "home"
  }, {
    path: "/ranking",
    component: _d5e09eba,
    name: "ranking"
  }, {
    path: "/home/educacional",
    component: _ac5cb8c6,
    name: "home-educacional"
  }, {
    path: "/home/educacional/:id",
    component: _5c74aff0,
    name: "home-educacional-id"
  }, {
    path: "/",
    component: _6b614588,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
