import { ActivityIndicator } from 'react-native';

import { PageWrapper } from '@components/layout/page-wrapper';
import { MovieCard } from '@screens/home/components/movie-card/movie-card.component';
import { MovieCardSkeleton } from '@screens/home/components/movie-card/movie-card.skeleton';
import { HomeContainer } from '@screens/home/home.container';

import { UpcomingMovie } from '#services/movies/movies.types';

import * as Styles from './home.styles';

import { PaginatedRequestLoading } from '&hooks/use-paginated-request/use-paginated-request.types';
import React from 'react';

export const HomeScreen = () => {
  return (
    <PageWrapper>
      <HomeContainer>
        {({ loading, movies, actions }) => (
          <Styles.HomeMoviesList
            data={
              loading === PaginatedRequestLoading.ON ? Array.from({ length: 12 }).fill(0) : movies
            }
            numColumns={2}
            keyExtractor={(item, index) => String(index)}
            onEndReached={actions.nextPage}
            ListFooterComponent={
              loading === PaginatedRequestLoading.NEXT_ITEMS && Number(movies?.length) > 0 ? (
                <Styles.MovieListEndLoaderWrapper>
                  <ActivityIndicator color="white" size="large" />
                </Styles.MovieListEndLoaderWrapper>
              ) : (
                <></>
              )
            }
            renderItem={({ index, item }) => (
              <Styles.MovieItemWrapper index={index}>
                {loading === PaginatedRequestLoading.ON ? (
                  <MovieCardSkeleton />
                ) : (
                  <MovieCard {...(item as UpcomingMovie)} />
                )}
              </Styles.MovieItemWrapper>
            )}
          />
        )}
      </HomeContainer>
    </PageWrapper>
  );
};
