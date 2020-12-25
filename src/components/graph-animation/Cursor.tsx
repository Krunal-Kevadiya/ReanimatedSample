import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { interpolateNode } from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { clamp } from 'react-native-redash';
import { windowWidth } from '../../theme';
import { decay, parsePath, getPointAtLength } from 'react-native-redash/lib/module/v1';
import styles from './CursorStyles';

const { Value, event, sub } = Animated;
const TOUCH_SIZE = 200;
const white = 'white';

interface CursorProps {
  d: string;
  r: number;
  borderWidth: number;
  borderColor: string;
}

export default ({ d, r, borderWidth, borderColor }: CursorProps): React.ReactElement => {
  const radius = r + borderWidth / 2;
  const translationX = new Value(0);
  const velocityX = new Value(0);
  const state = new Value(State.UNDETERMINED);
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX,
        velocityX,
        state
      }
    }
  ]);
  const cx = clamp(decay(translationX, state, velocityX), 0, windowWidth);
  const path = parsePath(d);
  const length = interpolateNode(cx, {
    inputRange: [0, windowWidth],
    outputRange: [0, path.totalLength]
  });
  const { y, x } = getPointAtLength(path, length);
  const translateX: any = sub(x, TOUCH_SIZE / 2);
  const translateY: any = sub(y, TOUCH_SIZE / 2);
  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler onHandlerStateChange={onGestureEvent} {...{ onGestureEvent }}>
        <Animated.View
          style={[
            {
              transform: [{ translateX }, { translateY }],
              width: TOUCH_SIZE,
              height: TOUCH_SIZE
            },
            styles.container
          ]}
        >
          <View
            style={{
              width: radius * 2,
              height: radius * 2,
              borderRadius: radius,
              borderColor,
              borderWidth,
              backgroundColor: white
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
