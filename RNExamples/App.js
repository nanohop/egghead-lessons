import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import Welcome from 'src/Welcome'
import Modal from 'src/components/Modal'
import Login from 'src/password_input/Login'
import TextLink from 'src/text_link/TextLink'


const Screens = createStackNavigator({
  Welcome: { screen: Welcome },
  Login: { screen: Login },
  TextLink: { screen: TextLink },
})


export default createStackNavigator({
  Screens: { screen: Screens },
  Modal: { screen: Modal }
}, {
  mode: 'modal',
  navigationOptions: {
    header: null
  }
})