import React , {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import AddToDo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'Buy a coffee', key:'1'},
    {text:'Prepare interview', key:'2'},
    {text:'Make launch', key:'3'},
    {text:'Study', key:'4'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) =>{
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('Oops', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data = {todos}
            renderItem={({item}) => {
              return (
                <TodoItem item = {item} pressHandler ={pressHandler}/>
              )
            }}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  content: {
    padding:20,
    flex: 1
  },
  list:{
    marginTop:20,
    flex: 1
  },
  items:{
    color: '#000'
  },
});
