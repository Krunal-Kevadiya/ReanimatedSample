import React from 'react';
import { Line, Rect } from 'react-native-svg';
import { horizontalScale, verticalScale } from '../../theme';
import { scaleY, scaleBody } from './ChartHelpers';

const MARGIN = horizontalScale(2);

export interface Candle {
  date: string;
  day: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandleProps {
  candle: Candle;
  index: number;
  width: number;
}

export default ({ candle, index, width }: CandleProps): React.ReactElement => {
  const { close, open, high, low } = candle;
  const fill = close > open ? '#4AFA9A' : '#E33F64';
  const x = index * width;
  const max = Math.max(open, close);
  const min = Math.min(open, close);
  return (
    <>
      <Line
        x1={x + width / 2}
        y1={scaleY(low)}
        x2={x + width / 2}
        y2={scaleY(high)}
        stroke={fill}
        strokeWidth={verticalScale(1)}
      />
      <Rect x={x + MARGIN} y={scaleY(max)} width={width - MARGIN * 2} height={scaleBody(max - min)} {...{ fill }} />
    </>
  );
};
