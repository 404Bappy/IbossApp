import { NavigationContainer } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TabNavigation from "./App/Navigation/TabNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
