/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@binmanager/(.*)': '<rootDir>/src/$1',
    '^@lib/(.*)': '<rootDir>/src/lib/$1',
  },
}
