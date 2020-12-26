import React from 'react';
import { View, Image, ImageSourcePropType, Text } from 'react-native';

import styles from './CityCardStyles';

interface CityCardProps {
  label: string;
  image: ImageSourcePropType;
}

export default ({ image, label }: CityCardProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
