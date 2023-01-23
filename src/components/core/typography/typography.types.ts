import { TextProps } from 'react-native';

import { MoviesAppTheme, ThemeColorNames } from '$config/theme/theme.types';

export interface TypographyProps extends TextProps {
  weight?: keyof MoviesAppTheme['fonts'];
  size?: keyof MoviesAppTheme['sizes']['font'];
  color?: ThemeColorNames;
}
