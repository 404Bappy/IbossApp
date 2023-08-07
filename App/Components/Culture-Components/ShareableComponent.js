import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";

export default function ShareableComponent() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 80,
          width: 460,
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={styles.employee}>
          <View style={styles.ic}>
            <View
              style={{
                width: 48,
                height: 48,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 99,
                backgroundColor: "#F2F4F7",
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="star-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Shareable Points </Text>
              <Text>Expire in 29 days (sep, 30, 2022 )</Text>
            </View>
            <View
              style={{
                width: 50,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 99,
                backgroundColor: "#FEFBE8",
              }}
            >
              <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                <View
                  style={{
                    width: 16,
                    height: 16,

                    alignItems: "center",
                    borderRadius: 99,
                    backgroundColor: "#EAAA08",
                  }}
                >
                  <MaterialCommunityIcons
                    name="star-outline"
                    size={16}
                    color="white"
                  />
                </View>
                <View style={{ marginBottom: 9 }}>
                  <Text>700</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Icon}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </View>
      </View>

      <View style={{ display: "flex", flexDirection: "row" }}>
        <View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 80,
              width: 460,
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View style={styles.employee}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.Pic}
                  source={require("../../../assets/m.webp")}
                />
              </View>

              <View style={{}}>
                <View style={styles.txtContainer}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontWeight: "500" }}>Notice Board </Text>
                    <View style={styles.badge}>
                      <Text style={styles.text}>New</Text>
                    </View>
                  </View>

                  <Text style={{ color: "gray", marginTop: 5 }}>
                    All Official Notice Are Accessible Here
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 24,
            marginLeft: -102,
            marginTop: 30,
            top: 10,
          }}
        >
          <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          height: 80,
          width: 460,
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.Pic}
              source={require("../../../assets/privacy-policy.png")}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={{ fontWeight: "500" }}>Company Policy </Text>
            <Text style={{ color: "gray", marginTop: 5 }}>
              All the rules and policies here
            </Text>
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
    marginLeft: 60,
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
});
