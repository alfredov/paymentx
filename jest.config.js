const config = require('kcd-scripts/jest')

module.exports = {
  ...config,
  // we have no coverageThreshold on this project...
  coverageThreshold: {},
  testMatch: [
    '**/*.tests.ts*',
  ],
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/packages/',
  ],
}
