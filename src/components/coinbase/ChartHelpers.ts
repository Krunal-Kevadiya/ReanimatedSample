import { interpolate, Extrapolate } from 'react-native-reanimated';
import { round } from 'react-native-redash';
import data from './data.json';
import { Candle } from './Candle';
import { windowWidth } from '../../theme';

export const CANDLES = data.slice(0, 20) as Candle[];

//export const SIZE = windowWidth;
export const STEP = windowWidth / CANDLES.length;

export const formatUSD = (value: number): string => {
  'worklet';
  return `$ ${round(value, 2).toLocaleString('en-US', { currency: 'USD' })}`;
};

export const formatDatetime = (value: string): string => {
  'worklet';
  const d = new Date(value);
  return d.toLocaleTimeString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getDomain = (rows: Candle[]): [number, number] => {
  'worklet';
  const values = rows.map(({ high, low }) => [high, low]).flat();
  return [Math.min(...values), Math.max(...values)];
};

export const DOMAIN = getDomain(CANDLES);

export const scaleY = (value: number): number => {
  'worklet';
  return interpolate(value, DOMAIN, [windowWidth, 0], Extrapolate.CLAMP);
};

export const scaleBody = (value: number): number => {
  'worklet';
  return interpolate(value, [0, Math.max(...DOMAIN) - Math.min(...DOMAIN)], [0, windowWidth], Extrapolate.CLAMP);
};

export const scaleYInvert = (y: number): number => {
  'worklet';
  return interpolate(y, [0, windowWidth], DOMAIN.reverse(), Extrapolate.CLAMP);
};
