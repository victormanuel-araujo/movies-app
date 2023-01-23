import { Skeleton } from '@components/core/skeleton';
import { MovieCardProps } from '@screens/home/components/movie-card/movie-card.types';

import { withParentDimensions } from '&hocs/with-parent-dimensions';
import React from 'react';

const MovieCardSkeletonComponent = ({ rect }: Pick<MovieCardProps, 'rect'>) => {
  return (
    <Skeleton
      radius={8}
      width={rect?.width || 0}
      height={(rect?.width || 0) * 1.5}
      color="background.1"
      backgroundColor="background.2"
    />
  );
};

export const MovieCardSkeleton = withParentDimensions(MovieCardSkeletonComponent);
