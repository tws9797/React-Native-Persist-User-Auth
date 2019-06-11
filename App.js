import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { AppNavigator } from './navigator'
import store from './store';
import { createAppContainer } from 'react-navigation'

const Navigator = createAppContainer(AppNavigator);


export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Navigator />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
