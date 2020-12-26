import { Fonts } from '../../theme';
import { horizontalScale, verticalScale, moderateScale } from '../../theme';

const StyleGuide = {
  typography: {
    title1: {
      fontSize: moderateScale(44),
      lineHeight: verticalScale(56),
      fontFamily: Fonts.sfProDBold
    },
    title2: {
      fontSize: moderateScale(32),
      lineHeight: verticalScale(36),
      fontFamily: Fonts.sfProDLight
    },
    title3: {
      fontSize: moderateScale(24),
      lineHeight: verticalScale(28),
      fontFamily: Fonts.sfProDLight
    },
    large: {
      fontSize: moderateScale(19),
      lineHeight: verticalScale(24),
      fontFamily: Fonts.sfProDSemibold
    },
    regular: {
      fontSize: moderateScale(17),
      lineHeight: verticalScale(22),
      fontFamily: Fonts.sfProDLight
    },
    small: {
      fontSize: moderateScale(14),
      lineHeight: verticalScale(18),
      fontFamily: Fonts.sfProDLight
    },
    micro: {
      fontSize: moderateScale(8),
      lineHeight: verticalScale(8),
      fontFamily: Fonts.sfProDBold
    }
  },
  spacing: {
    tiny: horizontalScale(8),
    small: horizontalScale(16),
    base: horizontalScale(24),
    large: horizontalScale(48),
    xLarge: horizontalScale(64)
  }
};

export default StyleGuide;
