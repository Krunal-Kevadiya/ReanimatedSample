import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  tabs: {
    flexDirection: 'row',
    padding: horizontalScale(8)
  },
  tabActive: {
    borderBottomWidth: verticalScale(1),
    borderColor: 'white',
    paddingBottom: verticalScale(8)
  },
  tabLabelActive: {
    color: 'white',
    fontSize: moderateScale(20)
  },
  tab: {
    borderBottomWidth: verticalScale(1),
    borderColor: '#222324',
    paddingBottom: verticalScale(8),
    flex: 1
  },
  tabLabel: {
    fontSize: moderateScale(20),
    color: '#222324',
    marginLeft: horizontalScale(16)
  },
  actions: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16),
    alignItems: 'center',
    backgroundColor: '#222324',
    borderRadius: horizontalScale(8),
    marginTop: verticalScale(5),
    padding: horizontalScale(16)
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noOrders: {
    color: '#222324',
    marginLeft: horizontalScale(4),
    fontSize: moderateScale(20)
  },
  values: {
    flex: 1
  },
  value: {
    color: 'white',
    fontSize: moderateScale(16)
  },
  button: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    margin: horizontalScale(4),
    borderRadius: horizontalScale(8)
  },
  label: {
    fontSize: moderateScale(20)
  }
});
