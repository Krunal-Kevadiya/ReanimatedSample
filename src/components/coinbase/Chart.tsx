import React from 'react';
import { Svg } from 'react-native-svg';
import { windowWidth } from '../../theme';
import Candle from './Candle';
import { STEP, CANDLES } from './ChartHelpers';

export default (): React.ReactElement => (
  <Svg width={windowWidth} height={windowWidth}>
    {CANDLES.map((candle, index) => (
      <Candle key={candle.date} width={STEP} {...{ candle, index }} />
    ))}
  </Svg>
);
