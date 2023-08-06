import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import RoundedButton from "../../../BUTTON/Button";
import Divider from "../../../BUTTON/Devider";

export default function ApplicationApprove() {
  return (
    <View
      style={{
        marginTop: 20,
        height: 300,
        width: 400,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontWeight: "500",
          fontWeight: "bold",
          marginLeft: 20,
          marginTop: 20,
        }}
      >
        Application Approvers
      </Text>
      <Text
        style={{
          fontWeight: "",
          marginLeft: 20,
          marginTop: 4,
          color: "#667085",
        }}
      >
        Your official applications, permissions and activity are approve by
        managers
      </Text>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.pic}
              source={require("../../../assets/b.jpg")}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={{ fontWeight: "500" }}>Md. Mahadi Hasan Mridul </Text>
            <Text style={{ color: "gray" }}>Line Manager</Text>
          </View>
        </View>
        <View>
          <Divider />
        </View>
      </View>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.pic}
              source={require("../../../assets/b.jpg")}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={{ fontWeight: "500" }}>Md. Abu Raihan Khan </Text>
            <Text style={{ color: "gray" }}>Dotted Supervisor</Text>
          </View>
        </View>
        <View>
          <Divider />
        </View>
      </View>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.pic}
              source={require("../../../assets/k.jpg")}
            />
          </View>
          <View style={styles.txtContainer}>
            <Text style={{ fontWeight: "500" }}>Md. Jakaria Hossain </Text>
            <Text style={{ color: "gray" }}>Supervisor</Text>
          </View>
        </View>
        <View>
          <Divider />
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
    borderColor: "#FFF",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  txtContainer: {
    marginLeft: 16,
  },
});
