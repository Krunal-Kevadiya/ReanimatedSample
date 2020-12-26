import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Text, SafeAreaView } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import SVGPath from 'art/modes/svg/path';
import { windowHeight, windowWidth, horizontalScale } from '../../theme';
import styles from './IntroStyles';

const radius = horizontalScale(75);
const xc = (windowWidth * 3) / 2;
const yc = (windowHeight * 3) / 2;
const overlay = SVGPath()
  .moveTo(0, 0)
  .lineTo(windowWidth * 3, 0)
  .lineTo(windowWidth * 3, windowHeight * 3)
  .lineTo(0, windowHeight * 3)
  .lineTo(0, 0)
  .close()

  .moveTo(xc - radius, yc)
  .counterArcTo(xc, yc + radius, radius)
  .counterArcTo(xc + radius, yc, radius)
  .counterArcTo(xc, yc - radius, radius)
  .counterArcTo(xc - radius, yc, radius);

interface Step {
  x: number;
  y: number;
  label: string;
}

interface IntroProps {
  steps: Step[];
}

const nextStep = (x, y, steps, index, setIndex): void => {
  if (index + 1 >= steps.length) {
    setIndex(-1);
  } else {
    setIndex(index + 1);
    const step = steps[index + 1];
    Animated.parallel([
      Animated.timing(x.current, {
        toValue: step.x,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(y.current, {
        toValue: step.y,
        duration: 300,
        useNativeDriver: true
      })
    ]).start();
  }
};

export default ({ steps }: IntroProps): React.ReactElement => {
  const x = useRef(new Animated.Value(0));
  const y = useRef(new Animated.Value(0));
  const [index, setIndex] = useState(-1);

  const onPressHandle = useCallback(() => {
    nextStep(x, y, steps, index, setIndex);
  }, [index, steps, x, y]);

  useEffect(() => {
    nextStep(x, y, steps, index, setIndex);
  }, []);

  const step = steps[index];
  const translateX = Animated.add(x.current, new Animated.Value(-windowWidth / 2 + radius));
  const translateY = Animated.add(y.current, new Animated.Value(-windowHeight / 2 + radius));

  if (index === -1) {
    return null;
  }
  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX }, { translateY }]
          }
        ]}
      >
        <Svg style={StyleSheet.absoluteFill}>
          <Path d={overlay.toSVG()} fill="#00A699" opacity={0.85} />
        </Svg>
      </Animated.View>
      <View style={styles.content}>
        <SafeAreaView>
          <Text style={styles.label}>{step.label}</Text>
          <TouchableWithoutFeedback onPress={onPressHandle}>
            <View style={styles.button}>
              <Text style={styles.label}>Next</Text>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </View>
    </>
  );
};
