import { StyleSheet } from 'react-native';
import { windowWidth } from '../../theme';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
