const path = require('path')
const webpack = require('webpack')

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    path: distDir,
    filename: 'ask.js',
    library: 'ask',
    libraryTarget: 'commonjs',
  },
  devtool: 'inline-source-map',
  watch: true,
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
    new webpack.LoaderOptionsPlugin({
      debug: true,
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
