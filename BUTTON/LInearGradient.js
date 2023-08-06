import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const MyComponent = () => {
  return (
    <LinearGradient
      colors={["#085121", "#22984B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Text style={styles.text}>
        Hello, this is a linear gradient background!
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
