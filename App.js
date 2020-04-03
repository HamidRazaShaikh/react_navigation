import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Signin from './component/signin';
import Home from './component/Home';


const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Signin' component = {Signin} options = {{headerShown : false}} />
        <Stack.Screen name = 'Home' component = {Home}  />
      </Stack.Navigator>
      </NavigationContainer>
      
      
      
    );
  }
}
