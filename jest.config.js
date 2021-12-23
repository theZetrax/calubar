/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@calubar/(.*)': '<rootDir>/src/$1',
    '^@lib/(.*)': '<rootDir>/src/lib/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
  },
}
