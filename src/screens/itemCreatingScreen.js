import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../components/header';
import { SAYER_HOME } from '../routes';

export default class ItemCreatingScreen extends Component {
  state = {
    title: 'Create new item',
  };

  render() {
    const { title } = this.state;
    return (
      <View>
        <Header
          title={title}
          navigation={this.props.navigation}
          route={SAYER_HOME}
        />
      </View>
    );
  }
}