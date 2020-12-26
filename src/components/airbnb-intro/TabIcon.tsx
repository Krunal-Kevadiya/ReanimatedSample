import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './TabIconStyles';

interface TabIconProps {
  label: string;
  icon: string;
  active?: boolean;
}

export default ({ label, icon, active = false }: TabIconProps): React.ReactElement => {
  const color = active ? '#f7555c' : 'black';
  return (
    <View style={styles.container}>
      <Icon name={icon} {...{ color }} size={25} />
      <Text style={[styles.label, { color }]}>{label.toUpperCase()}</Text>
    </View>
  );
};
