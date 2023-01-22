import { Animated } from 'react-native';

import { SKELETON_GRADIENT_HEX_OPACITY } from './skeleton.constants';
import * as Styles from './skeleton.styles';
import { SkeletonProps } from './skeleton.types';

import { getThemeColor } from '$config/theme/theme.utils';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';

export const Skeleton = ({ color, ...props }: SkeletonProps) => {
  const theme = useTheme();
  const [animation] = React.useState(new Animated.Value(0));

  function getGradientColors() {
    const hexColor = getThemeColor(color)({ theme });
    const hexColorWithOpacity = `${hexColor}${SKELETON_GRADIENT_HEX_OPACITY}`;

    return [hexColorWithOpacity, hexColor, hexColorWithOpacity];
  }

  useEffect(() => {
    const animationLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          duration: 1500,
          useNativeDriver: false,
          toValue: 1,
        }),
        Animated.timing(animation, { duration: 0, useNativeDriver: false, toValue: 0 }),
      ]),
    );

    animationLoop.start();

    return animationLoop.stop;
  }, []);

  const animationInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-100%', '120%'],
  });

  return (
    <Styles.SkeletonWrapper {...props} testID="skeleton-wrapper">
      <Styles.SkeletonGradient
        end={{ y: 0, x: 1 }}
        start={{ y: 0, x: 0 }}
        testID="skeleton-gradient"
        colors={getGradientColors()}
        style={{ left: animationInterpolate }}
      />
    </Styles.SkeletonWrapper>
  );
};
