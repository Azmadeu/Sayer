import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Header } from '../components/header'
import {
  SAYER_ITEM_CREATE,
  SAYER_COMMENT
} from '../routes'

class HomeContent extends React.Component {
  render() {
    return(
      <View>
      </View>
    )
  }
}

export default class HomeScreen extends Component {
  state = {
    title: 'Sayer',
    description: 'World\'s most used time waster',
    touchable: false
  };

  render() {
    const { title, touchable, description } = this.state;

    return (
      <View>
        <Header
          navigation={this.props.navigation}
          route={SAYER_ITEM_CREATE}
          title={title}
          description={description}
          touchable={touchable}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  addButtonText: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#000'
  }
});