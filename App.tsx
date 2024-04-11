/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Button,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {

  const alertFunc = ()=> Alert.alert('Button was clicked')

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffdf80'}}>
      <Button color={'blue'} title='Press me' onPress={alertFunc}/>
      <Button title='Press me' onPress={alertFunc}/>
    </View>
  );
}

export default App;
