import React, { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing
} from 'react-native-reanimated';
import styles from './WaveSampleStyles';
import { mix } from 'react-native-redash';
import { StyleGuide } from '../../components/common';
import { windowWidth, horizontalScale } from '../../theme';
import MaskedView from '@react-native-community/masked-view';

const SIZE = windowWidth - horizontalScale(64);
const AnimatedPath = Animated.createAnimatedComponent(Path);

export default (): React.ReactElement => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, [progress]);
  const data1 = useDerivedValue(() => {
    const m = mix.bind(null, progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5)
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) }
    };
  });
  const data2 = useDerivedValue(() => {
    const m = mix.bind(null, 1 - progress.value);
    return {
      from: {
        x: m(-0.1, -1),
        y: m(0.2, 0.5)
      },
      c1: { x: m(0, 0.5), y: m(0.7, 1) },
      c2: { x: m(1, 0.5), y: m(0.3, 0) },
      to: { x: m(1.1, 2), y: m(0.8, 0.5) }
    };
  });
  const path1 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data1.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`
    };
  });
  const path2 = useAnimatedProps(() => {
    const { from, c1, c2, to } = data2.value;
    return {
      d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`
    };
  });
  return (
    <View style={styles.container}>
      <MaskedView maskElement={<View style={styles.view} />}>
        <Svg width={SIZE} height={SIZE} style={styles.svg} viewBox="0 0 1 1">
          <AnimatedPath fill="#86b4ff" animatedProps={path2} />
          <AnimatedPath fill={StyleGuide.palette.primary} animatedProps={path1} />
        </Svg>
      </MaskedView>
    </View>
  );
};
