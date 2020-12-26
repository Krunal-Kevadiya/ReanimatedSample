import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8'
  },
  content: {
    flexDirection: 'row',
    height: verticalScale(64),
    borderTopWidth: verticalScale(1),
    borderColor: '#d6d6d6'
  }
});
