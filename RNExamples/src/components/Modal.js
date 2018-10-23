import React, {Component} from 'react';
import {
  Text, 
  View,
  StyleSheet,
  Button
} from 'react-native';

export default (props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Modal View</Text>
      <Button title="Close" onPress={() => props.navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
    alignItems: 'center'
  },
  text: {
    marginVertical: 100,
    textAlign: 'center',
    fontSize: 30
  }
})
