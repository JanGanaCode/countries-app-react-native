import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import CountriesTabBarIcon from '../components/CountriesTabBarIcon';
import GameTabBarIcon from '../components/GameTabBarIcon';
import CountriesScreen from '../screens/CountriesScreen';
import GameScreen from '../screens/GameScreen';

const CountriesStack = createStackNavigator({
  Countries: CountriesScreen
});

CountriesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <CountriesTabBarIcon focused={focused} />
};

const GameStack = createStackNavigator({
  Game: GameScreen
});

GameStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <GameTabBarIcon focused={focused} />
};

const BottomNavigatorConfig = {
  tabBarOptions: {
    style: {
      backgroundColor: '#3d9dff'
    },
    showLabel: false
  }
};

export default createBottomTabNavigator(
  {
    CountriesStack,
    GameStack
  },
  BottomNavigatorConfig
);
