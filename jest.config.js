export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: './tsconfig.json',
      allowImportingTsExtensions: true
    }
  },
  testMatch: ['**/tests/**/*.test.ts']
};
