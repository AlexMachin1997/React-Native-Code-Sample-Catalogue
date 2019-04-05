import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput,Alert, Button, AsyncStorage} from 'react-native';

export default class App extends Component {

    state = {
      value: ''
    }

    SaveDataToStorage = async (value) => {

      // Store the token in AsyncStorage
      try {
        // setItem(key, data)
        await AsyncStorage.setItem('savedValue',value);
        Alert.alert('Saved to storage');
      }

      // When the token can't be saved
      catch(error){
        Alert.alert(error)
      }
    }


  render() {

    const {value} = this.state;

    return (
      <View style={styles.container}>

        <View style={{marginBottom: 10}}>
          <Text style={[styles.text, styles.largeText]}>Saving data to storage</Text>
          <Text style={[styles.text, styles.smallText]}>{value}</Text>
        </View>

        <View>
          <TextInput 
            placeholder="Enter your value"
            style={{height: 40, borderColor: 'black', borderWidth: 1, width: 200}}
            onChangeText={(value) => this.setState({value})}
            value={this.state.text}
          />
        </View>
        

        <View style={{marginTop: 10}}>
          <Button
            onPress={() => this.SaveDataToStorage(value)}
            title="Save"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
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
    textAlign: 'center'
  },
  largeText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 20
  }
});
