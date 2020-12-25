import React from 'react';
import Svg, { Path } from 'react-native-svg';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix, mixColor } from 'react-native-redash';
import styles from './ChevronStyles';

interface ChevronProps {
  progress: Animated.SharedValue<number>;
}

export default ({ progress }: ChevronProps): React.ReactElement => {
  const style = useAnimatedStyle(() => ({
    backgroundColor: mixColor(progress.value, '#525251', '#e45645'),
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI)}rad` }]
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6 9l6 6 6-6" />
      </Svg>
    </Animated.View>
  );
};
