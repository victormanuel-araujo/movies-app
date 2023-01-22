import { SafeAreaView } from 'react-native';

import * as Styles from './page-wrapper.styles';

import React, { PropsWithChildren } from 'react';

export const PageWrapper = (props: PropsWithChildren) => {
  return (
    <Styles.PageWrapperMainView>
      <SafeAreaView>{props.children}</SafeAreaView>
    </Styles.PageWrapperMainView>
  );
};
