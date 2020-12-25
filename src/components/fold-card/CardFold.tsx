import React from 'react';
import { View, ImageSourcePropType } from 'react-native';
import Animated from 'react-native-reanimated';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import styles from './CardFoldStyles';

import { runSpring } from './AnimationHelpers';
import Face, { CARD_WIDTH, CARD_HEIGHT } from './Face';

const { event, Value, Clock, cond, eq } = Animated;

interface CardFoldProps {
  front: ImageSourcePropType;
}

export default ({ front }: CardFoldProps): React.ReactElement => {
  const clock = new Clock();
  const scaleRaw = new Value(1);
  const state = new Value(State.UNDETERMINED);
  const onGestureEvent = event([
    {
      nativeEvent: {
        scale: scaleRaw,
        state
      }
    }
  ]);
  const scale = cond(eq(state, State.END), runSpring(clock, scaleRaw, 1), scaleRaw);

  return (
    <PinchGestureHandler onHandlerStateChange={onGestureEvent} {...{ onGestureEvent }}>
      <Animated.View style={styles.container}>
        <View
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT
          }}
        >
          <Face isOnTop front={front} scale={scale} />
          <Face front={front} scale={scale} />
        </View>
      </Animated.View>
    </PinchGestureHandler>
  );
};
