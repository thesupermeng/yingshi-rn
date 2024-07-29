
import { StyleSheet, View } from "react-native";


export default function LaunchScreen() {
  return  (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%", height: "100%", backgroundColor: "#222222"
  }
});
