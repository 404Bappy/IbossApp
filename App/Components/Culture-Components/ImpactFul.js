import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import React from "react";
import Oval from "../../../BUTTON/Oval";
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

          <View style={{ alignItems: "center" }}></View>
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
});
