import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Animated, { useAnimatedStyle, Easing } from 'react-native-reanimated';
import { useTiming, mix } from 'react-native-redash';
import { windowWidth } from '../../theme';
import { PhoneModel } from './Phones';
import styles from './PhoneStyles';

interface PhoneProps {
  phone: PhoneModel;
  selected: boolean;
}

export default ({ phone, selected }: PhoneProps): React.ReactElement => {
  const transition = useTiming(selected, {
    duration: 600,
    easing: Easing.inOut(Easing.ease)
  });
  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: windowWidth / 2 - (windowWidth / 2) * Math.min(mix(transition.value, 0, Math.SQRT2), 1)
      },
      {
        scale: mix(transition.value, 0, Math.SQRT2)
      }
    ]
  }));
  return (
    <MaskedView style={StyleSheet.absoluteFill} maskElement={<Animated.View style={[styles.container, style]} />}>
      <Image source={phone.picture} style={styles.image} />
    </MaskedView>
  );
};
