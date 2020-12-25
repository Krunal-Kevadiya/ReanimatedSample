import React from 'react';
import { View } from 'react-native';
import { Background } from '../../components/common';
import { ZSvg, ZBox } from '../../components/z-animation';
import { windowWidth } from '../../theme';
import styles from './CubeSampleStyles';

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
        <ZBox
          width={1.3}
          height={0.5}
          depth={0.5}
          front={'#FFC27A'}
          back={'#7EDAB9'}
          left={'#45A6E5'}
          right={'#FE8777'}
          top={'#B97EDA'}
          bottom={'#77EEFE'}
        />
      </ZSvg>
    </View>
  );
};
