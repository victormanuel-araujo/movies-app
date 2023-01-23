import { TypographyProps } from '@components/core/typography/typography.types';

import { ThemeColorNames, ThemeFontsMap, ThemeSizesMap } from '$config/theme/theme.types';
import { getThemeColor, getThemeFontFamily, getThemeFontSize } from '$config/theme/theme.utils';
import styled, { css } from 'styled-components/native';

export const TypographyStyled = styled.Text<TypographyProps>(
  ({ theme, size, weight, color }) => css`
    color: ${getThemeColor(color as ThemeColorNames)({ theme })};
    font-size: ${getThemeFontSize(size as keyof ThemeSizesMap)({ theme })};
    font-family: ${getThemeFontFamily(weight as keyof ThemeFontsMap)({ theme })};
  `,
);
