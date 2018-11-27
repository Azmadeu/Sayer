import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../components/header';
import Swipeable from 'react-native-swipeable';
import {
  getData,
  deleteItem
} from '../actions'
import {
  SAYER_ITEM_CREATE,
  SAYER_COMMENT
} from '../routes'

const deleteButton = (id, remove) => {

  const deleteItem = () => {
    remove(id);
  };

  return [
    <TouchableOpacity
      onPress={deleteItem}
      style={styles.removeButton}
    >
      <Text style={styles.removeButtonText}>Delete</Text>
    </TouchableOpacity>
  ]
};


class Item extends Component {
  render() {
    const { item, comments, navigation, deleteItem } = this.props;

    return(
      <View>
        <Swipeable rightButtons={deleteButton(item.id, deleteItem)}>
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
        </Swipeable>
      </View>
    )
  }
}

class SayerHome extends Component {
  state = {
    title: 'Sayer',
    description: 'World\'s most used time waster',
  };

  componentDidMount() {
    AsyncStorage.getItem('items')
      .then((resp) =>{
        this.props.getData(JSON.parse(resp));
      });
  }

  render() {
    const { title, description } = this.state;

    const { navigation, items, deleteItem } = this.props;

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
              items.map(item => (
                <Item
                  deleteItem={deleteItem}
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

const styles = StyleSheet.create({
  removeButton: {
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#ff1948',
  },
  removeButtonText: {
    fontSize: 24,
    color: '#fff'
  },
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
    width: '78%',
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

const mapStateToProps = (state) => {
  return {
    items: state.itemsData
  };
};

const mapDispatchToProps = {
  getData,
  deleteItem
};

export default HomeScreen = connect(mapStateToProps, mapDispatchToProps)(SayerHome);

