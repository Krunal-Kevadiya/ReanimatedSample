import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme';

import StyleGuide from './StyleGuide';

export default StyleSheet.create({
  container: {
    marginRight: StyleGuide.spacing.small
  },
  image: {
    width: horizontalScale(121),
    height: verticalScale(121 * 1.67)
  },
  text: {
    marginTop: StyleGuide.spacing.tiny
  }
});
