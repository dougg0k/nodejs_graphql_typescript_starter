module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: ['default'],
  setupFiles: ['./tests/jest.setup.ts'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(ts?)$',
  verbose: true,
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
};
