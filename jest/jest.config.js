// TODO: add result processor
module.exports = {
  rootDir: './../',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testURL: 'https://localhost',
  coverageReporters: ['json', 'html', 'cobertura', 'text-summary'],
  coverageDirectory: '../output/tests',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$'
};
