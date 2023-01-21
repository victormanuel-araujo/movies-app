import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from '$config/theme';
import { AppNavigation } from '$routes/routes';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';


function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppNavigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
