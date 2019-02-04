import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Game from './../components/Game/Game';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Quiz',
    headerStyle: { backgroundColor: '#3d9dff' },
    headerTitleStyle: { color: '#fff', fontSize: 20, fontWeight: 'bold' }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Game />
      </SafeAreaView>
    );
  }
}

export default GameScreen;
