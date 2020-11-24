module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `
        @import "@/styles/style.scss";
        `
        // @import "@/styles/_base.scss";
      }
    }
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/de','/en'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    },
    i18n: {
      locale: 'default',
      fallbackLocale: 'default',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
