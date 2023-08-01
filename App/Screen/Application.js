import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#D444F1",
              }}
            >
              <Ionicons name="train" size={20} color="white" />
            </View>
            <Text> Leave</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0BA5EC",
              }}
            >
              <Ionicons name="car" size={20} color="white" />
            </View>
            <Text>Movement</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F63D68",
              }}
            >
              <Ionicons name="location" size={20} color="white" />
            </View>
            <Text style={{ textAlign: "center" }}>Remote Att</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#669F2A",
              }}
            >
              <Ionicons name="walk" size={20} color="white" />
            </View>
            <Text>Market Visit</Text>
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4E5BA6",
              }}
            >
              <MaterialIcons name="perm-contact-cal" size={20} color="white" />
            </View>
            <Text> att. Adjust</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#15B79E",
              }}
            >
              <FontAwesome name="map-o" size={20} color="white" />
            </View>
            <Text>e-Presence</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#EAAA08",
              }}
            >
              <Ionicons name="logo-usd" size={20} color="white" />
            </View>
            <Text> IOU</Text>
          </View>
          <View style={styles.container}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#344054",
              }}
            >
              <Ionicons name="train" size={20} color="white" />
            </View>
            <Text> Loan</Text>
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
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D444F1",
  },
  firstLine: {
      marginLeft:20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  secondLine: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  iconContainer: {
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
