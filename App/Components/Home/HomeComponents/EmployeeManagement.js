import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import RoundedButton from "../../../../BUTTON/Button";
import Payship from "./Payship";

export default function EmployeeManagement() {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          height: 144,
          width: 400,
          backgroundColor: "#fff",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "500",
            fontWeight: "bold",
            marginLeft: 13,
            marginTop: 20,
          }}
        >
          Employee Management
        </Text>
        <Text
          style={{
            fontWeight: "",
            marginLeft: 13,
            marginTop: 10,
            color: "#667085",
            lineHeight: 16,
            width: 370,
            height: 40,
          }}
        >
          Happy Employees,Thriving Company: Mastering employee Management.
        </Text>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.pic}
              source={require("../../../../assets/p.png")}
            />
            <Image
              style={styles.pic}
              source={require("../../../../assets/b.jpg")}
            />
            <Image
              style={styles.pic}
              source={require("../../../../assets/k.jpg")}
            />
            <Image
              style={styles.pic}
              source={require("../../../../assets/s.jpg")}
            />
            <Image
              style={styles.pic}
              source={require("../../../../assets/l.jpg")}
            />
            <Image
              style={styles.pic}
              source={require("../../../../assets/m.webp")}
            />
          </View>
          <View>
            <RoundedButton />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    height: 40,
    width: 40,
    borderRadius: 99,
    borderWidth:2,
    borderColor: "#FFF",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
    marginTop: 10,
    gap: -16,
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
