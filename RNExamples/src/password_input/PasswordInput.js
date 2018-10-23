import React from 'react';
import { TextInput } from 'react-native'

export default (props) =>
  <TextInput 
    secureTextEntry={true}
    {...props}
  />
  