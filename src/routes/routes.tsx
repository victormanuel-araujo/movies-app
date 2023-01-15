import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app-routes';

export function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
