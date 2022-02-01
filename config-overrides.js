const { resolve } = require('path')

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@types': resolve(__dirname, 'src/types'),
      '@components': resolve(__dirname, 'src/components'),
      '@containers': resolve(__dirname, 'src/containers'),
      '@theme': resolve(__dirname, 'src/theme'),
      '@store': resolve(__dirname, 'src/store'),
      '@stages': resolve(__dirname, 'src/stages'),
      '@sprites': resolve(__dirname, 'src/sprites'),
      '@language': resolve(__dirname, 'src/language')
    }
  }

  return config
}
