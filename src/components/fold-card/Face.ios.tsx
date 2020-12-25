import React from 'react';
import { ImageSourcePropType, Image } from 'react-native';
import Animated, { Node, interpolateNode } from 'react-native-reanimated';
import { toRad, translateZ } from './AnimationHelpers';
import { windowWidth } from '../../theme';
import styles from './FaceStyles';

const { Extrapolate, concat, multiply, sin, abs } = Animated;
const ratio = 863 / 609;
export const CARD_WIDTH = windowWidth;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

interface NewTaskPartProps {
  scale: Node<number>;
  front: ImageSourcePropType;
  isOnTop?: boolean;
}

export default ({ scale, front, isOnTop = false }: NewTaskPartProps): React.ReactElement => {
  const perspective = CARD_HEIGHT;
  const inputRange = [0.5, 1];
  const opacity = interpolateNode(scale, {
    inputRange,
    outputRange: [isOnTop ? 0.6 : 0.5, 0],
    extrapolate: Extrapolate.CLAMP
  });
  const rotateX = interpolateNode(scale, {
    inputRange,
    outputRange: [isOnTop ? 90 : -90, 0],
    extrapolate: Extrapolate.CLAMP
  });
  const x = multiply(-CARD_HEIGHT / 2, sin(toRad(abs(rotateX))));
  return (
    <Animated.View
      style={[
        styles.absoluteFillObject,
        {
          transform: [{ perspective }, { rotateX: concat(rotateX, 'deg') }, { scale: translateZ(perspective, x) }]
        }
      ]}
    >
      <Image source={front} style={styles.image} />
      <Animated.View
        style={[
          styles.absoluteFillObject,
          styles.bgBlackView,
          {
            opacity
          }
        ]}
      />
    </Animated.View>
  );
};
