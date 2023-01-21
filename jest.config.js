module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  coverageDirectory: '../coverage',
  moduleDirectories: ['node_modules'],
  
  moduleNameMapper: {
    '@components/(.*)': ['<rootDir>/src/components/$1'],
    '@screens/(.*)': ['<rootDir>/src/screens/$1'],
    // Config and top-level structure path aliases
    '$routes/(.*)': ['<rootDir>/src/routes/$1'],
    '$config/(.*)': ['<rootDir>/src/config/$1'],
    // Utils and services path aliases
    '#services/(.*)': ['<rootDir>/src/services/$1'],
  },
};
