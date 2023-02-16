const { defineConfig } = require('cypress')
const VisualRegressionPlugin = require('@frsource/cypress-plugin-visual-regression-diff/plugins')

module.exports = defineConfig({
  // env: {
  //   pluginVisualRegressionDiffConfig: {
  //     threshold: 0.03,
  //   },
  //   pluginVisualRegressionMaxDiffThreshold: 0.03,
  //   pluginVisualRegressionScreenshotConfig: {
  //     clip: {
  //       x: 0,
  //       y: 0,
  //       width: 1600,
  //       height: 9999,
  //     },
  //   },
  // },

  // e2e: {
  //   baseUrl: 'http://localhost:3000',
  //   setupNodeEvents(on, config) {
  //     VisualRegressionPlugin.initPlugin(on, config)
  //   },
  // },

  component: {
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      VisualRegressionPlugin.initPlugin(on, config)
    },
  },
})
