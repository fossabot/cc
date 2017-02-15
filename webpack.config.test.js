const path = require('path')

const srcDir = path.resolve(__dirname, 'src')
const testDir = path.resolve(__dirname, 'test')

module.exports = {
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'isparta-instrumenter-loader',
        include: [
          srcDir,
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          srcDir,
          testDir,
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      consts: path.resolve(srcDir, 'constants'),
      utils: path.resolve(srcDir, 'utils'),
    },
  },
}
