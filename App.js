import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/homeScreen';
import CommentScreen from './src/screens/commentScreen';
import { Provider } from 'react-redux';
import { store } from './src/reducers';
import itemCreatingScreen from './src/screens/itemCreatingScreen';
import {
  SAYER_COMMENT,
  SAYER_HOME,
  SAYER_ITEM_CREATE
} from './src/routes';

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
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
