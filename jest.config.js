module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.js',
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
    'src'
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/tests/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/mocks/image.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/tests/test-bundler.js',
  setupFiles: ['raf/polyfill', '<rootDir>/tests/enzyme-setup.js'],
  testRegex: 'src/.*\\.(test|spec)\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
