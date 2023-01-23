import { Star } from 'react-native-feather';

import { Typography } from '@components/core/typography/typography.component';
import { TMDB_IMAGE_PATH } from '@env';
import { MovieCardSkeleton } from '@screens/home/components/movie-card/movie-card.skeleton';
import { MovieCardProps } from '@screens/home/components/movie-card/movie-card.types';

import * as Styles from './movie-card.styles';
import { MoviewCardRatingWrapper } from './movie-card.styles';

import { withParentDimensions } from '&hocs/with-parent-dimensions';
import React, { useMemo } from 'react';

const MovieCardComponent = (props: MovieCardProps) => {
  const imageURL = useMemo(() => {
    if (!props.rect?.width) return null;
    const correctWidth = props.rect.width - (props.rect.width % 100) + 100;
    return `${TMDB_IMAGE_PATH}w${correctWidth}${props.poster_path}`;
  }, [props.rect?.width]);

  if (!imageURL) return <MovieCardSkeleton />;

  return (
    <Styles.MovieCardWrapper>
      {imageURL && (
        <Styles.MovieCardImage
          resizeMode="contain"
          width={props.rect?.width || 0}
          source={{ uri: imageURL as string }}
        />
      )}

      <MoviewCardRatingWrapper>
        {Number(props.vote_count) > 0 ? (
          <>
            <Star fill="yellow" stroke="yellow" width={12} height={12} />
            <Typography color="yellow" weight="bold" size="sm">
              {Number(props.vote_average).toFixed(1)}
            </Typography>
          </>
        ) : (
          <Typography color="yellow" weight="bold" size="sm">
            New
          </Typography>
        )}
      </MoviewCardRatingWrapper>
    </Styles.MovieCardWrapper>
  );
};

export const MovieCard = withParentDimensions(MovieCardComponent);
