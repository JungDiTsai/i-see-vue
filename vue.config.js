const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    // https://github.com/Akryum/vue-cli-plugin-ssr/issues/158
    const htmlSsrPlugin = config.plugins.get('html-ssr')

    if (htmlSsrPlugin) {
      htmlSsrPlugin.store.get('args')[0].chunks = []
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, 'src/styles/_variable.scss')]
    }
  }
}
