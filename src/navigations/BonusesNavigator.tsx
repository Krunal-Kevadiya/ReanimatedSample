import React from 'react';
import { Text } from 'react-native';
import { horizontalScale } from '../theme';
import { AppNavigatorParams } from './AppNavigator';
import { BonusesRoute } from './AppRoute';
import { createStackNavigator } from '@react-navigation/stack';
import { BonusesSample, ProgressSample, FlipCardSample, FoldCardSample, GraphAnimationSample } from '../modules';

export type BonusesNavigatorParams = AppNavigatorParams & {
  [BonusesRoute.EXAMPLES]: undefined;
  [BonusesRoute.PROGRESS]: undefined;
  [BonusesRoute.FLIP_CARD]: undefined;
  [BonusesRoute.FOLD_CARD]: undefined;
  [BonusesRoute.GRAPH_ANIMATION]: undefined;
};

const Stack = createStackNavigator<BonusesNavigatorParams>();

const menuStyle = { marginLeft: horizontalScale(15) };

export const BonusesNavigator = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={BonusesRoute.EXAMPLES}>
    <Stack.Screen
      name={BonusesRoute.EXAMPLES}
      component={BonusesSample}
      options={({ navigation }): object => ({
        title: 'Bonuses Examples',
        headerLeft: (): React.ReactChild => <Text style={menuStyle} onPress={(): void => navigation.toggleDrawer()}>Menu</Text>
      })}
    />
    <Stack.Screen
      name={BonusesRoute.PROGRESS}
      component={ProgressSample}
      options={{
        title: 'Progress'
      }}
    />
    <Stack.Screen
      name={BonusesRoute.FLIP_CARD}
      component={FlipCardSample}
      options={{
        title: 'FlipCard'
      }}
    />
    <Stack.Screen
      name={BonusesRoute.FOLD_CARD}
      component={FoldCardSample}
      options={{
        title: 'FoldCard'
      }}
    />
    <Stack.Screen
      name={BonusesRoute.GRAPH_ANIMATION}
      component={GraphAnimationSample}
      options={{
        title: 'Graph Animation'
      }}
    />
  </Stack.Navigator>
);
