import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addItem } from '../actions';
import { Header } from '../components/header';
import { SAYER_HOME } from '../routes';
import { connect } from "react-redux";

class SayerItemCreate extends Component {
  state = {
    header: 'Create new item',
    itemTitle: ''
  };

  onChange = text => {
    this.setState({ itemTitle: text })
  };

  onClick = () => {
    const { addItem, navigation } = this.props;

    if (this.state.itemTitle) {
      addItem(this.state.itemTitle);

      navigation.navigate(SAYER_HOME);

      this.setState({ itemTitle: '' })
    }
  };

  render() {
    const { header, itemTitle } = this.state;

    return (
      <View>
        <Header
          title={header}
          navigation={this.props.navigation}
          route={SAYER_HOME}
        />
        <View style={styles.createItemContainer}>
          <TextInput
            placeholder='New item title...'
            style={styles.itemCreatorInput}
            value={this.state}
            onChangeText={this.onChange}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.onClick}
          >
            <Text style={styles.buttonText}>
              >
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addItem
};

export default ItemCreatingScreen = connect(null, mapDispatchToProps)(SayerItemCreate);

const styles = StyleSheet.create({
  createItemContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  itemCreatorInput: {
    marginLeft: 10,
    width: '78%',
    fontSize: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  button: {
    paddingBottom: 12,
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#40059D',
    width: 47.5,
    height: 47.5,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 35,
    color: '#fff'
  }
});