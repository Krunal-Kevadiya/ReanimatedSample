import React from 'react';
import { Text, View } from 'react-native';
import { List, ListModel } from '../../components/accordion';
import styles from './AccordionSampleStyles';

const list: ListModel = {
  name: 'Total Points',
  items: [
    { name: 'Nathaniel Fitzgerald', points: '$3.45' },
    { name: 'Lawrence Fullter Fitzgerald', points: '$3.45' },
    { name: 'Jacob Mullins', points: '$3.45' },
    { name: 'Jesus Lewis', points: '$3.45' },
    { name: 'Johnny Marr', points: '$2.56' }
  ]
};

const list2: ListModel = {
  name: 'Total Points',
  items: [
    { name: 'Nathaniel Fitzgerald', points: '$3.45' },
    { name: 'Lawrence Fullter Fitzgerald', points: '$3.45' },
    { name: 'Jacob Mullins', points: '$3.45' }
  ]
};

const list3: ListModel = {
  name: 'Total Points',
  items: [
    { name: 'Nathaniel Fitzgerald', points: '$3.45' },
    { name: 'Lawrence Fullter Fitzgerald', points: '$3.45' }
  ]
};

export default (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Markets</Text>
      <List {...{ list }} />
      <List list={list2} />
      <List list={list3} />
      <List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />
    </View>
  );
};
