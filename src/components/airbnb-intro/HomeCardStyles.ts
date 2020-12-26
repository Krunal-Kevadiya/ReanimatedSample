import { StyleSheet } from 'react-native';
import StyleGuide from './StyleGuide';
import { horizontalScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    width: horizontalScale(158),
    marginRight: StyleGuide.spacing.small
  },
  imageContainer: {
    width: horizontalScale(158),
    height: verticalScale(103),
    borderRadius: verticalScale(2),
    marginBottom: StyleGuide.spacing.small,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: StyleGuide.spacing.tiny
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  },
  large: {
    marginBottom: StyleGuide.spacing.small,
    ...StyleGuide.typography.large
  },
  small: {
    marginBottom: StyleGuide.spacing.small,
    ...StyleGuide.typography.small
  },
  micro: {
    marginBottom: StyleGuide.spacing.small,
    ...StyleGuide.typography.micro
  }
});
