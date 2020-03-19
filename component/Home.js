import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

function Home ({navigation}) {
  return (
    <View style = {{ flex : 1 ,  justifyContent : 'center', alignItems : 'center'}}>
        <Text onPress = {()=> navigation.navigate('Detail') } style = {{fontSize : 30, color : 'red'}}>Home</Text>
    </View>
  );
}

export default Home;