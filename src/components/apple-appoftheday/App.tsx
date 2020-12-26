import React, { useCallback, useRef } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, StatusBar } from 'react-native';
import Animated from 'react-native-reanimated';
import { App, Position } from './Model';
import AppThumbnail from './AppThumbnail';
import styles from './AppStyles';
import { isAndroid } from '../../theme';

const { Value, cond, eq } = Animated;
const offset = (v: number): number => (isAndroid ? v + StatusBar.currentHeight : v);

const measure = async (ref: View | Text | ScrollView): Promise<Position> =>
  new Promise((resolve) =>
    ref.measureInWindow((x, y, width, height) =>
      resolve({
        x,
        y: offset(y),
        width,
        height
      })
    )
  );

export type Apps = App[];

interface AppProps {
  app: App;
  open: (app: App, position: Position) => void;
  activeAppId: typeof Value;
}

export default ({ app, open, activeAppId }: AppProps): React.ReactElement => {
  const container = useRef();
  const handlePress = useCallback(async () => {
    const position = await measure(container.current.getNode());
    open(app, position);
  }, [app, open]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View ref={container} style={[styles.container, { opacity: cond(eq(activeAppId, app.id), 0, 1) }]}>
        <AppThumbnail {...{ app }} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
