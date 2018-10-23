import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Button
} from 'react-native';


const EXAMPLES = [
  {
    name: 'Masked Password Input',
    desc: 'A login page with a username and password field.  The password is masked with so the user can only see bullets, and not the plain text password.',
    screen: 'Login'
  },
  {
    name: 'Styled Text Link',
    desc: 'Make a text component look like clickable web link, even if it\'s in the middle of a block of other text',
    screen: 'TextLink'
  },
]

export default class Welcome extends Component {

  static navigationOptions = {
    title: 'React Native Examples'
  }

  render() {
    return (
      <ScrollView style={styles.root}>
      {
        EXAMPLES.map(ex => {
          return (
            <View key={ex.name} style={styles.example}>
              <View style={styles.nameDesc}>
                <Text style={styles.name}>{ex.name}</Text>
                <Text style={styles.description}>{ex.desc}</Text>
              </View>
              <View style={styles.button}>
                <Button 
                  title="View"
                  onPress={() => this.props.navigation.navigate(ex.screen)}
                />
              </View>
            </View>
          )
        })
      }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  example: {
    padding: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 24,
    fontWeight: '300',
    color: '#222'
  },
  description: {
    marginTop: 10,
    fontSize: 12,
    color: '#777',
    paddingRight: 10,
  },
  nameDesc: {
    flex: 8
  },
  button: {
    flex: 1,
    minWidth: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
