import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// import {  } from '../actions';
import { Header } from '../components/header'
import {
  SAYER_ITEM_CREATE,
  SAYER_COMMENT
} from '../routes'

class Item extends React.Component {
  render() {
    const { item, comments, navigation } = this.props;

    return(
      <View>
        <TouchableOpacity
          style={styles.commentsContainer}
          onPress={() => navigation.navigate(SAYER_COMMENT, { item })}
        >
          <Text style={styles.commentsTitle}>
            {item.title}
          </Text>
          <Text style={styles.commentsNumber}>
            {comments}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SayerHome extends Component {
  state = {
    title: 'Sayer',
    description: 'World\'s most used time waster',
  };

  render() {
    const { title, description } = this.state;

    const { navigation, items } = this.props;

    return (
      <View style={styles.content}>
        <Header
          navigation={navigation}
          route={SAYER_ITEM_CREATE}
          title={title}
          description={description}
        />
        <View style={styles.mainContent}>
          <ScrollView>
            {
              items.map((item, i) => (
                <Item
                  key={item.id}
                  item={item}
                  comments={item.comments.length}
                  navigation={navigation}
                />
              ))
            }
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate(SAYER_ITEM_CREATE)}
            >
              <Text style={styles.addButtonText}>
                +
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.itemsData
  };
};

// const mapDispatchToProps = {};

export default HomeScreen = connect(mapStateToProps, null)(SayerHome);

const styles = StyleSheet.create({
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 45,
  },
  commentsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingBottom: 12.5,
    borderBottomColor: '#e8e8e8',
    alignItems: 'center',
  },
  mainContent: {
    height: '80%'
  },
  content: {
    height: '100%'
  },
  commentsTitle: {
    marginLeft: 15,
    fontSize: 18,
    textAlign: 'left',
    width: '80%',
    color: '#44359D',
  },
  commentsNumber: {
    textAlign: 'right',
    fontSize: 24,
    color: '#fff',
    marginLeft: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 50,
    backgroundColor: '#44059D'
  },
  addButtonText: {
    fontSize: 55,
    fontWeight:'bold',
    backgroundColor: '#ff2a6f',
    color: '#f2b6cd',
    paddingTop: 0,
    paddingBottom: 3,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  }
});