import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from '../components/header'
import { SAYER_HOME } from '../routes';
import { connect } from 'react-redux';
import { addComment} from '../actions';

class Footer extends Component {
  state = {
    comment: ''
  };

  onChange = text => {
    this.setState({ comment: text })
  };

  onPress = () => {
    const { addComment, id, onClick } = this.props;

    onClick(this.state.comment);

    addComment(id, this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Write a comment...'
          onChangeText={this.onChange}
          value={this.state.comment}
          style={styles.inputText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text style={styles.buttonText}>
            >
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SayerComment extends Component {
  state = {
    comments: this.props.navigation.getParam('item').comments
  };

  onClick = text => {
    const comments = [...this.state.comments];

    comments.push(text);

    this.setState({ comments })
  };

  render() {
    const { navigation, addComment, getData } = this.props;

    const item = navigation.getParam('item');

    return (
      <View style={styles.container}>
        <Header
          title={item.title.slice(0, 33) + '...'}
          navigation={navigation}
          route={SAYER_HOME}
        />
        <View style={styles.itemCommentContainer}>
          <ScrollView>
          {
            this.state.comments.map(comment => (
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
          </ScrollView>
        </View>
        <Footer
          onClick={this.onClick}
          getData={getData}
          addComment={addComment}
          id={item.id}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  addComment
};

export default CommentScreen = connect(null, mapDispatchToProps)(SayerComment);

const styles = StyleSheet.create({
  button: {
    paddingBottom: 12,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#40059D',
    width: 43,
    height: 43,
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 15,
    marginBottom: 7,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 30,
    color: '#fff'
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#efeafe',
    flex: 1,
  },
  inputText: {
    position: 'absolute',
    marginLeft: 5,
    marginBottom: 5,
    bottom: 0,
    width: '78%',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
  },
  itemCommentContainer: {
    height: '72%',
    width: '100%',
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