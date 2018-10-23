import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Button
} from 'react-native';

import PasswordInput from './PasswordInput'

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login Page'
  }

  state = {
    username: '',
    password: ''
  }

  showUsernameAndPassword = () => {
    console.log("username: ", this.state.username)
    console.log("password: ", this.state.password)
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.header}>
          Login
        </Text>

        <TextInput 
          placeholder="Username"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          style={[styles.input, {marginTop: 40}]}
        />

        <PasswordInput 
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}          
          style={[styles.input, {marginBottom: 40}]}
        />

        <Button 
          title="Submit"
          onPress={this.showUsernameAndPassword}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 40,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 14
  }
});
