import { MovieDetails } from '#services/movies/movies.types';

export interface MovieDetailsNavigationParams {
  title: string;
  movieId: string;
}

export interface MovieDetailsScreenProps {}

export interface MovieDetailsContainerArgs {
  loading: boolean;
  movie?: MovieDetails | null;
  backdropImage: string | null;
}
