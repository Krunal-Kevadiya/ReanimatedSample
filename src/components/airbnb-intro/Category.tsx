import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';

import styles from './CategoryStyles';

interface CategoryProps {
  label: string;
  image: ImageSourcePropType;
}

export default ({ label, image }: CategoryProps): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
