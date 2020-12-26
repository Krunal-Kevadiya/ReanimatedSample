import React from 'react';
import { Text } from 'react-native';
import { horizontalScale } from '../theme';
import { Part2Route } from './AppRoute';
import { AppNavigatorParams } from './AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Part2Sample,
  AirbnbIntroSample,
} from '../modules';

export type Part2NavigatorParams = AppNavigatorParams & {
  [Part2Route.EXAMPLES]: undefined;
  [Part2Route.AIRBNB_INTRO]: undefined;
};

const Stack = createStackNavigator<Part2NavigatorParams>();

const menuStyle = { marginLeft: horizontalScale(15) };

export const Part2Navigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={Part2Route.EXAMPLES}>
    <Stack.Screen
      name={Part2Route.EXAMPLES}
      component={Part2Sample}
      options={({ navigation }): object => ({
        title: 'Part 2 Examples',
        headerLeft: (): React.ReactChild => <Text style={menuStyle} onPress={(): void => navigation.toggleDrawer()}>Menu</Text>
      })}
    />
    <Stack.Screen
      name={Part2Route.AIRBNB_INTRO}
      component={AirbnbIntroSample}
      options={{
        title: 'Airbnb Intro'
      }}
    />
  </Stack.Navigator>
);
