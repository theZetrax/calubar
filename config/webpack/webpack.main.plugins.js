const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = [
  new CopyPlugin({
    patterns: [
      path.resolve(__dirname, '..', '..', 'src', 'worker.js'),
      {
        from: path.resolve(__dirname, '..', '..', 'src', 'assets', 'icons'),
        to: path.join('assets', 'icons'),
      },
    ],
  }),
]
