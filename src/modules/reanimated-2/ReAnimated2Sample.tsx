import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { AppRoute, ReAnimated2Route, ReAnimated2NavigatorParams } from '../../navigations';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styles from './ReAnimated2SampleStyles';

const examples = [
  {
    screen: ReAnimated2Route.WORKLETS,
    title: '👩‍🏭 Worklets'
  },
  {
    screen: ReAnimated2Route.PAN_GESTURE,
    title: '💳 PanGesture'
  },
  {
    screen: ReAnimated2Route.TRANSITIONS,
    title: '🔁 Transitions'
  },
  {
    screen: ReAnimated2Route.CHART,
    title: '📈 Chart'
  },
  {
    screen: ReAnimated2Route.JELLY_SCROLL,
    title: '🍩 Jelly Scroll'
  },
  {
    screen: ReAnimated2Route.MASKED_VIEW,
    title: '📱 Masked View'
  },
  {
    screen: ReAnimated2Route.ACCORDION,
    title: '🗺 Accordion'
  },
  {
    screen: ReAnimated2Route.WAVE,
    title: '🌊 Wave'
  },
  {
    screen: ReAnimated2Route.FLUID,
    title: '🍸 Fluid'
  },
  {
    screen: ReAnimated2Route.STROKE_ANIMATION,
    title: '🔠 Stroke Animations'
  },
  {
    screen: ReAnimated2Route.Z_ANIMATIONS,
    title: '⚛️ 3D Animations'
  }
];

const renderSeparator = (): React.ReactElement => {
  return <View style={styles.line} />;
};

export default (): React.ReactElement => {
  const { navigate } = useNavigation<StackNavigationProp<ReAnimated2NavigatorParams, AppRoute.HOME>>();
  const keyExtractorCallback = useCallback((item) => item.screen, []);
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <RectButton key={item.screen} onPress={(): void => navigate(item.screen)}>
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </RectButton>
      );
    },
    [navigate]
  );

  return (
    <FlatList
      style={styles.container}
      data={examples}
      renderItem={renderItem}
      keyExtractor={keyExtractorCallback}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};
