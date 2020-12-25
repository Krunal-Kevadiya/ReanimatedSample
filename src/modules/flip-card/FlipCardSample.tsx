import React, { useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Card } from '../../components/flip-card';
import { windowWidth, Images } from '../../theme';
import styles from './FlipCardSampleStyles';

const { Value } = Animated;

export default (): React.ReactElement => {
  const x = useRef(new Value(0)).current;
  const [card] = useState({ front: Images.front, back: Images.back });

  return (
    <View style={styles.container}>
      <Card front={card.front} back={card.back} {...{ x }} />
      <Animated.ScrollView
        horizontal
        style={StyleSheet.absoluteFillObject}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: windowWidth * 2 }}
        scrollEventThrottle={1}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { x }
            }
          }
        ])}
      />
    </View>
  );
};
