import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12e98037 = () => interopDefault(import('..\\pages\\development.vue' /* webpackChunkName: "pages/development" */))
const _4870a34e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _42c0e9f8 = () => interopDefault(import('..\\pages\\entertainment.vue' /* webpackChunkName: "pages/entertainment" */))
const _ea8e087c = () => interopDefault(import('..\\pages\\fangames.vue' /* webpackChunkName: "pages/fangames" */))
const _956bc486 = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _264de0d0 = () => interopDefault(import('..\\pages\\joias\\index.vue' /* webpackChunkName: "pages/joias/index" */))
const _4430c618 = () => interopDefault(import('..\\pages\\speedrun.vue' /* webpackChunkName: "pages/speedrun" */))
const _0d875b01 = () => interopDefault(import('..\\pages\\joias\\lista.vue' /* webpackChunkName: "pages/joias/lista" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/development",
    component: _12e98037,
    name: "development___pt"
  }, {
    path: "/en",
    component: _4870a34e,
    name: "index___en"
  }, {
    path: "/entertainment",
    component: _42c0e9f8,
    name: "entertainment___pt"
  }, {
    path: "/fangames",
    component: _ea8e087c,
    name: "fangames___pt"
  }, {
    path: "/games",
    component: _956bc486,
    name: "games___pt"
  }, {
    path: "/joias",
    component: _264de0d0,
    name: "joias___pt"
  }, {
    path: "/speedrun",
    component: _4430c618,
    name: "speedrun___pt"
  }, {
    path: "/en/development",
    component: _12e98037,
    name: "development___en"
  }, {
    path: "/en/entertainment",
    component: _42c0e9f8,
    name: "entertainment___en"
  }, {
    path: "/en/fangames",
    component: _ea8e087c,
    name: "fangames___en"
  }, {
    path: "/en/games",
    component: _956bc486,
    name: "games___en"
  }, {
    path: "/en/joias",
    component: _264de0d0,
    name: "joias___en"
  }, {
    path: "/en/speedrun",
    component: _4430c618,
    name: "speedrun___en"
  }, {
    path: "/joias/lista",
    component: _0d875b01,
    name: "joias-lista___pt"
  }, {
    path: "/en/joias/lista",
    component: _0d875b01,
    name: "joias-lista___en"
  }, {
    path: "/",
    component: _4870a34e,
    name: "index___pt"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
