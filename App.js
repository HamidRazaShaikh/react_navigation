import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './component/Home';
import Detail from './component/Detail';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}  />
        <Stack.Screen name="Detail" component= {Detail}
        options={{headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
