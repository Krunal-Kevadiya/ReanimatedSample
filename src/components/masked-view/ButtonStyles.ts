import { StyleSheet } from 'react-native';
import { windowWidth, horizontalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderRadius: horizontalScale(8)
  },
  dot: {
    width: horizontalScale(20),
    height: horizontalScale(20),
    borderRadius: horizontalScale(10)
  }
});
