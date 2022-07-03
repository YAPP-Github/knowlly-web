module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],

  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
    '^@page(.*)$': '<rootDir>/src/page$1',
    '^@react-query(.*)$': '<rootDir>/src/react-query$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@test-utils(.*)$': '<rootDir>/src/test-utils$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',

  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss|ts)$'],
};
