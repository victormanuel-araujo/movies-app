import { ThemeProps } from 'styled-components/native';

type RangeBuilder<T extends number, R extends unknown[]> = R['length'] extends T
  ? R['length']
  : R['length'] | RangeBuilder<T, [T, ...R]>;

type NumberRange<T extends number> = number extends T
  ? number
  : RangeBuilder<T, []>;

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

export type ThemeAppColors = `${
  | 'background'
  | 'text'
  | 'border'}.${NumberRange<2>}`;

export type ThemeBrandingColors = `${keyof Pick<
  MoviesAppTheme['colors'],
  'primary' | 'secondary'
>}.${keyof ThemeBrandingColorMap}`;

export type ThemeExtraColors = 'white' | 'black';

export type ThemeColorNames =
  | ThemeAppColors
  | ThemeExtraColors
  | ThemeBrandingColors;

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
  };
}

type styledThemedFn = (props: ThemeProps<MoviesAppTheme>) => string;

type getThemeSpacingFnSingleArgument = (
  all: keyof ThemeSizesMap,
) => styledThemedFn;

type getThemeSpacingFnXY = (
  y: keyof ThemeSizesMap,
  x: keyof ThemeSizesMap,
) => styledThemedFn;

type getThemeSpacingFnTopXBottom = (
  top: keyof ThemeSizesMap,
  x: keyof ThemeSizesMap,
  bottom: keyof ThemeSizesMap,
) => styledThemedFn;

type getThemeSpacingFnAllSides = (
  top: keyof ThemeSizesMap,
  right: keyof ThemeSizesMap,
  bottom: keyof ThemeSizesMap,
  left: keyof ThemeSizesMap,
) => styledThemedFn;

export type getThemeSpacingFn =
  | getThemeSpacingFnSingleArgument
  | getThemeSpacingFnXY
  | getThemeSpacingFnTopXBottom
  | getThemeSpacingFnAllSides;
