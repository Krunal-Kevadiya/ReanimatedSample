import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';
import Animated, { interpolateNode, Node } from 'react-native-reanimated';
import { windowWidth, horizontalScale } from '../../theme';

const { PI, cos, sin } = Math;
const { multiply } = Animated;
const AnimatedPath = Animated.createAnimatedComponent(Path);

const size = windowWidth - horizontalScale(windowWidth / 3);
const strokeWidth = horizontalScale(50);
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2;
const endAngle = 2 * PI - PI * 0.2;
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

interface CircularPogressProps {
  progress: Node<number>;
}

export default ({ progress }: CircularPogressProps): React.ReactElement => {
  const circumference = r * A;
  const α = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, A]
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          <Stop offset="0" stopColor="#f7cd46" />
          <Stop offset="1" stopColor="#ef9837" />
        </LinearGradient>
      </Defs>
      <Path stroke="white" fill="none" strokeDasharray={`${circumference}, ${circumference}`} {...{ d, strokeWidth }} />
      <AnimatedPath
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ d, strokeDashoffset, strokeWidth }}
      />
    </Svg>
  );
};
