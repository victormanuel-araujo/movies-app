import {
  getThemeColor,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeSpacing,
} from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View<{ insetsTop: number }>`
  background-color: ${getThemeColor('black')};
  padding: ${({ insetsTop, theme }) => theme.sizes.spacing.lg + insetsTop}px 0
    ${getThemeSpacing('md')};
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${getThemeColor('border.0')};
`;

export const HeaderTitle = styled.Text`
  color: ${getThemeColor('white')};
  font-size: ${getThemeFontSize('xl')};
  font-family: ${getThemeFontFamily('bold')};
`;
