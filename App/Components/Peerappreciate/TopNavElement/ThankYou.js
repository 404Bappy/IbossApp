import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ThankYou() {
  return (
    <View style={styles.container}>
      <Text>ThankYou</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
