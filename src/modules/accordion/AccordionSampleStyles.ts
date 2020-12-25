import { StyleSheet } from 'react-native';
import { horizontalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    padding: horizontalScale(16)
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: 'bold'
  }
});
