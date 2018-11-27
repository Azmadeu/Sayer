import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Header } from '../components/header'
import { SAYER_HOME } from '../routes';

export default class CommentScreen extends Component {
  render() {
    const { navigation } = this.props;

    const item = navigation.getParam('item');

    return (
      <View>
        <Header
          title={item.title.slice(0, 35) + '...'}
          navigation={navigation}
          route={SAYER_HOME}
        />
        <View style={styles.itemCommentContainer}>
          {
            item.comments.map(comment => (
              <View
                style={styles.commentContent}
                key={comment}
              >
                <View style={styles.square} />
                <Text
                  style={styles.commentText}
                >
                  {comment}
                </Text>
              </View>
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemCommentContainer: {
    flexDirection: 'column',
  },
  commentContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingBottom: 12.5,
    borderBottomColor: '#e8e8e8',
  },
  commentText: {
    width: '80%',
    flexWrap: 'wrap',
    marginLeft: 10,
    fontSize: 16,
    color: '#44859D',
  },
  square: {
    marginLeft: 20,
    width: 50,
    height: 50,
    backgroundColor: '#555',
  }
});