import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  table: {
    flexDirection: 'row',
    padding: horizontalScale(16)
  },
  date: {
    color: 'white',
    textAlign: 'center',
    fontSize: moderateScale(20),
    fontWeight: '500'
  },
  column: {
    flex: 1
  },
  separator: {
    width: horizontalScale(16)
  }
});
