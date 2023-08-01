import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";

export default function Application() {
  return (
    <View>
      <Header />
      <View>
        <Text style={styles.appText}>Applications</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appText: {
    fontSize: 16,
    fontWeight: 500,
    fontStyle: "normal",
    marginTop: 16,
    marginLeft: 16,
    gap: 10,
  },
});
