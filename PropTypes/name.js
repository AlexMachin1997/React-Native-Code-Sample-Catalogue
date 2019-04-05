import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import propTypes from 'prop-types';

export default class Name extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My name should be a string</Text>
        <Text>Hello my name is {this.props.myname}</Text>
      </View>
    );
  }
}

Name.propTypes = {
    myname: propTypes.string
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
