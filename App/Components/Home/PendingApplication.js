import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import RoundedButton from "../../../BUTTON/Button";
import Divider from "../../../BUTTON/Devider";

export default function PendingApplication() {
  return (
    <View
      style={{
        marginTop: 20,
        height: 360,
        width: 400,
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: "500",
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          Pending Applications
        </Text>
        <View style={styles.container}>
          <View style={styles.layer}>
            <Text style={styles.text}>4 Pending's</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.divider} />
      </View>

      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <Text>Leave</Text>
          </View>
          <View style={styles.pending}>
            <View style={styles.layer}>
              <Text style={styles.Ptext}>4 Pending's</Text>
            </View>
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
              source={require("../../../assets/s.jpg")}
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
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 110,
  },
  layer: {
    height: 32,
    width: 111,
    backgroundColor: "#D3D3D3",
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: "",
    color: "black",
  },
  divider: {
    width: 400,
    height: 1,
    backgroundColor: "#EAECF0",
    marginLeft: 0,
    marginTop: 13,
  },
  Ptext: {},
});
