import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    marginTop: verticalScale(16),
    backgroundColor: 'white',
    padding: horizontalScale(16),
    borderTopLeftRadius: horizontalScale(8),
    borderTopRightRadius: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: 'bold'
  },
  items: {
    overflow: 'hidden'
  }
});
