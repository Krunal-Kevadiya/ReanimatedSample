import { StyleSheet } from 'react-native';
import { windowWidth } from '../../theme';

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    width: undefined,
    height: undefined,
    borderRadius: windowWidth / 2
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});
