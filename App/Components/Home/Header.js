import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import EmployeeM from "./EmployeeM";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>HR Core</Text>
      <View style={styles.iconsContainer}>
        <Ionicons
          name="ios-notifications"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Ionicons name="ios-menu" size={24} color="white" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#299647",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 12,
  },
});
