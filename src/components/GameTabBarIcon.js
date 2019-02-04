import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors.js';
import * as Animatable from 'react-native-animatable';

class GameTabBarIcon extends Component {
  render() {
    const { focused } = this.props;

    return (
      <Animatable.View
        animation='bounceIn'
        delay={400}
        style={{
          backgroundColor: focused
            ? Colors.backgroundFocusedTab
            : Colors.backgroundDefaultTab,
          borderRadius: 50,
          borderColor: focused
            ? Colors.borderTabIconFocused
            : Colors.borderTabIconDefault,
          borderWidth: 3,
          height: focused ? 100 : 80,
          width: focused ? 100 : 80,
          justifyContent: 'center'
        }}
      >
        <Icon
          name='logo-game-controller-b'
          size={focused ? 65 : 50}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: focused ? -7 : 0
          }}
          color={focused ? Colors.tabIconFocused : Colors.tabIconDefault}
        />
      </Animatable.View>
    );
  }
}

export default GameTabBarIcon;
