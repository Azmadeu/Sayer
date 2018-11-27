import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './homeScreen';
import CommentScreen from './commentScreen';
import itemCreatingScreen from './itemCreatingScreen';
import {
  SAYER_COMMENT,
  SAYER_HOME,
  SAYER_ITEM_CREATE
} from '../routes';

const AppNavigator = createStackNavigator(
  {
    [SAYER_HOME]: HomeScreen,
    [SAYER_COMMENT]: CommentScreen,
    [SAYER_ITEM_CREATE]: itemCreatingScreen
  },
  {
    initialRouteName: SAYER_HOME,
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
