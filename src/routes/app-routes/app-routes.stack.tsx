import { Header } from '@components/layout/header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/home';

import { AppNamedRoutes, AppRoutesParamsList } from './app-routes.types';

import React from 'react';

const AppStack = createNativeStackNavigator<AppRoutesParamsList>();

export function AppStackRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: true, header: props => <Header {...props} /> }}>
      <AppStack.Screen
        component={HomeScreen}
        name={AppNamedRoutes.HOME}
        options={{ title: 'Movies' }}
      />
    </AppStack.Navigator>
  );
}
