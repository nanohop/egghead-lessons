import React, {Component} from 'react';
import {
  Text, 
  View,
  StyleSheet
} from 'react-native';


export default class TextLink extends Component {

  static navigationOptions = {
    title: 'Styled Text Link'
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        {''}
        <Text 
          onPress={() => this.props.navigation.navigate('Modal')}
          style={styles.textLink}
        >
          incididunt
        </Text> 
        {''}
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontSize: 24
  },
  textLink: {
    color: '#0066CC',
    textDecorationLine: 'underline',
    textDecorationColor: 'darkorange',
    textDecorationStyle: 'double'
  }
})
