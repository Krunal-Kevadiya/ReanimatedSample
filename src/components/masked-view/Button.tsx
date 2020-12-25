import React from 'react';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './ButtonStyles';

interface ButtonProps {
  backgroundColor: string;
  onPress: () => void;
}

export default ({ backgroundColor, onPress }: ButtonProps): React.ReactElement => {
  return (
    <RectButton style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.dot, { backgroundColor }]} />
      </View>
    </RectButton>
  );
};
