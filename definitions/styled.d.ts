// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface ThemeBrandingColorMap {
    light: string;
    base: string;
    dark: string;
  }

  export interface ThemeSizesMap {
    '2xs': number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  }

  export interface ThemeFontsMap {
    extra_thin: string;
    light: string;
    thin: string;
    regular: string;
    medium: string;
    semi_bold: string;
    bold: string;
    extra_bold: string;
    black: string;
  }

  export interface MoviesAppTheme {
    sizes: {
      spacing: ThemeSizesMap;
      font: ThemeSizesMap;
    };

    fonts: ThemeFontsMap;

    colors: {
      primary: ThemeBrandingColorMap;
      secondary: ThemeBrandingColorMap;

      text: [string, string, string];
      border: [string, string, string];
      background: [string, string, string];

      white: string;
      black: string;
      yellow: string;
    };
  }

  export interface DefaultTheme extends MoviesAppTheme {}
}
