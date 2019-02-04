import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import Colors from '../constants/Colors.js';
import * as Animatable from 'react-native-animatable';

class CountriesTabBarIcon extends Component {
  render() {
    const { focused } = this.props;

    return (
      <Animatable.View
        animation='bounceIn'
        delay={800}
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
          name='md-globe'
          size={focused ? 55 : 45}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: focused ? -4 : 0
          }}
          color={focused ? Colors.tabIconFocused : Colors.tabIconDefault}
        />
      </Animatable.View>
    );
  }
}

export default CountriesTabBarIcon;
