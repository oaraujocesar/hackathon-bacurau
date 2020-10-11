import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6751155c = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _6314d86f = () => interopDefault(import('../pages/ranking/index.vue' /* webpackChunkName: "pages/ranking/index" */))
const _a7a2fd5e = () => interopDefault(import('../pages/home/educacional/index.vue' /* webpackChunkName: "pages/home/educacional/index" */))
const _194259d6 = () => interopDefault(import('../pages/home/integral/index.vue' /* webpackChunkName: "pages/home/integral/index" */))
const _56fea168 = () => interopDefault(import('../pages/home/profissional/index.vue' /* webpackChunkName: "pages/home/profissional/index" */))
const _69a49316 = () => interopDefault(import('../pages/home/social/index.vue' /* webpackChunkName: "pages/home/social/index" */))
const _7a548bbc = () => interopDefault(import('../pages/home/educacional/_id/index.vue' /* webpackChunkName: "pages/home/educacional/_id/index" */))
const _29be5b80 = () => interopDefault(import('../pages/home/integral/_id/index.vue' /* webpackChunkName: "pages/home/integral/_id/index" */))
const _9ccd7792 = () => interopDefault(import('../pages/home/profissional/_id/index.vue' /* webpackChunkName: "pages/home/profissional/_id/index" */))
const _f19b99fe = () => interopDefault(import('../pages/home/social/_id/index.vue' /* webpackChunkName: "pages/home/social/_id/index" */))
const _31a1ddf0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6751155c,
    name: "home"
  }, {
    path: "/ranking",
    component: _6314d86f,
    name: "ranking"
  }, {
    path: "/home/educacional",
    component: _a7a2fd5e,
    name: "home-educacional"
  }, {
    path: "/home/integral",
    component: _194259d6,
    name: "home-integral"
  }, {
    path: "/home/profissional",
    component: _56fea168,
    name: "home-profissional"
  }, {
    path: "/home/social",
    component: _69a49316,
    name: "home-social"
  }, {
    path: "/home/educacional/:id",
    component: _7a548bbc,
    name: "home-educacional-id"
  }, {
    path: "/home/integral/:id",
    component: _29be5b80,
    name: "home-integral-id"
  }, {
    path: "/home/profissional/:id",
    component: _9ccd7792,
    name: "home-profissional-id"
  }, {
    path: "/home/social/:id",
    component: _f19b99fe,
    name: "home-social-id"
  }, {
    path: "/",
    component: _31a1ddf0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
