import React from 'react';
import { LogBox } from 'react-native';
import { AppNavigator } from './navigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default (): React.ReactFragment => {
  LogBox.ignoreAllLogs(true);

  return (
    <React.Fragment>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </React.Fragment>
  );
};
