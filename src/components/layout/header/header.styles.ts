import { getThemeColor, getThemeSpacing } from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const HeaderWrapper = styled.View<{ insetsTop: number }>`
  background-color: ${getThemeColor('black')};
  padding: ${({ insetsTop, theme }) => theme.sizes.spacing.lg + insetsTop}px
    ${getThemeSpacing('sm', 'md')};
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${getThemeColor('border.0')};
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderSideWrapper = styled.View`
  width: 32px;
  height: 32px;
`;
