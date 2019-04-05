import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {

  state = {
    value: ''
  }


  render() {

    const {value} = this.state;

    return (
      <View style={styles.container}>
        <Text numberOfLines={2} style={styles.text}>{value}</Text>
        <TextInput 
          placeholder="Enter your value"
          style={{height: 40, borderColor: 'black', borderWidth: 1, width: 200}}
          onChangeText={(value) => this.setState({value})}
          value={this.state.text}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 50
  }
});
