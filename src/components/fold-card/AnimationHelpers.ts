import Animated from 'react-native-reanimated';

const { spring, block, cond, set, clockRunning, startClock, stopClock, Value, multiply, divide, sub } = Animated;

export const toRad = (deg: Animated.Adaptable<number>): Animated.Node<number> => multiply(deg, Math.PI / 180);
export const toDeg = (rad: Animated.Adaptable<number>): Animated.Node<number> => multiply(rad, 180 / Math.PI);
export const translateZ = (
  perspective: Animated.Adaptable<number>,
  x: Animated.Adaptable<number>
): Animated.Node<number> => divide(perspective, sub(perspective, x));

export function runSpring(
  clock: Animated.Clock,
  value: Animated.Adaptable<any>,
  dest: Animated.Adaptable<any>
): Animated.Node<number> {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0)
  };

  const config = {
    damping: 20,
    mass: 1,
    stiffness: 100,
    overshootClamping: false,
    restSpeedThreshold: 1,
    restDisplacementThreshold: 0.5,
    toValue: new Value(0)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, 0),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ]);
}
