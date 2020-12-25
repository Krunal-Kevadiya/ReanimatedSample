import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './ContentStyles';

interface ButtonProps {
  color: string;
  backgroundColor: string;
  label: string;
}

const Button = ({ color, backgroundColor, label }: ButtonProps): React.ReactElement => (
  <View style={[styles.button, { backgroundColor }]}>
    <Text style={[styles.label, { color }]}>{label}</Text>
  </View>
);

export default (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.tabs}>
          <View style={styles.tabActive}>
            <Text style={styles.tabLabelActive}>Orders</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabLabel}>Trade History</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.noOrders}>You have no orders</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={styles.values}>
          <Text style={styles.value}>0 BTC</Text>
          <Text style={styles.value}>0.00 USD</Text>
        </View>
        <Button label="Buy" backgroundColor="#4AFA9A" color="#222324" />
        <Button label="Sell" backgroundColor="#E33F64" color="white" />
      </View>
    </SafeAreaView>
  );
};
