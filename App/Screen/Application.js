import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import { Ionicons } from "@expo/vector-icons";

export default function Application() {
  return (
    <View>
      <Header />
      <View>
        <Text style={styles.appText}>Applications</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.firstLine}>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text> Leave</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="car" size={50} color="white" />
            </View>
            <Text>Movement</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text>Remote Att</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text>Market Visit</Text>
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text> Leave</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text>Movement</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text>Remote Att</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.circle}>
              <Ionicons name="train" size={50} color="white" />
            </View>
            <Text>Market Visit</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appText: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 16,
    marginLeft: 16,
    lineHeight: 24,
    gap: 10,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D444F1",
  },
  firstLine: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondLine: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});
