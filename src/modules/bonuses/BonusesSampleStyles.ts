import { StyleSheet } from 'react-native';
import { StyleGuide } from '../../components/common';
import { verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: StyleGuide.palette.background
  },
  content: {
    paddingBottom: verticalScale(32)
  },
  thumbnail: {
    backgroundColor: 'white',
    padding: StyleGuide.spacing * 2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: StyleGuide.palette.background
  },
  title: {
    ...StyleGuide.typography.headline
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.3
  }
});
