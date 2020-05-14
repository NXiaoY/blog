const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8090/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
