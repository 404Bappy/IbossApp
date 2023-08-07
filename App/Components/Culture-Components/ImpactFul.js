import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import React from "react";

export default function ImpactFul() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",

          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 525,
            height: 525,
            borderRadius: 525,
          }}
        >
          <View style={{ height: 525 }}></View>
        </View>

        <View style={styles.employee}>
          <View style={styles.ic}>
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 99,
                backgroundColor: "#",
              }}
            >
              <View>
                <FontAwesome5 name="user-friends" size={24} color="gray" />
              </View>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: -120 }}>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Appreciation </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: "400",
                  color: "#667085",
                  width: 233,
                  height: 16,
                }}
              >
                Gratitude: Recognitions & Points
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.Icon}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Pic: {
    height: 40,
    width: 40,
    borderRadius: 99,
    borderColor: "#FFF",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    width: 48,
    height: 48,
    borderRadius: 99,
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 20,
  },
  txtContainer: {
    marginLeft: 16,
  },
  Icon: {
    height: 24,
    width: 24,
    marginLeft: 30,
    marginTop: 30,
    position: "fixed",
  },
  badge: {
    right: 91,
    top: 0,
    backgroundColor: "#D92D20",
    padding: 0,
    paddingHorizontal: 4,
    borderRadius: 100,
    marginLeft: 100,
  },
  text: {
    color: "white",
  },
  oval: {},
});
