import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
function TodoItem({ item, buttonHandler }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.todo}>
          <Text
            style={[
              styles.item,
              item && item.done ? styles.strikeThroughtextStyle : styles.item,
            ]}
          >
            {item.name}
          </Text>
          <View style={styles.button}>
            <Button
              title="Done"
              onPress={() => {
                buttonHandler(item.key, "done");
                alert("Done");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Delete"
              onPress={() => {
                buttonHandler(item.key, "delete");
                alert("Deleted");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    margin: 10,
    flex: 4,
    borderRadius: 4,
    elevation: 6,
    flex: 3,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    margin: 10,
    fontSize: 10,
    justifyContent: "center",
  },
  strikeThroughtextStyle: {
    textDecorationLine: "line-through",
  },
});
