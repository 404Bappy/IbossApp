import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import React from "react";
import OvalShape from "../../../BUTTON/OvalShape";

export default function ImpactFul() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 10,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              height: 227,
            }}
          >
            <OvalShape />
            <Text
              style={{
                alignItems: "center",
                marginLeft: 140,
                fontSize: 16,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              Impactful Appreciate
            </Text>
            <View style={{ alignItems: "center", alignContent: "center" }}>
              <Text
                style={{ textAlign: "center", color: "#667085", marginTop: 10 }}
              >
                Make a messages meaningful & measurable, recognition in fuels
                performance and provides valuable
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.button}>
              <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                <View
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 99,
                    backgroundColor: "#EAAA08",
                    gap: 4,
                  }}
                >
                  <MaterialCommunityIcons
                    name="star-outline"
                    size={16}
                    color="white"
                  />
                </View>
                <View>
                  <Text style={styles.buttonText}>Send a Recognition </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
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

  Icon: {
    height: 24,
    width: 24,
    marginLeft: 30,
    marginTop: 30,
    position: "fixed",
  },
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
});
