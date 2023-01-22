import { ThemeColorNames } from '$config/theme/theme.types';

export interface SkeletonProps {
  height: number | string;
  width: number | string;
  radius?: number;

  color: ThemeColorNames;
  backgroundColor: ThemeColorNames;
}
