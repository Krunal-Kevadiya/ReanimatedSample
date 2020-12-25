import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './HeaderStyles';

const Tabs = ({ tabs }: { tabs: string[] }): React.ReactElement => (
  <View style={styles.tabContainer}>
    {tabs.map((tab, index) => (
      <View style={styles.tab} key={index}>
        <Text style={index === 0 ? styles.tabLabelActive : styles.tabLabel}>{tab.toUpperCase()}</Text>
      </View>
    ))}
  </View>
);

export default (): React.ReactElement => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.rightColumn}>
              <Text style={styles.title}>BTC - USD</Text>
              <Text style={styles.subtitle}>2.2k BTC 24hr vol</Text>
            </View>
            <View style={styles.leftColumn}>
              <Text style={styles.title}>$7,543.12</Text>
              <Text style={[styles.subtitle, styles.subtitleColor]}>+5.11%</Text>
            </View>
          </View>
          <View style={styles.tabs}>
            <Tabs tabs={['Price', 'Depth', 'Book']} />
            <Tabs tabs={['1D']} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
