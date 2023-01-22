import { render } from '@testing-library/react-native';

import { theme } from '$config/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

export function renderWithTheme(children: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
