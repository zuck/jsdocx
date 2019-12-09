var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'jsdocx.js',
    library: ["jsdocx"],
    libraryTarget: "umd"
  },
  externals: [nodeExternals()],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
