import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';
import styles from './JellyScrollSampleStyles';
import { Cards, Card } from '../../components/common';

const cards = [
  {
    index: 1,
    type: Cards.Card1
  },
  {
    index: 2,
    type: Cards.Card2
  },
  {
    index: 3,
    type: Cards.Card3
  },
  {
    index: 4,
    type: Cards.Card4
  },
  {
    index: 5,
    type: Cards.Card5
  },
  {
    index: 7,
    type: Cards.Card6
  }
];

export default (): React.ReactElement => {
  const direction = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler<{ y?: number }>({
    onEndDrag: () => {
      direction.value = 0;
    },
    onScroll: (event, ctx) => {
      const dy = event.contentOffset.y - (ctx?.y ?? 0);
      direction.value = Math.sign(dy);
      ctx.y = event.contentOffset.y;
    }
  });
  return (
    <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler}>
      {cards.map(({ type }, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const style = useAnimatedStyle(() => {
          const skewY = withSpring(interpolate(direction.value, [-1, 0, 1], [-Math.PI / 18, 0, Math.PI / 18]));
          return {
            transform: [{ skewY }]
          };
        });
        return (
          <Animated.View key={index} style={[styles.container, style]}>
            <Card card={type} />
          </Animated.View>
        );
      })}
    </Animated.ScrollView>
  );
};
