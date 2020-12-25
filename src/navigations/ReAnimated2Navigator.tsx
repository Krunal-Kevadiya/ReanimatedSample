import React from 'react';
import { Text } from 'react-native';
import { horizontalScale } from '../theme';
import { ReAnimated2Route } from './AppRoute';
import { AppNavigatorParams } from './AppNavigator';
import { ZAnimationsNavigator } from './ZAnimationsNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import {
  ReAnimated2Sample,
  PanGestureSample,
  TransitionsSample,
  WorkletsSample,
  CoinbaseProSample,
  JellyScrollSample,
  MaskedSample,
  AccordionSample,
  WaveSample,
  FluidSample,
  StrokeAnimationSample
} from '../modules';

export type ReAnimated2NavigatorParams = AppNavigatorParams & {
  [ReAnimated2Route.EXAMPLES]: undefined;
  [ReAnimated2Route.WORKLETS]: undefined;
  [ReAnimated2Route.PAN_GESTURE]: undefined;
  [ReAnimated2Route.TRANSITIONS]: undefined;
  [ReAnimated2Route.CHART]: undefined;
  [ReAnimated2Route.JELLY_SCROLL]: undefined;
  [ReAnimated2Route.MASKED_VIEW]: undefined;
  [ReAnimated2Route.ACCORDION]: undefined;
  [ReAnimated2Route.WAVE]: undefined;
  [ReAnimated2Route.FLUID]: undefined;
  [ReAnimated2Route.STROKE_ANIMATION]: undefined;
  [ReAnimated2Route.Z_ANIMATIONS]: undefined;
};

const Stack = createStackNavigator<ReAnimated2NavigatorParams>();

const menuStyle = { marginLeft: horizontalScale(15) };

export const ReAnimated2Navigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={ReAnimated2Route.EXAMPLES}>
    <Stack.Screen
      name={ReAnimated2Route.EXAMPLES}
      component={ReAnimated2Sample}
      options={({ navigation }): object => ({
        title: 'Reanimated 2 Examples',
        headerLeft: (): React.ReactChild => <Text style={menuStyle} onPress={(): void => navigation.toggleDrawer()}>Menu</Text>
      })}
    />
    <Stack.Screen
      name={ReAnimated2Route.WORKLETS}
      component={WorkletsSample}
      options={{
        title: 'Worklets'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.PAN_GESTURE}
      component={PanGestureSample}
      options={{
        title: 'PanGesture'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.TRANSITIONS}
      component={TransitionsSample}
      options={{
        title: 'Transitions'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.CHART}
      component={CoinbaseProSample}
      options={{
        title: 'Coinbase'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.JELLY_SCROLL}
      component={JellyScrollSample}
      options={{
        title: 'Jelly Scroll'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.MASKED_VIEW}
      component={MaskedSample}
      options={{
        title: 'Masked View'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.ACCORDION}
      component={AccordionSample}
      options={{
        title: 'Accordion'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.WAVE}
      component={WaveSample}
      options={{
        title: 'Wave'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.FLUID}
      component={FluidSample}
      options={{
        title: 'Soft Body Fluid'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.STROKE_ANIMATION}
      component={StrokeAnimationSample}
      options={{
        title: 'Stroke Animation'
      }}
    />
    <Stack.Screen
      name={ReAnimated2Route.Z_ANIMATIONS}
      component={ZAnimationsNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
