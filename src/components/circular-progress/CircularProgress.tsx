import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import Animated, { interpolateNode, Node } from 'react-native-reanimated';
import { windowWidth, horizontalScale } from '../../theme';
import styles from './CircularProgressStyles';

const { PI } = Math;
const { multiply } = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const size = windowWidth - horizontalScale(windowWidth / 3);
const strokeWidth = horizontalScale(50);
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;

interface CircularPogressProps {
  progress: Node<number>;
}

export default ({ progress }: CircularPogressProps): React.ReactElement => {
  const circumference = r * 2 * PI;
  const α = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, PI * 2]
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <Svg width={size} height={size} style={styles.container}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#f7cd46" />
          <Stop offset="1" stopColor="#ef9837" />
        </LinearGradient>
      </Defs>
      <Circle
        stroke="rgba(255, 255, 255, 0.2)"
        fill="none"
        {...{
          strokeWidth,
          cx,
          cy,
          r
        }}
      />
      <AnimatedCircle
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{
          strokeDashoffset,
          strokeWidth,
          cx,
          cy,
          r
        }}
      />
    </Svg>
  );
};
