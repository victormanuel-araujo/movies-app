module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // JSX / Components path aliases
          '@components': './src/components',
          '@screens': './src/screens',

          // Hooks and HOCS
          '&hooks': './src/hooks',
          '&hocs': './src/hocs',

          // Config and top-level structure path aliases
          $routes: './src/routes',
          $config: './src/config',

          // Utils and services path aliases
          '#services': './src/services',
          '#utils': './src/utils',

        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
