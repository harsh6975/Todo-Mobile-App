import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ImageBackground,
  Alert,
} from "react-native";
import TodoItem from "./TodoItem";

const image = "../assets/background.jpg";

function Body() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState();

  const addHandler = () => {
    if (todo.length == 0)
      return Alert.alert("Oops!", "No todo added", [
        { text: "Close", onPress: () => console.log("Closed") },
      ]);
    list.map((item) => {
      if (item == todo) {
        Alert.alert("Oops!", "Already Added", [
          { text: "Close", onPress: () => console.log("Closed") },
        ]);
        return;
      }
    });
    let newList = [
      { name: todo, key: Math.random().toString(), done: false },
      ...list,
    ];
    setList(newList);
    setTodo("");
  };

  const buttonHandler = (key, option) => {
    let newList = [];
    let oldItem;
    list.map((item) => {
      if (item.key != key) {
        newList.push(item);
      } else {
        oldItem = item;
      }
    });

    if (option == "done") {
      oldItem.done = true;
      newList.push(oldItem);
    }
    setList(newList);
  };

  return (
    <View style={styles.body}>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.add}>
          <View style={styles.input}>
            <TextInput
              placeholder="Add a task"
              onChangeText={(val) => setTodo(val)}
              value={todo}
            />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={addHandler} />
          </View>
        </View>
        <View>
          {list.length > 0 && (
            <Text style={styles.textleft}>Your Todo ({list.length})</Text>
          )}
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <TodoItem item={item} buttonHandler={buttonHandler} />
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default Body;

const styles = StyleSheet.create({
  image: {
    minHeight: 600,
  },
  textleft: {
    marginLeft: 10,
  },
  add: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 3,
    margin: 10,
    flex: 4,
    backgroundColor: "white",
    borderRadius: 5,
  },
  button: {
    flex: 1,
    margin: 10,
  },
});
