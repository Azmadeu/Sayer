import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = props => {

  const { navigation, title, touchable, route, description } = props;

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        {
          touchable &&
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(route)}
            >
              <Text style={styles.buttonText}>&#x2190;</Text>
            </TouchableOpacity>
            // :
            // <Text>{description}</Text>
        }
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 110,
    flexDirection: 'row',
    backgroundColor: '#2a006a',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
  },
  text: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 30
  },
  button: {
    paddingBottom: 12,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#44059D',
    width: 35,
    height: 35,
  },
  buttonText: {
    fontSize: 35,
    color: '#fff'
  }
});
