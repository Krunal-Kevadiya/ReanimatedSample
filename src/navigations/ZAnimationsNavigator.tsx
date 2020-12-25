import React from 'react';
import { AppNavigatorParams } from './AppNavigator';
import { ZAnimationsRoute } from './AppRoute';
import { createStackNavigator } from '@react-navigation/stack';
import { ZAnimationsSample, ConeSample, DonutSample, LogoSample, CubeSample } from '../modules';

export type ZAnimationsNavigatorParams = AppNavigatorParams & {
  [ZAnimationsRoute.EXAMPLES]: undefined;
  [ZAnimationsRoute.LOGO]: undefined;
  [ZAnimationsRoute.CUBE]: undefined;
  [ZAnimationsRoute.DONUT]: undefined;
  [ZAnimationsRoute.CONE]: undefined;
};

const Stack = createStackNavigator<ZAnimationsNavigatorParams>();

export const ZAnimationsNavigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={ZAnimationsRoute.EXAMPLES}>
    <Stack.Screen
      name={ZAnimationsRoute.EXAMPLES}
      component={ZAnimationsSample}
      options={{
        title: '3D Examples'
      }}
    />
    <Stack.Screen
      name={ZAnimationsRoute.LOGO}
      component={LogoSample}
      options={{
        title: '⚛️ Logo'
      }}
    />
    <Stack.Screen
      name={ZAnimationsRoute.CUBE}
      component={CubeSample}
      options={{
        title: '🧊 Cube'
      }}
    />
    <Stack.Screen
      name={ZAnimationsRoute.DONUT}
      component={DonutSample}
      options={{
        title: '🍩 Donut'
      }}
    />
    <Stack.Screen
      name={ZAnimationsRoute.CONE}
      component={ConeSample}
      options={{
        title: '📐 Cone'
      }}
    />
  </Stack.Navigator>
);
