import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, runOnUI, runOnJS } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { Button } from '../../components/common';
import styles from './WorkletsSampleStyles';

const formatDatetime = (datetime: Date): string => {
  'worklet';
  return `${datetime.getFullYear()}-${
    datetime.getMonth() + 1
  }-${datetime.getDate()} ${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}`;
};

const sayHello = (text: Animated.SharedValue<string>, from: string, cb: () => void): void => {
  'worklet';
  text.value = `Hello from ${from} at ${formatDatetime(new Date())}`;
  runOnJS(cb)();
};

export default (): React.ReactElement => {
  const [jsText, setJsText] = useState('');
  const text = useSharedValue('');
  const sayHelloOnTheJSThread = (): void => setJsText(`Hello world at ${formatDatetime(new Date())}`);
  return (
    <View style={styles.container}>
      <Text>JS thread says:</Text>
      <Text>{jsText}</Text>
      <Text>UI thread says:</Text>
      <ReText {...{ text }} />
      <Button
        primary
        label="Say Hello"
        onPress={(): void => runOnUI(sayHello)(text, 'Beautiful Zuerich Switzerland', sayHelloOnTheJSThread)}
      />
    </View>
  );
};
