import { getThemeSpacing } from '$config/theme/theme.utils';
import styled, { css } from 'styled-components/native';

export const HomeMoviesList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: { rowGap: theme.sizes.spacing.md },
}))`
  margin-top: ${getThemeSpacing('md')};
  padding: 0 ${getThemeSpacing('md', 'md')};
`;

export const MovieItemWrapper = styled.View<{ index: number }>(
  ({ index, theme }) => css`
    flex: 1;
    margin-right: ${index % 2 === 0 ? getThemeSpacing('sm')({ theme }) : 0};
    margin-left: ${index % 2 !== 0 ? getThemeSpacing('sm')({ theme }) : 0};
  `,
);

export const MovieListEndLoaderWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${getThemeSpacing('md')};
`;
