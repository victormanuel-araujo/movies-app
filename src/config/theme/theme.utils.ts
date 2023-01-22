import {
  getThemeSpacingFn,
  MoviesAppTheme,
  ThemeColorNames,
  ThemeFontsMap,
  ThemeSizesMap,
} from './theme.types';

import { ThemeProps } from 'styled-components/native';

export function getThemeFontSize(size: keyof ThemeSizesMap) {
  return ({ theme }: ThemeProps<MoviesAppTheme>) => {
    return `${theme.sizes.font[size]}px`;
  };
}

export const getThemeSpacing: getThemeSpacingFn =
  (value1, value2, value3, value4) =>
    ({ theme }) => {
      if (value4) {
        const [top, right, bottom, left] = [
          value1,
          value2,
          value3,
          value4,
        ] as (keyof ThemeSizesMap)[];
        return `${theme.sizes.spacing[top]}px ${theme.sizes.spacing[right]}px ${theme.sizes.spacing[bottom]}px ${theme.sizes.spacing[left]}px`;
      }

      if (value3) {
        const [top, x, bottom] = [value1, value2, value3] as (keyof ThemeSizesMap)[];
        return `${theme.sizes.spacing[top]}px ${theme.sizes.spacing[x]}px ${theme.sizes.spacing[bottom]}px`;
      }

      if (value2) {
        const [y, x] = [value1, value2] as (keyof ThemeSizesMap)[];
        return `${theme.sizes.spacing[y]}px ${theme.sizes.spacing[x]}px`;
      }

      const spacing = value1;
      return `${theme.sizes.spacing[spacing]}px`;
    };

export function getThemeFontFamily(font: keyof ThemeFontsMap) {
  return ({ theme }: ThemeProps<MoviesAppTheme>) => {
    return theme.fonts[font];
  };
}

export function getThemeColor(color: ThemeColorNames) {
  return ({ theme }: ThemeProps<MoviesAppTheme>) => {
    const requestedColor = color
      .split('.')
      .reduce((obj: Record<string, any>, index) => obj[index], theme.colors);

    return String(requestedColor);
  };
}
