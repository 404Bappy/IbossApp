import { View, Text, style, StyleSheet, Image } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import React from "react";
import Header from "../Home/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Recognition() {
  return (
    <View>
      <Header />

      <View style={styles.outerDiv}>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <LinearGradient
            colors={["#085121", "#22984B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientContainer}
          >
            <View style={styles.innerDiv}>
              <Card.Title
                title="10200"
                subtitle="My Recognition Point"
                titleStyle={{
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#FFF",
                  marginLeft: -20,
                  marginTop: 7,
                }}
                subtitleStyle={{
                  color: "#fff",
                  marginLeft: -55,
                }}
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    size={24}
                    icon="star"
                    style={{
                      backgroundColor: "#fff",

                      marginBottom: 18,
                    }}
                  />
                )}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="trophy"
                    style={{
                      color: "#fff",
                    }}
                    size={45}
                  />
                )}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 4,
    overflow: "hidden",
  },

  innerDiv: {
    height: 76,
    width: 355,

    borderRadius: 5,
  },
  outerDiv: {
    width: 355,
    marginLeft: 20,
  },
});
