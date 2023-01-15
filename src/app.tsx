import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AppNavigation } from './routes/routes';
import { theme } from '$config/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
