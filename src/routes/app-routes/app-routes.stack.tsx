import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNamedRoutes, AppRoutesParamsList } from './app-routes.types';
import { AuthScreen } from '@screens/auth';
import { HomeScreen } from '@screens/home';

const AppStack = createNativeStackNavigator<AppRoutesParamsList>();

export function AppStackRoutes() {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={AppNamedRoutes.AUTH} component={AuthScreen} />
      <AppStack.Screen name={AppNamedRoutes.HOME} component={HomeScreen} />
    </AppStack.Navigator>
  );
}
