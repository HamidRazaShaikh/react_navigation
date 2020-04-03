import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todoData: [],
      edit: false,
      index: null,
    };
  }

  addTodo = () => {
    if (this.state.todo !== '') {
      if (this.state.edit == false) {
        let data = this.state.todoData;
        data.push({todo: this.state.todo, key: Math.random().toString()});
        this.setState({todoData: data});
        this.setState({todo: ''});
      } else if (this.state.edit == true) {
        console.log(this.state.index);
        let data = this.state.todoData;
        data.splice(this.state.index, 1, {
          todo: this.state.todo,
          key: Math.random().toString(),
        });
        this.setState({todoData: data});
        this.setState({todo: ''});
        this.setState({edit: false});
      }
    } else {
      Alert.alert('Oopps!', 'Please enter some todo....');
    }
  };

  opacityTouch = item => {
    console.log(item);
    return Alert.alert('Choose what to do?', 'Please select an option.', [
      {
        text: 'Edit',
        onPress: () => {
          this.editTodo(item);
        },
      },
      {text: 'Delete', onPress: () => this.deletetodo(item)},
    ]);
  };

  deletetodo = ({key}) => {
    var conso = this.state.todoData.filter(item => item.key !== key);
    this.setState({todoData: conso});
  };

  editTodo = ({key}, i) => {
    this.setState({edit: true});
    var conso = this.state.todoData.filter(item => item.key === key);
    this.setState({todo: conso[0].todo});
    var ind = this.state.todoData.findIndex(item => item.key === key);
    console.log(ind);
    this.setState({index: ind});
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.todo}
            onChangeText={todo => this.setState({todo})}
            placeholder={'type your todo.....'}
          />
        </View>
        <View>
          <Button
            title={this.state.edit ? 'add edited todo' : 'add todo'}
            onPress={this.addTodo}
            style={{fontSize: 30}}
          />
        </View>
        <ScrollView style={styles.list}>
          <FlatList
            data={this.state.todoData}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.opacity}
                onPress={() => this.opacityTouch(item)}>
                <Text style={styles.listText}>{item.todo}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.key}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1
  },
  inputView: {},
  input: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  listText: {
    fontSize: 20,
    color: 'blue',
    padding: 10,
  },
  list: {},
  opacity: {
    borderBottomWidth: 1,
    margin: 3,
  },
});
