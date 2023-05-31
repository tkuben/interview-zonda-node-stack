import path from 'path';
const rootDirectory = path.resolve(__dirname);

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      function: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@server(.*)$': `${rootDirectory}/src$1`,
    '@config(.*)$': `${rootDirectory}/src/config$1`,
    '@tests(.*)$': `${rootDirectory}/test$1`,
  },
  reporters: [
    'default',
    [
      path.resolve(__dirname, 'node_modules', 'jest-html-reporter'),
      {
        pageTitle: 'Demo test Report',
        outputPath: 'test-report.html',
      },
    ],
  ],
  rootDir: rootDirectory,
  roots: [rootDirectory],
  setupFilesAfterEnv: [`${rootDirectory}/test/setup.ts`],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/build',
    `${rootDirectory}/test/fixtures`,
    `${rootDirectory}/test/setup.ts`,
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: ['((/test/.*)|(\\.|/)(test|spec))\\.tsx?$'],
};
