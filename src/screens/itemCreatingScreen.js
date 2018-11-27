import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/header';
import { SAYER_HOME } from '../routes';

export default class ItemCreatingScreen extends Component {
  state = {
    title: 'Create new item',
    touchable: true
  };

  render() {
    const { title, touchable } = this.state;
    return (
      <View>
        <Header
          title={title}
          navigation={this.props.navigation}
          touchable={touchable}
          route={SAYER_HOME}
        />
        <Text>Create lol</Text>
      </View>
    );
  }
}