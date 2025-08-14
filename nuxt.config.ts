// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/i18n",
    '@vant/nuxt'
  ],
  css: ["~/assets/css/main.css", "~/assets/css/base.css"],
  postcss: {
    plugins: {
      "postcss-pxtorem": {
        rootValue: 16, // 指定转换倍率，我现在设置这个表示1rem=37.5px;
        propList: ["*"], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
        selectorBlackList: ["html"],
        mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
        exclude: "ignore",
        replace: true, // 替换包含rem的规则，而不是添加回退
        minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
        unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
      { code: "zh", name: "中文", iso: "zh-CN", file: "zh.json" },
      { code: "sr", name: "Српски", iso: "sr-RS", file: "sr.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/", // 本地语言文件目录
    strategy: "prefix", // URL 前缀策略，'prefix' 表示域名后加语言前缀，如 /en/xxx，/zh/xxx
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // 只有根路径重定向
    },
  },
  fonts: {
    families: [
      { name: 'heavy', src: '/fonts/FranklinGothicHeavyRegular.ttf', weight: 'bold' },
    ]
  }
});
