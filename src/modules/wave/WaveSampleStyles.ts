import { StyleSheet } from 'react-native';
import { windowWidth, horizontalScale } from '../../theme';

const SIZE = windowWidth - horizontalScale(64);
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  view: {
    backgroundColor: 'black',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2
  },
  svg: {
    backgroundColor: '#242424'
  }
});
