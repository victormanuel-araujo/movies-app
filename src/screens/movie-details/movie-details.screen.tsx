import { ScrollView } from 'react-native';
import { Star } from 'react-native-feather';

import { Tag } from '@components/core/tag';
import { Typography } from '@components/core/typography/typography.component';
import { PageWrapper } from '@components/layout/page-wrapper';
import { MovieDetailsContainer } from '@screens/movie-details/movie-details.container';

import { minutesToHour, toDateString } from '#utils/date.utils';

import * as Styles from './movie-details.styles';

import { getThemeColor } from '$config/theme/theme.utils';
import React from 'react';
import { useTheme } from 'styled-components/native';

export const MovieDetailsScreen = () => {
  const theme = useTheme();
  const backgroundColor = getThemeColor('background.0')({ theme });

  return (
    <PageWrapper>
      <MovieDetailsContainer>
        {({ movie, backdropImage, loading }) => (
          <ScrollView>
            <Styles.MovieBackdropWrapper>
              <Styles.MovieBackdrop source={{ uri: backdropImage as string }} resizeMode="cover" />
              <Styles.MovieBackdropGradient
                colors={[`${backgroundColor}00`, `${backgroundColor}00`, backgroundColor]}
              />
            </Styles.MovieBackdropWrapper>

            <Styles.MoviePrincipalDetailsWrapper>
              <Typography size="xl" weight="bold">
                {movie?.title}
              </Typography>

              <Typography size="sm" weight="regular">
                {movie?.overview}
              </Typography>
            </Styles.MoviePrincipalDetailsWrapper>

            <Styles.MovieDetailsSection>
              <Typography weight="bold">Genres</Typography>

              <Styles.MovieDetailsGenresWrapper>
                {movie?.genres?.map(({ name }) => (
                  <Tag key={name}>{name}</Tag>
                ))}
              </Styles.MovieDetailsGenresWrapper>
            </Styles.MovieDetailsSection>

            <Styles.MovieDetailsSection>
              <Typography weight="bold">Information</Typography>

              <Styles.MovieDetailsInformationsWrapper>
                <Styles.MovieDetailsInformationWrapper>
                  <Typography weight="medium">Release date:</Typography>
                  <Typography>
                    {movie?.release_date ? toDateString(movie?.release_date) : 'TBA'}
                  </Typography>
                </Styles.MovieDetailsInformationWrapper>

                <Styles.MovieDetailsInformationWrapper>
                  <Typography weight="medium">Duration:</Typography>
                  <Typography>{movie?.runtime ? minutesToHour(movie?.runtime) : 'TBA'}</Typography>
                </Styles.MovieDetailsInformationWrapper>

                <Styles.MovieDetailsInformationWrapper>
                  <Typography weight="medium">Status:</Typography>
                  <Typography>{movie?.status || 'TBA'}</Typography>
                </Styles.MovieDetailsInformationWrapper>
              </Styles.MovieDetailsInformationsWrapper>
            </Styles.MovieDetailsSection>

            <Styles.MovieDetailsSection>
              <Typography weight="bold">Rating</Typography>

              <Styles.MovieDetailsRatingWrapper>
                <Star width={18} height={18} stroke="yellow" fill="yellow" />

                <Typography size="md">
                  {Number(movie?.vote_average).toFixed(1)} ({movie?.vote_count})
                </Typography>
              </Styles.MovieDetailsRatingWrapper>
            </Styles.MovieDetailsSection>
          </ScrollView>
        )}
      </MovieDetailsContainer>
    </PageWrapper>
  );
};
