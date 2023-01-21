import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/home';

import { AppNamedRoutes, AppRoutesParamsList } from './app-routes.types';

import React from 'react';

const AppStack = createNativeStackNavigator<AppRoutesParamsList>();

export function AppStackRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={AppNamedRoutes.HOME} component={HomeScreen} />
    </AppStack.Navigator>
  );
}
