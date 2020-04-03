import React from 'react';

import {View, Text, Button, StyleSheet, TextInput,Alert} from 'react-native';

export default class Signin extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            email : '',
            password : ''
        }
    }

    handleSignin = () => {
      
        if (this.state.emial !== '' && this.state.password !== ''){
            return (
              
                this.props.navigation.navigate('Home')
                
            )
           

           
        }

        else {
            Alert.alert( 'Oops!', 'Please enter in the respective fields.')
            
        }

        

        
    }

    
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.Signin}>Signin</Text>
        </View>
        <View>
          <Text style={styles.emial_password}>email adress</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="email adress..."
            autoCapitalize="none"
            vlaue = {this.state.email}
            onChangeText = {(email) => this.setState({email})}
          />
        </View>
        <View>
          <Text style={styles.emial_password}>password</Text>
          <TextInput
            style={styles.TextInput}
            placeholder="password..."
            secureTextEntry
            value = {this.state.password}
            onChangeText = {(password) => this.setState({password})}
          />
        </View>
        <View style={{marginTop: 20, height: 40}}>
          <Button
            style={{color: 'blue', borderRadius: 10}}
            title="Signin"
            onPress={this.handleSignin}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
  },
  Signin: {
    fontSize: 40,
    color: 'blue',
    margin: 10,
  },
  TextInput: {
    borderBottomWidth: 1,

    borderRadius: 3,
    fontSize: 20,
  },
  emial_password: {
    fontSize: 20,
    color: 'blue',
  },
});
