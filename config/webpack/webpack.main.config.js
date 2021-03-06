const plugins = require('./webpack.main.plugins')
const path = require('path')

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: plugins,
  resolve: {
    alias: {
      '@binmanager': path.resolve('./src'),
      '@lib': path.resolve('./src/lib'),
      '@components': path.resolve('./src/components'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
}
