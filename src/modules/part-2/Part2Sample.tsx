import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { AppRoute, Part2Route, Part2NavigatorParams } from '../../navigations';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import styles from './Part2SampleStyles';

const examples = [
  {
    screen: Part2Route.AIRBNB_INTRO,
    title: 'Airbnb Intro'
  }
];

const renderSeparator = (): React.ReactElement => {
  return <View style={styles.line} />;
};

export default (): React.ReactElement => {
  const { navigate } = useNavigation<StackNavigationProp<Part2NavigatorParams, AppRoute.HOME>>();
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
