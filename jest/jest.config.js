module.exports = {
  rootDir: './../',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest/setup/enzyme.ts'],
  testURL: 'https://localhost',
  coverageReporters: ['json', 'html', 'cobertura', 'text-summary'],
  coverageDirectory: './jest/output',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '@common/(.*)': '<rootDir>/src/common/$1',
    '@enhancers/(.*)': '<rootDir>/src/enhancers/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  reporters: [
    'default',
    [
      'jest-trx-results-processor',
      {
        outputFile: './jest/output/JestTestResults.trx',
      },
    ],
  ],
};
