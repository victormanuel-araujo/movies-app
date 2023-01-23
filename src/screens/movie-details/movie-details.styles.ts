import LinearGradient from 'react-native-linear-gradient';

import { getThemeColor, getThemeSpacing } from '$config/theme/theme.utils';
import styled from 'styled-components/native';

export const MovieBackdropWrapper = styled.View`
  position: relative;
`;

export const MovieBackdropGradient = styled(LinearGradient)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const MovieBackdrop = styled.Image`
  width: 100%;
  height: 200px;
`;

export const MoviePrincipalDetailsWrapper = styled.View`
  top: -10px;
  position: relative;
  row-gap: ${getThemeSpacing('sm')};
  padding: ${getThemeSpacing('xs', 'md')};
`;

export const MovieDetailsSection = styled.View`
  border-color: ${getThemeColor('border.0')};
  border-top-width: 1px;
  padding: ${getThemeSpacing('md')};
  margin-top: ${getThemeSpacing('sm')};
`;

export const MovieDetailsGenresWrapper = styled.View`
  margin-top: ${getThemeSpacing('md')};
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: ${getThemeSpacing('sm')};
  row-gap: ${getThemeSpacing('sm')};
`;

export const MovieDetailsRatingWrapper = styled.View`
  margin-top: ${getThemeSpacing('md')};
  flex-direction: row;
  align-items: center;
  column-gap: ${getThemeSpacing('sm')};
`;

export const MovieDetailsInformationsWrapper = styled.View`
  flex-direction: column;
  margin-top: ${getThemeSpacing('md')};
  row-gap: ${getThemeSpacing('sm')};
`;

export const MovieDetailsInformationWrapper = styled.View`
  flex-direction: row;
  column-gap: ${getThemeSpacing('xs')};
`;
