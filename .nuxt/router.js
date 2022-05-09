import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12e98037 = () => interopDefault(import('..\\pages\\development.vue' /* webpackChunkName: "pages/development" */))
const _ea8e087c = () => interopDefault(import('..\\pages\\fangames.vue' /* webpackChunkName: "pages/fangames" */))
const _956bc486 = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _264de0d0 = () => interopDefault(import('..\\pages\\joias\\index.vue' /* webpackChunkName: "pages/joias/index" */))
const _4430c618 = () => interopDefault(import('..\\pages\\speedrun.vue' /* webpackChunkName: "pages/speedrun" */))
const _0d875b01 = () => interopDefault(import('..\\pages\\joias\\lista.vue' /* webpackChunkName: "pages/joias/lista" */))
const _4870a34e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/development",
    component: _12e98037,
    name: "development"
  }, {
    path: "/fangames",
    component: _ea8e087c,
    name: "fangames"
  }, {
    path: "/games",
    component: _956bc486,
    name: "games"
  }, {
    path: "/joias",
    component: _264de0d0,
    name: "joias"
  }, {
    path: "/speedrun",
    component: _4430c618,
    name: "speedrun"
  }, {
    path: "/joias/lista",
    component: _0d875b01,
    name: "joias-lista"
  }, {
    path: "/",
    component: _4870a34e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
