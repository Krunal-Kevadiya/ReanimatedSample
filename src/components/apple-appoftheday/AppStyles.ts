import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth, horizontalScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    width: windowWidth - horizontalScale(32),
    height: windowHeight / 2,
    alignSelf: 'center',
    borderRadius: verticalScale(8),
    marginBottom: verticalScale(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  }
});
