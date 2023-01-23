import { getThemeColor, getThemeSpacing } from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const TagWrapper = styled.View`
  padding: ${getThemeSpacing('xs', 'sm')};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${getThemeColor('border.1')};
  background-color: ${getThemeColor('background.2')};
`;
