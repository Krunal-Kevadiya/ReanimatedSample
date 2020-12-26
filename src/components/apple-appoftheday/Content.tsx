import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './ContentStyles';

export default (): React.ReactElement => (
  <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
        <Text style={styles.text}>Lorem ipsum</Text> dolor sit amet, consectetur adipiscing elit. Proin nec dolor
        sedenim consequat consequat.
      </Text>
      <Text style={styles.paragraph}>
        Phasellus porta risus id leo consequat fermentum. Cras sed justo ac odio malesuada malesuada.
      </Text>
    </ScrollView>
  </View>
);
