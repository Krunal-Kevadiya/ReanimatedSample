import React from 'react';
import { View } from 'react-native';
import { Background } from '../../components/common';
import { ReactLogo, ZSvg } from '../../components/z-animation';
import { windowWidth } from '../../theme';
import styles from './LogoSampleStyles';

const canvas = {
  x: windowWidth,
  y: windowWidth,
  z: windowWidth
};

export default (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Background />
      <ZSvg canvas={canvas}>
        <ReactLogo />
      </ZSvg>
    </View>
  );
};
