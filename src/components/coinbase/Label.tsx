import React from 'react';
import Animated, { useDerivedValue, useAnimatedStyle } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { formatUSD, scaleYInvert } from './ChartHelpers';
import styles from './LabelStyles';

interface LabelProps {
  translateY: Animated.SharedValue<number>;
  opacity: Animated.SharedValue<number>;
}

export default ({ translateY, opacity }: LabelProps): React.ReactElement => {
  const text = useDerivedValue(() => {
    const price = scaleYInvert(translateY.value);
    return formatUSD(price);
  });

  const horizontal = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }]
  }));
  return (
    <Animated.View style={[styles.container, horizontal]}>
      <ReText {...{ text }} />
    </Animated.View>
  );
};
