import React from 'react';
import { View, Text, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './AppThumbnailStyles';
import { App } from './Model';
import { isAndroid, isIos } from '../../theme';

const { Value } = Animated;

interface AppThumbnailProps {
  app: App;
  borderRadius?: typeof Value;
}

export default ({ app: { source, title, subtitle }, borderRadius }: AppThumbnailProps): React.ReactElement => (
  <>
    {isAndroid && <Image style={styles.image} {...{ source }} />}
    {isIos && <Animated.Image style={[styles.image, { borderRadius: borderRadius || 8 }]} {...{ source }} />}
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </>
);
