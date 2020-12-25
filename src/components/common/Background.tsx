import React from 'react';
import { Image } from 'react-native';
import { Images } from '../../theme';
import styles from './BackgroundStyles';

export default (): React.ReactElement => {
  return <Image source={Images.bg} style={styles.image} />;
};
