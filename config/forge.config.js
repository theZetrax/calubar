module.exports = {
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './config/webpack/webpack.main.config.js',
        renderer: {
          config: './config/webpack/webpack.renderer.config.js',
          entryPoints: [
            {
              name: 'main_window',
              html: './src/assets/index.html',
              js: './src/renderer.ts',
            },
          ],
        },
      },
    ],
  ],
  packagerConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'calubar',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
}
