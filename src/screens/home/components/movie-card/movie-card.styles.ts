import { getThemeColor, getThemeSpacing } from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const MovieCardWrapper = styled.View`
  border-width: 1px;
  border-radius: 8px;
  position: relative;
  border-color: ${getThemeColor('border.0')};
`;

export const MovieCardImage = styled.Image<{ width: number }>`
  width: 100%;
  border-radius: 8px;
  min-height: ${({ width }) => width * 1.5}px;
`;

export const MoviewCardRatingWrapper = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  border-radius: 8px;
  padding: ${getThemeSpacing('sm')};
  background-color: ${getThemeColor('black')}99;
  flex-direction: row;
  align-items: center;
  column-gap: ${getThemeSpacing('xs')};
`;
