import { StyleSheet } from 'react-native';
import StyleGuide from './StyleGuide';
import { windowHeight, windowWidth } from '../../theme';
import { verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: -windowHeight,
    left: -windowWidth,
    width: windowWidth * 3,
    height: windowHeight * 3
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: StyleGuide.spacing.large
  },
  button: {
    borderWidth: verticalScale(2),
    borderColor: 'white',
    borderRadius: verticalScale(5),
    padding: StyleGuide.spacing.tiny,
    marginTop: StyleGuide.spacing.base
  },
  label: {
    color: 'white',
    textAlign: 'center',
    ...StyleGuide.typography.title3
  }
});
