import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

const LIST_ITEM_HEIGHT = horizontalScale(54);
export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    borderBottomWidth: verticalScale(1),
    borderColor: '#f4f4f6',
    height: LIST_ITEM_HEIGHT
  },
  name: {
    fontSize: moderateScale(16)
  },
  pointsContainer: {
    borderRadius: horizontalScale(8),
    backgroundColor: '#44c282',
    padding: horizontalScale(8)
  },
  points: {
    color: 'white',
    fontWeight: 'bold'
  }
});
