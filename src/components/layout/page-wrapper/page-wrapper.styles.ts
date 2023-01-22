import { getThemeColor } from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const PageWrapperMainView = styled.View`
  flex: 1;
  background-color: ${getThemeColor('background.0')};
`;
