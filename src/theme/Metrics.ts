import { Dimensions, NativeModules, Platform } from 'react-native';
const { StatusBarManager } = NativeModules;

const { width, height } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number): number => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5): number => size + (horizontalScale(size) - size) * factor;

const StatusBarHeight: number = Platform.OS === 'ios' ? 0 : StatusBarManager.HEIGHT;

export {
  width as windowWidth,
  height as windowHeight,
  isAndroid,
  isIos,
  horizontalScale,
  verticalScale,
  moderateScale,
  StatusBarHeight
};
