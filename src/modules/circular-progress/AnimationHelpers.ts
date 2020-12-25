import Animated, { Node } from 'react-native-reanimated';

const { Value, block, cond, set, clockRunning, startClock, stopClock, timing } = Animated;

export function runTiming(
  clock: Animated.Clock,
  value: Animated.Adaptable<any>,
  config: Animated.TimingConfig
): Node<any> {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ]);
}
