import React from "react";
import { View, StyleSheet } from "react-native";

const Oval = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf} />
      <View style={styles.bottomHalf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 525,
    height: 20,
    overflow: "hidden", // To clip the top and bottom halves
  },
  topHalf: {
    width: 400,
    height: 20,
    backgroundColor: "#a0C580",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    overflow: "hidden", // To clip the oval shape
  },
  bottomHalf: {
    width: 400,
    height: 20,
    backgroundColor: "#a0C580",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    overflow: "hidden", // To clip the oval shape
  },
});

export default Oval;
