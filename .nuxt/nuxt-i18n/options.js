import locale77e03b3d from '../..\\lang\\pt.js'
import locale77427e78 from '../..\\lang\\en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"pt"},
  vueI18nLoader: false,
  locales: [{"code":"pt","iso":"pt-BR","file":"pt.js"},{"code":"en","iso":"en-US","file":"en.js"}],
  defaultLocale: "pt",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: "~/lang/",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"pt","iso":"pt-BR","file":"pt.js"},{"code":"en","iso":"en-US","file":"en.js"}],
  localeCodes: ["pt","en"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "\"",
  2: "p",
  3: "t",
  4: ".",
  5: "j",
  6: "s",
  7: "\"",
  8: ":",
  9: "\"",
  10: ".",
  11: ".",
  12: "\\",
  13: "\\",
  14: "\\",
  15: "\\",
  16: "l",
  17: "a",
  18: "n",
  19: "g",
  20: "\\",
  21: "\\",
  22: "\\",
  23: "\\",
  24: "p",
  25: "t",
  26: ".",
  27: "j",
  28: "s",
  29: "\"",
  30: ",",
  31: "\"",
  32: "e",
  33: "n",
  34: ".",
  35: "j",
  36: "s",
  37: "\"",
  38: ":",
  39: "\"",
  40: ".",
  41: ".",
  42: "\\",
  43: "\\",
  44: "\\",
  45: "\\",
  46: "l",
  47: "a",
  48: "n",
  49: "g",
  50: "\\",
  51: "\\",
  52: "\\",
  53: "\\",
  54: "e",
  55: "n",
  56: ".",
  57: "j",
  58: "s",
  59: "\"",
  60: "}",
}

export const localeMessages = {
  'pt.js': () => Promise.resolve(locale77e03b3d),
  'en.js': () => Promise.resolve(locale77427e78),
}
