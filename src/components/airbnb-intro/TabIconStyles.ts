import { StyleSheet } from 'react-native';

import StyleGuide from './StyleGuide';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    ...StyleGuide.typography.micro,
    marginTop: StyleGuide.spacing.tiny
  }
});
