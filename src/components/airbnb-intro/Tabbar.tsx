import React from 'react';
import { View, SafeAreaView } from 'react-native';

import TabIcon from './TabIcon';
import styles from './TabbarStyles';

export default (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TabIcon active label="Explore" icon="search" />
        <TabIcon label="Saved" icon="heart" />
        <TabIcon label="Trips" icon="map" />
        <TabIcon label="Inbox" icon="message-circle" />
        <TabIcon label="Profile" icon="user" />
      </View>
    </SafeAreaView>
  );
};
