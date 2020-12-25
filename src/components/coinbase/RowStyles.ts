import { StyleSheet } from 'react-native';
import { moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: moderateScale(20),
    color: 'grey'
  },
  value: {
    fontSize: moderateScale(20),
    fontVariant: ['tabular-nums']
  }
});
