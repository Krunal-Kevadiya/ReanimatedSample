import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    padding: horizontalScale(16),
    flex: 1
  },
  paragraph: {
    fontSize: moderateScale(24),
    marginBottom: verticalScale(16)
  },
  text: { fontWeight: 'bold' }
});
