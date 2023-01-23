import { TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'react-native-feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Typography } from '@components/core/typography/typography.component';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import * as Styles from './header.styles';

import React from 'react';

export const Header = (props: NativeStackHeaderProps) => {
  const { top } = useSafeAreaInsets();

  return (
    <Styles.HeaderWrapper insetsTop={top}>
      <Styles.HeaderSideWrapper>
        {props.back && (
          <TouchableOpacity onPress={props.navigation.goBack} activeOpacity={0.7}>
            <ChevronLeft width={32} height={32} color="white" />
          </TouchableOpacity>
        )}
      </Styles.HeaderSideWrapper>

      <Typography color="white" size="xl" weight="bold">
        {props.options.title}
      </Typography>

      <Styles.HeaderSideWrapper />
    </Styles.HeaderWrapper>
  );
};
