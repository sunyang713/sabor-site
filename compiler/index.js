const webpack = require('webpack')

const webpackConfig = process.env.NODE_ENV === 'production' ?
  require('./config/webpack.config.prod')
: require('./config/webpack.config.devo')

export default webpack(webpackConfig)
