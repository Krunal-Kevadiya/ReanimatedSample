import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: horizontalScale(16)
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: moderateScale(20),
    fontWeight: '500'
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: '#d3d3d3'
  },
  subtitleColor: {
    color: '#4AFA9A'
  },
  rightColumn: {
    flex: 1
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16)
  },
  tabContainer: {
    backgroundColor: '#222324',
    borderRadius: horizontalScale(8),
    flexDirection: 'row'
  },
  tab: {
    padding: horizontalScale(8)
  },
  tabLabel: {
    fontSize: moderateScale(14),
    fontVariant: ['tabular-nums'],
    color: '#d3d3d3'
  },
  tabLabelActive: {
    fontSize: moderateScale(14),
    fontVariant: ['tabular-nums'],
    color: 'white',
    fontWeight: '500'
  }
});
