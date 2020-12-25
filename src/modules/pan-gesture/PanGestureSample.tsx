import React, { useState } from 'react';
import { View, LayoutRectangle } from 'react-native';
import { PanGesture } from '../../components/pan-gesture';
import styles from './PanGestureSampleStyles';

export default (): React.ReactElement => {
  const [container, setContainer] = useState<null | LayoutRectangle>(null);
  return (
    <View style={styles.container} onLayout={({ nativeEvent: { layout } }): void => setContainer(layout)}>
      {container && <PanGesture {...container} />}
    </View>
  );
};
