const path = require('path')
const webpack = require('webpack')

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    path: distDir,
    filename: 'ask.min.[hash].js',
    library: 'ask',
    libraryTarget: 'commonjs',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [
          srcDir,
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          'node_modules',
        ],
        include: [
          srcDir,
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      consts: path.resolve(srcDir, 'constants'),
      utils: path.resolve(srcDir, 'utils'),
    },
  },
}
