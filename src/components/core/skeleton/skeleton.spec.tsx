import { View } from 'react-native';

import { Skeleton } from '@components/core/skeleton/skeleton.component';

import { renderWithTheme } from '#utils/jest.utils';

import React from 'react';

describe('Skeleton component', () => {
  it('should match snapshot', async () => {
    const component = renderWithTheme(
      <Skeleton height={20} width={100} color="primary.base" backgroundColor="primary.light" />,
    );

    expect(component).toMatchSnapshot();
  });

  it('should set the gradient colors correctly', async () => {
    const component = renderWithTheme(
      <Skeleton height={20} width={100} color="primary.base" backgroundColor="primary.light" />,
    );

    const skeletonGradient = await component.findByTestId('skeleton-gradient');

    expect(skeletonGradient.props.colors).toHaveLength(3);
  });

  it('should set height and width params correctly', async () => {
    const componentWithStringParams = await renderWithTheme(
      <View style={{ height: 20, width: 100 }}>
        <Skeleton height="50%" width="100%" color="primary.base" backgroundColor="primary.light" />,
      </View>,
    ).findByTestId('skeleton-wrapper');

    const componentWithNumberParams = await renderWithTheme(
      <Skeleton height={20} width={100} color="primary.base" backgroundColor="primary.light" />,
    ).findByTestId('skeleton-wrapper');

    expect(componentWithStringParams).toHaveStyle({ height: '50%', width: '100%' });
    expect(componentWithNumberParams).toHaveStyle({ height: 20, width: 100 });
  });
});

// 580142048
