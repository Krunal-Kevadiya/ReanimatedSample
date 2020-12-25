import React from 'react';
import AppRoute from './AppRoute';
import { HomeNavigator } from './HomeNavigator';
import { createStackNavigator } from '@react-navigation/stack';

export type AppNavigatorParams = {
  [AppRoute.HOME]: undefined;
};

const Stack = createStackNavigator<AppNavigatorParams>();

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

export const AppNavigator = (props: Partial<StackNavigatorProps>): React.ReactElement => (
  <Stack.Navigator {...props} headerMode="none">
    <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} />
  </Stack.Navigator>
);
