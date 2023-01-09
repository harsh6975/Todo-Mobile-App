import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>TODO APP</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DC143C",
    padding: 25,
  },
  headerName: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
