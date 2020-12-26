import { StyleSheet, StatusBar } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFillObject,
    padding: horizontalScale(16),
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontSize: moderateScale(34),
    lineHeight: verticalScale(41),
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontSize: moderateScale(18)
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});
