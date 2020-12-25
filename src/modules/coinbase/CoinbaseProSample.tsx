import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { clamp } from 'react-native-redash';
import { windowWidth } from '../../theme';
import { Chart, Values, Line, Label, Content, Header, STEP } from '../../components/coinbase';

import styles from './CoinbaseProSampleStyles';

export default (): React.ReactElement => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler({
    onActive: ({ x, y }) => {
      opacity.value = 1;
      translateY.value = clamp(y, 0, windowWidth);
      translateX.value = x - (x % STEP) + STEP / 2;
    },
    onEnd: () => {
      opacity.value = 0;
    }
  });
  const horizontal = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }]
  }));
  const vertical = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateX: translateX.value }]
  }));
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Header />
          <View pointerEvents="none">
            <Values translateX={translateX} />
          </View>
        </View>
        <View>
          <Chart />
          <PanGestureHandler minDist={0} {...{ onGestureEvent }}>
            <Animated.View style={StyleSheet.absoluteFill}>
              <Animated.View style={[StyleSheet.absoluteFill, horizontal]}>
                <Line x={windowWidth} y={0} />
              </Animated.View>
              <Animated.View style={[StyleSheet.absoluteFill, vertical]}>
                <Line x={0} y={windowWidth} />
              </Animated.View>
              <Label {...{ translateY, opacity }} />
            </Animated.View>
          </PanGestureHandler>
        </View>
        <Content />
      </View>
    </ScrollView>
  );
};
