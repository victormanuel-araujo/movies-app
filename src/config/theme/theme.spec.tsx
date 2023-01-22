import { Text, View } from 'react-native';

import { renderWithTheme } from '#utils/jest.utils';

import { theme } from '$config/theme/theme';
import {
  getThemeColor,
  getThemeFontFamily,
  getThemeFontSize,
  getThemeSpacing,
} from '$config/theme/theme.utils';
import React from 'react';
import styled from 'styled-components/native';

describe('Theme utils', () => {
  it('should get the correct color on getThemeColor', () => {
    const component = renderWithTheme(
      <View testID="base-view" style={{ backgroundColor: getThemeColor('text.0')({ theme }) }} />,
    );

    expect(component.getByTestId('base-view')).toHaveStyle({
      backgroundColor: theme.colors.text[0],
    });
  });

  it('should get the correct font family on getThemeFontFamily', () => {
    const component = renderWithTheme(
      <Text testID="base-text" style={{ fontFamily: getThemeFontFamily('bold')({ theme }) }} />,
    );

    expect(component.getByTestId('base-text')).toHaveStyle({ fontFamily: theme.fonts.bold });
  });

  it('should get the correct font size on getThemeFontSize', () => {
    const TextComponent = styled.Text`
      font-size: ${getThemeFontSize('2xl')};
    `;

    const component = renderWithTheme(<TextComponent testID="base-text" />);

    expect(component.getByTestId('base-text')).toHaveStyle({ fontSize: theme.sizes.font['2xl'] });
  });

  it('should get the correct spacing values on getThemeSpacing', () => {
    const FirstComponent = styled.View`
      padding: ${getThemeSpacing('xs')};
      margin: ${getThemeSpacing('sm', 'md')};
    `;

    const SecondComponent = styled.View`
      padding: ${getThemeSpacing('sm', 'md', 'lg')};
      margin: ${getThemeSpacing('sm', 'md', 'lg', 'xl')};
    `;

    const component = renderWithTheme(
      <>
        <FirstComponent testID="first-component" />
        <SecondComponent testID="second-component" />
      </>,
    );

    const [onlyAndXYSpacingComp, topBottomXAndAllEdgesComp] = [
      component.getByTestId('first-component'),
      component.getByTestId('second-component'),
    ];

    expect(onlyAndXYSpacingComp).toHaveStyle({
      paddingTop: theme.sizes.spacing.xs,
      paddingRight: theme.sizes.spacing.xs,
      paddingBottom: theme.sizes.spacing.xs,
      paddingLeft: theme.sizes.spacing.xs,
      marginTop: theme.sizes.spacing.sm,
      marginRight: theme.sizes.spacing.md,
      marginBottom: theme.sizes.spacing.sm,
      marginLeft: theme.sizes.spacing.md,
    });

    expect(topBottomXAndAllEdgesComp).toHaveStyle({
      paddingTop: theme.sizes.spacing.sm,
      paddingRight: theme.sizes.spacing.md,
      paddingBottom: theme.sizes.spacing.lg,
      paddingLeft: theme.sizes.spacing.md,
      marginTop: theme.sizes.spacing.sm,
      marginRight: theme.sizes.spacing.md,
      marginBottom: theme.sizes.spacing.lg,
      marginLeft: theme.sizes.spacing.xl,
    });
  });
});
