import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';



const Stack = createStackNavigator();

function Detail ({navigation}) {
  return (
    <View style = {{ flex : 1 ,  justifyContent : 'center', alignItems : 'center'}}>
        <Text style = {{fontSize : 30, color : 'green'}} onPress = {()=> navigation.navigate('Home') }>Details</Text>
    </View>
  );
}


export default Detail;