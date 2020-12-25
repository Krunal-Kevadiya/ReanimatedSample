import { StyleSheet } from 'react-native';
import { windowWidth, horizontalScale } from '../../theme';

const ratio = 228 / 362;
export const CARD_WIDTH = windowWidth * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

export default StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'cyan',
    borderRadius: horizontalScale(16)
  }
});
