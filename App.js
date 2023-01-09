import { StyleSheet, Text, View } from "react-native";
import Header from "./component/Header";
import Body from "./component/Body";


export default function App() {
  return (
    <View style={styles.container}>
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
