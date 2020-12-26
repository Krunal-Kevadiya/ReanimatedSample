import { StyleSheet } from 'react-native';

import StyleGuide from './StyleGuide';

export default StyleSheet.create({
  title1: {
    ...StyleGuide.typography.title1,
    paddingLeft: StyleGuide.spacing.base
  },
  title2: {
    ...StyleGuide.typography.title2,
    paddingLeft: StyleGuide.spacing.base
  },
  scrollView: {
    paddingHorizontal: StyleGuide.spacing.base,
    marginBottom: StyleGuide.spacing.base
  },
  container: {
    paddingRight: StyleGuide.spacing.base
  }
});
