import React from 'react';
import AppRoute from './AppRoute';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BonusesNavigator } from './BonusesNavigator';
import { ReAnimated2Navigator } from './ReAnimated2Navigator';
import { Part2Navigator } from './Part2Navigator';

type HomeDrawerNavigatorParams = {
  [AppRoute.BONUSES]: undefined;
  [AppRoute.REANIMATED_2]: undefined;
  [AppRoute.PART_1]: undefined;
  [AppRoute.PART_2]: undefined;
  [AppRoute.PART_3]: undefined;
  [AppRoute.PART_4]: undefined;
  [AppRoute.PART_5]: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator initialRouteName={AppRoute.BONUSES}>
    <Drawer.Screen name={AppRoute.BONUSES} component={BonusesNavigator} options={{ title: 'Bonuses' }} />
    <Drawer.Screen name={AppRoute.REANIMATED_2} component={ReAnimated2Navigator} options={{ title: 'ReAnimated-2' }} />
    <Drawer.Screen name={AppRoute.PART_1} component={ReAnimated2Navigator} options={{ title: 'Part-1' }} />
    <Drawer.Screen name={AppRoute.PART_2} component={Part2Navigator} options={{ title: 'Part-2' }} />
    <Drawer.Screen name={AppRoute.PART_3} component={ReAnimated2Navigator} options={{ title: 'Part-3' }} />
    <Drawer.Screen name={AppRoute.PART_4} component={ReAnimated2Navigator} options={{ title: 'Part-4' }} />
    <Drawer.Screen name={AppRoute.PART_5} component={ReAnimated2Navigator} options={{ title: 'Part-5' }} />
  </Drawer.Navigator>
);
