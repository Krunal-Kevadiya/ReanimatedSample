import React, { ReactNode } from 'react';
import { TextProps as OriginalTextProps, Text as RNText } from 'react-native';

import StyleGuide from './StyleGuide';

export interface TextProps extends OriginalTextProps {
  dark?: boolean;
  type?: keyof typeof StyleGuide['typography'];
  children: ReactNode;
}

export default ({ dark, type, style, children }: TextProps): React.ReactElement => {
  const color = dark ? 'white' : 'black';
  return <RNText style={[StyleGuide.typography[type || 'body'], { color }, style]}>{children}</RNText>;
};
