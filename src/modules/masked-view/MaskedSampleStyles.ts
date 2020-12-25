import { StyleSheet } from 'react-native';
import { windowWidth, horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  picture: {
    width: horizontalScale(windowWidth),
    height: horizontalScale(windowWidth)
  },
  title: {
    padding: horizontalScale(16),
    fontSize: moderateScale(24),
    lineHeight: verticalScale(30),
    textAlign: 'center'
  },
  colors: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});
