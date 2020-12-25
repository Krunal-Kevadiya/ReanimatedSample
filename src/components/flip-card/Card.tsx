import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import Animated, { interpolateNode, useSharedValue } from 'react-native-reanimated';
import { isAndroid, isIos, windowWidth } from '../../theme';
import styles from './CardStyles';

const { concat, cond, and, greaterOrEq, lessThan } = Animated;

interface CardProps {
  front: ImageSourcePropType;
  back: ImageSourcePropType;
  x: Animated.Value<number>;
}

export default ({ front, back, x }: CardProps): React.ReactElement => {
  const perspective = useSharedValue(isIos ? 1000 : undefined);
  const rotateYAsDeg = interpolateNode(x, {
    inputRange: [0, windowWidth],
    outputRange: [0, 180]
  });
  const rotateY = concat(rotateYAsDeg, 'deg');
  const opacity = isAndroid ? cond(and(greaterOrEq(rotateYAsDeg, -90), lessThan(rotateYAsDeg, 90)), 1, 0) : 1;
  const backOpacity = isAndroid ? cond(opacity, 0, 1) : 1;
  const mainViewAnim = {
    opacity: backOpacity,
    transform: [{ perspective: perspective.value }, { rotateY: '180deg' }, { rotateY }]
  };
  const imageViewAnim = {
    opacity: opacity,
    transform: [{ perspective: perspective.value }, { rotateY }]
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.mainView, mainViewAnim]}>
        <Image source={back} style={styles.image} />
        <Text style={styles.text}>Hello</Text>
      </Animated.View>
      <Animated.View style={[styles.imageView, imageViewAnim]}>
        <Image source={front} style={styles.image} />
      </Animated.View>
    </View>
  );
};
