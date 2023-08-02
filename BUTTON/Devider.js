import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: 274,
    height: 1,
    backgroundColor: "#EAECF0",
    marginLeft: 75,
    marginTop: -13,
    
  },
});

export default Divider;
