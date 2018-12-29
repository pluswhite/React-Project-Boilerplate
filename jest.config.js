module.exports = {
  collectCoverageFrom: [
    'tests/**/*.js',
    'src/**/*.js',
    '!src/store/**/*.test.js',
    '!tests/mocks/**/*.js',
    '!tests/enzyme-setup.js',
    '!tests/test-bundler.js',
  ],
  coverageThreshold: {
    // global: {
    //   statements: 98,
    //   branches: 91,
    //   functions: 98,
    //   lines: 98,
    // },
  },
  moduleDirectories: [
    'node_modules',
    'src',
    'config'
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/tests/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/image.js',
    '^cms(.*)$': '<rootDir>/src/components$1',
    '^cts(.*)$': '<rootDir>/src/containers$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^styles(.*)$': '<rootDir>/src/styles$1',
    '^cfg(.*)$': '<rootDir>/config$1',
    '^api(.*)$': '<rootDir>/config/apiConfig$1',
  },
  setupTestFrameworkScriptFile: '<rootDir>/tests/test-bundler.js',
  setupFiles: ['raf/polyfill', '<rootDir>/tests/enzyme-setup.js'],
  testRegex: 'tests/.*\\.(test|spec)\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
}
