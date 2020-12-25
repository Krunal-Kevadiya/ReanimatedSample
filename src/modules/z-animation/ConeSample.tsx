import React from 'react';
import { View } from 'react-native';
import { Background } from '../../components/common';
import { ZSvg, ZCone } from '../../components/z-animation';
import { windowWidth } from '../../theme';
import styles from './ConeSampleStyles';

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
        <ZCone r={0.35} length={0.9} base="#FFC27A" body="#45A6E5" />
      </ZSvg>
    </View>
  );
};
