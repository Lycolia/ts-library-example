module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  roots: ['<rootDir>/src/'],
  moduleFileExtensions: ['ts', 'js'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/types/**'],
  testPathIgnorePatterns: ['(node_modules|dist)[/\\\\]'],
  transform: {
    '^.+\\.ts?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json'
      }
    ]
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  silent: false
};
