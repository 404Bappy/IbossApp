import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RoundedButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Explore More</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 29,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    borderWidth: 1,
    borderColor: "#299647",
    marginTop: 8,
    marginLeft: 11,
  },
  buttonText: {
    color: "#299647",

    fontSize: 16,
    fontWeight: "500",
  },
});

export default RoundedButton;
