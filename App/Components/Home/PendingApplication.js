import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import RoundedButton from "../../../BUTTON/Button";
import Divider from "../../../BUTTON/Devider";

export default function PendingApplication() {
  return (
    <View
      style={{
        marginTop: 20,
        height: 490,
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
            <View style={{ display: "flex" }}>
              <Text style={{ fontWeight: "500", marginTop: 5 }}>Leave</Text>
              <Text style={{ color: "#667085", marginTop: 10 }}>
                Application Date
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ color: "#667085", marginTop: 10 }}>
                  Approver -
                </Text>
                <View style={styles.employee}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.ApproverPic}
                      source={require("../../../assets/s.jpg")}
                    />
                  </View>
                  <View style={styles.txtContainer}>
                    <Text style={{ fontWeight: "400" }}>
                      Md. Abu Raihan Khan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.Slayer}>
              <Text style={{ color: "#A15C07" }}>Pending</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <View style={{ display: "flex" }}>
              <Text style={{ fontWeight: "500", marginTop: 5 }}>Movement</Text>
              <Text style={{ color: "#667085", marginTop: 10 }}>
                Application Date
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ color: "#667085", marginTop: 10 }}>
                  Approver -
                </Text>
                <View style={styles.employee}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.ApproverPic}
                      source={require("../../../assets/s.jpg")}
                    />
                  </View>
                  <View style={styles.txtContainer}>
                    <Text style={{ fontWeight: "400" }}>
                      Md. Abu Raihan Khan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.Slayer}>
              <Text style={{ color: "#A15C07" }}>Pending</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <View style={{ display: "flex" }}>
              <Text style={{ fontWeight: "500", marginTop: 5 }}>Movement</Text>
              <Text style={{ color: "#667085", marginTop: 10 }}>
                Application Date
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ color: "#667085", marginTop: 10 }}>
                  Approver -
                </Text>
                <View style={styles.employee}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.ApproverPic}
                      source={require("../../../assets/s.jpg")}
                    />
                  </View>
                  <View style={styles.txtContainer}>
                    <Text style={{ fontWeight: "400" }}>
                      Md. Abu Raihan Khan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.Slayer}>
              <Text style={{ color: "#A15C07" }}>Pending</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divider} />
        </View>
      </View>
      <View style={styles.approversContainer}>
        <View style={styles.employee}>
          <View style={styles.imageContainer}>
            <View style={{ display: "flex" }}>
              <Text style={{ fontWeight: "500", marginTop: 5 }}>Movement</Text>
              <Text style={{ color: "#667085", marginTop: 10 }}>
                Application Date
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ color: "#667085", marginTop: 10 }}>
                  Approver -
                </Text>
                <View style={styles.employee}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.ApproverPic}
                      source={require("../../../assets/s.jpg")}
                    />
                  </View>
                  <View style={styles.txtContainer}>
                    <Text style={{ fontWeight: "400" }}>
                      Md. Abu Raihan Khan
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.Slayer}>
              <Text style={{ color: "#A15C07" }}>Pending</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.divider} />
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
    marginBottom: 0,
    marginLeft: 20,
    marginTop: 10,
    position: "fixed",
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
  Slayer: {
    height: 20,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEFBE8",
    marginLeft: 50,
    borderWidth: 1,

    borderColor: "#EAAA08",
  },
  ApproverPic: {
    height: 18,
    width: 18,
    borderRadius: 99,
  },
});
