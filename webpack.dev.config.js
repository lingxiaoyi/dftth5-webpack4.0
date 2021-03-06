module.exports = {
  entry: require('./webpack-config/entry.config.js'),

  output: require('./webpack-config/output.config.js'),

  module: require('./webpack-config/module.dev.config.js'),

  resolve: require('./webpack-config/resolve.config.js'),

  plugins: require('./webpack-config/plugins.config.js'),

  externals: require('./webpack-config/externals.config.js'),

  devServer: require('./webpack-config/vendor/devServer.config.js'),

  mode: 'development',

  optimization: require('./webpack-config/optimization.js')
};
