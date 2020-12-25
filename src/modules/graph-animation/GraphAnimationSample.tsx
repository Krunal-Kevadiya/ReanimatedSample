import React from 'react';
import { View } from 'react-native';
import { Graph } from '../../components/graph-animation';
import styles from './GraphAnimationSampleStyles';

const data = [
  { date: new Date(2018, 9, 1).getTime(), value: 0 },
  { date: new Date(2018, 9, 16).getTime(), value: 0 },
  { date: new Date(2018, 9, 17).getTime(), value: 200 },
  { date: new Date(2018, 10, 1).getTime(), value: 200 },
  { date: new Date(2018, 10, 2).getTime(), value: 300 },
  { date: new Date(2018, 10, 5).getTime(), value: 300 }
];

export default (): React.ReactElement => (
  <View style={styles.container}>
    <Graph {...{ data }} />
  </View>
);
