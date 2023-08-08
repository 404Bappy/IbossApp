import React from "react";
import { View, StyleSheet, Image } from "react-native";

const OvalShape = () => {
  return (
    <View
      style={{
        height: 100,

        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        backgroundColor: "#ECFDF3", // You can change the color as per your preference
      }}
    >
      <View style={styles.employee}>
        <View style={styles.imageContainer}>
          <Image style={styles.pic} source={require("../assets/p.png")} />
          <Image style={styles.pic} source={require("../assets/b.jpg")} />
          <Image style={styles.pic} source={require("../assets/k.jpg")} />
          <Image style={styles.pic} source={require("../assets/s.jpg")} />
          <Image style={styles.pic} source={require("../assets/l.jpg")} />
          <Image style={styles.pic} source={require("../assets/m.webp")} />
        </View>
      </View>
    </View>
  );
};

export default OvalShape;

const styles = StyleSheet.create({
  pic: {
    height: 40,
    width: 40,
    borderRadius: 99,
    borderColor: "#FFF",
    borderWidth: 2,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: 30,
    gap: -16,
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
