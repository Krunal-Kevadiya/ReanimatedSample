import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    height: horizontalScale(30),
    width: horizontalScale(30),
    borderRadius: horizontalScale(30) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#525251'
  }
});
