import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme';

export default StyleSheet.create({
  container: {
    width: horizontalScale(100),
    alignSelf: 'flex-end',
    backgroundColor: '#FEFFFF',
    borderRadius: horizontalScale(4),
    padding: horizontalScale(4),
    marginTop: verticalScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
