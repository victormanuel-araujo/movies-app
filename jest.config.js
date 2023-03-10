module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  moduleDirectories: ['node_modules'],

  setupFilesAfterEnv: ['<rootDir>/src/config/jest/jest.setup.ts'],

  moduleNameMapper: {
    '@components/(.*)': ['<rootDir>/src/components/$1'],
    '@screens/(.*)': ['<rootDir>/src/screens/$1'],

    '&hooks/(.*)': ['<rootDir>/src/hooks/$1'],
    '&hocs/(.*)': ['<rootDir>/src/hocs/$1'],

    '$routes/(.*)': ['<rootDir>/src/routes/$1'],
    '$config/(.*)': ['<rootDir>/src/config/$1'],

    '#services/(.*)': ['<rootDir>/src/services/$1'],
    '#utils/(.*)': ['<rootDir>/src/utils/$1'],
  },

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
};
