/**
 * Auth config.
 */
const defaultConfig = {
  api_url : '',
  auth_api_url: '',
}
const devConfig = require('./api/dev') || defaultConfig
const prodConfig = require('./api/prod') || defaultConfig
const env = process.env.NODE_ENV || 'development'

const apiConfig = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  development : Object.assign({}, defaultConfig, devConfig),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production : Object.assign({}, defaultConfig, prodConfig),
}

module.exports = apiConfig[env]
