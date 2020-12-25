import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { mix } from 'react-native-redash';
import { windowWidth } from '../../theme';
import styles from './TransitionsSampleStyles';
import Animated, { useAnimatedStyle, useSharedValue, useDerivedValue, withSpring } from 'react-native-reanimated';
import { Button, Card, StyleGuide, cards } from '../../components/common';

const origin = { x: -(windowWidth / 2 - StyleGuide.spacing * 2), y: 0 };

export const useSpringTransition = (state: boolean | number): Animated.SharedValue<number> => {
  const value = useSharedValue(0);
  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    value.value = typeof state === 'boolean' ? (state ? 1 : 0) : state;
  }, [state, value]);
  const transition = useDerivedValue(() => {
    return withSpring(value.value);
  });
  return transition;
};

export default (): React.ReactElement => {
  const [toggled, setToggle] = useState(false);
  const transition = useSpringTransition(toggled);
  return (
    <View style={styles.container}>
      {cards.slice(0, 3).map((card, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const style = useAnimatedStyle(() => {
          const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
          return {
            transform: [{ translateX: origin.x }, { rotate: `${rotate}rad` }, { translateX: -origin.x }]
          };
        });
        return (
          <Animated.View key={card} style={[styles.overlay, style]}>
            <Card {...{ card }} />
          </Animated.View>
        );
      })}
      <Button primary label={toggled ? 'Reset' : 'Start'} onPress={(): void => setToggle((prev) => !prev)} />
    </View>
  );
};
