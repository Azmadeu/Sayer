import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = props => {

  const { navigation, title, route, description } = props;

  const Home = route !== 'SAYER_HOME';

  return (
    <View style={styles.header}>
      <View style={styles[route]}>
        {
          !Home &&
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={styles.buttonText}>
              &#x2190;
            </Text>
          </TouchableOpacity>
        }
        <View>
          <Text style={Home ? styles.mainTitle : styles.text}>
            {title}
          </Text>
          {
            Home &&
            <Text style={styles.description}>
              {description}
            </Text>
          }
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  SAYER_HOME: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15
  },
  SAYER_COMMENT: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 15,
  },
  SAYER_ITEM_CREATE: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 15,
  },
  mainTitle: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 40
  },
  description: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 15
  },
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
    fontSize: 28
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
