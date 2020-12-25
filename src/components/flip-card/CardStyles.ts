import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    width: horizontalScale(306),
    height: verticalScale(434)
  },
  mainView: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden'
  },
  text: {
    color: 'white',
    fontSize: moderateScale(72)
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  },
  imageView: {
    ...StyleSheet.absoluteFillObject,
    backfaceVisibility: 'hidden'
  }
});
