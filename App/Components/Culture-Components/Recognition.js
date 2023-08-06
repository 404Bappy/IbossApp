import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import React from "react";
import Header from "../Home/Header";
import { LinearGradient } from "expo-linear-gradient";

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
                subtitle="Card Subtitle"
                left={(props) => (
                  <Avatar.Icon
                    {...props}
                    size={24}
                    icon="star"
                    style={{
                      backgroundColor: "#fff",
                      color: "#085121",
                      marginBottom: 18,
                    }}
                  />
                )}
                right={(props) => (
                  <IconButton
                    style={{}}
                    {...props}
                    icon="trophy"
                    iconStyle={{ color: "white" }}
                    size={45}
                    onPress={() => {}}
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
    marginLeft: 20,
    borderRadius: 5,
  },
});
