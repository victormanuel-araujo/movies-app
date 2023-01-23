import { UpcomingMovie } from '#services/movies/movies.types';

import { RectDimensions } from '&hocs/with-parent-dimensions';

export interface MovieCardProps extends UpcomingMovie {
  rect: RectDimensions;
}
