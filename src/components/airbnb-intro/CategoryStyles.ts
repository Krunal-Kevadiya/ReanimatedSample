import { StyleSheet } from 'react-native';
import StyleGuide from './StyleGuide';
import { horizontalScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    width: horizontalScale(121),
    height: verticalScale(115),
    borderRadius: verticalScale(2),
    borderWidth: 0.5,
    borderColor: '#b3b3b3',
    marginRight: StyleGuide.spacing.small
  },
  image: {
    width: horizontalScale(121),
    height: verticalScale(68),
    borderRadius: verticalScale(2)
  },
  text: {
    marginTop: StyleGuide.spacing.tiny,
    marginLeft: StyleGuide.spacing.tiny
  }
});
