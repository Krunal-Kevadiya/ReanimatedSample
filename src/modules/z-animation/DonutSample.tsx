import React from 'react';
import { View } from 'react-native';
import { ZSvg, ZEllipse, ZRect } from '../../components/z-animation';
import { windowWidth } from '../../theme';
import styles from './DonutSampleStyles';

const canvas = {
  x: windowWidth,
  y: windowWidth,
  z: windowWidth
};

const strokeWidth = 0.1;
const colors = ['#FFC27A', '#7EDAB9', '#45A6E5', '#FE8777'];

export default (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <ZSvg canvas={canvas}>
        <ZEllipse rx={0.4} ry={0.4} strokeWidth={strokeWidth} stroke={colors[2]} transform={[{ translateZ: -0.25 }]} />
        <ZRect
          fill
          width={0.8}
          height={0.8}
          strokeWidth={strokeWidth}
          stroke={colors[1]}
          transform={[{ translateZ: 0.25 }]}
        />
      </ZSvg>
    </View>
  );
};
