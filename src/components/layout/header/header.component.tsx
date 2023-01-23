import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import * as Styles from './header.styles';

import React from 'react';

export const Header = (props: NativeStackHeaderProps) => {
  const { top } = useSafeAreaInsets();
  return (
    <Styles.HeaderWrapper insetsTop={top}>
      <Styles.HeaderTitle>{props.options.title}</Styles.HeaderTitle>
    </Styles.HeaderWrapper>
  );
};
