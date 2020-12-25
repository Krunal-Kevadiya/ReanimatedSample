import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './ButtonStyles';
import StyleGuide from './StyleGuide';
import Text from './Text';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onPress: () => void;
}

export default ({ label, primary, onPress }: ButtonProps): React.ReactElement => {
  const color = primary ? 'white' : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <RectButton {...{ onPress }}>
      <SafeAreaView accessible style={{ backgroundColor }}>
        <View style={styles.container}>
          <Text type="headline" style={[styles.label, { color }]}>
            {label}
          </Text>
        </View>
      </SafeAreaView>
    </RectButton>
  );
};
