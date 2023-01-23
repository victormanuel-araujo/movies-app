import { View } from 'react-native';

import { RectDimensions } from './with-parent-dimensions.types';

import React, { FC, useState } from 'react';

export const withParentDimensions = (WrapperComponent: FC<any>) => {
  return (props: any) => {
    const [rect, setRect] = useState<RectDimensions>();

    return (
      <View onLayout={({ nativeEvent }) => setRect(nativeEvent.layout)}>
        <WrapperComponent {...props} rect={rect} />
      </View>
    );
  };
};
