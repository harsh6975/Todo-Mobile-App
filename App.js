import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "./component/Header";
import Body from "./component/Body";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#030303"></StatusBar>
      <Header />
      <Body />
      {/* Footer */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
