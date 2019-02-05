import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#3d9dff' barStyle='light-content' />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
