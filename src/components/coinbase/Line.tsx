import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import { verticalScale } from '../../theme';

interface LineProps {
  x: number;
  y: number;
}

export default ({ x, y }: LineProps): React.ReactElement => {
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Line x1={0} y1={0} x2={x} y2={y} strokeWidth={verticalScale(2)} stroke="#B5B6B7" strokeDasharray="6 6" />
    </Svg>
  );
};
