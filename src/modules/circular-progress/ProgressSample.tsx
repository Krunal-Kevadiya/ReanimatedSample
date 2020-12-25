import React from 'react';
import { View } from 'react-native';
import { CircularProgress, CircularProgress2 } from '../../components/circular-progress';
import styles from './ProgressSampleStyles';
import Animated, { EasingNode } from 'react-native-reanimated';
import { runTiming } from './AnimationHelpers';

const { Clock } = Animated;

export default (): React.ReactElement => {
  const clock = new Clock();
  const config: Animated.TimingConfig = {
    duration: 10 * 1000,
    toValue: 1,
    easing: EasingNode.linear
  };

  return (
    <View style={styles.container}>
      <CircularProgress progress={runTiming(clock, 0, config)} />
      <CircularProgress2 progress={runTiming(clock, 0, config)} />
    </View>
  );
};
