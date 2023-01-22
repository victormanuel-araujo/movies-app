import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SkeletonProps } from '@components/core/skeleton/skeleton.types';

import { getThemeColor } from '$config/theme/theme.utils';
import styled, { css } from 'styled-components/native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const SkeletonWrapper = styled.View<
  Pick<SkeletonProps, 'backgroundColor' | 'height' | 'width' | 'radius'>
>(
  ({ backgroundColor, height, width, radius, theme }) => css`
    overflow: hidden;
    position: relative;
    border-radius: ${radius}px;
    height: ${typeof height === 'number' ? `${height}px` : height};
    width: ${typeof width === 'number' ? `${width}px` : width};
    background-color: ${getThemeColor(backgroundColor)({ theme })};
  `,
);

export const SkeletonGradient = styled(AnimatedLinearGradient)`
  height: 100%;
  width: 60px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
