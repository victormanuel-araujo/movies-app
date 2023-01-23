import { MoviesAppTheme } from './theme.types';

const theme: MoviesAppTheme = {
  colors: {
    black: '#141414',
    white: '#FFFFFF',
    yellow: '#c4a841',

    background: ['#202020', '#272727', '#383838'],
    border: ['#383838', '#434343', '#515151'],
    text: ['#FFFFFF', '#F0F1F0', '#A8A8A8'],

    primary: {
      light: '#B98AE6',
      base: '#9443E0',
      dark: '#7334AD',
    },
    secondary: {
      light: '#A3DCE6',
      base: '#5CCCE0',
      dark: '#479EAD',
    },
  },

  fonts: {
    extra_thin: 'Montserrat-ExtraLight',
    light: 'Montserrat-Light',
    thin: 'Montserrat-Thin',
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    semi_bold: 'Montserrat-SemiBold',
    bold: 'Montserrat-Bold',
    extra_bold: 'Montserrat-ExtraBold',
    black: 'Montserrat-Black',
  },

  sizes: {
    font: {
      '2xs': 10,
      xs: 11,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
      '2xl': 22,
    },
    spacing: {
      '2xs': 2,
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      '2xl': 40,
    },
  },
};

export { theme };
