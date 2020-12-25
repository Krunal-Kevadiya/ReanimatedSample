import React from 'react';
import { Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import styles from './RowStyles';

interface RowProps {
  label: string;
  color: Animated.SharedValue<string>;
  value: Animated.SharedValue<string>;
}

export default ({ label, value, color }: RowProps): React.ReactElement => {
  const style = useAnimatedStyle(() => ({ color: color.value }));
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <ReText text={value} style={[styles.value, style]} />
    </View>
  );
};
