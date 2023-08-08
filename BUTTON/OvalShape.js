import React from "react";
import { View } from "react-native";

const OvalShape = () => {
  return (
    <View
      style={{
        height: 100,
        borderBottomEndRadius: 525,
        borderBottomStartRadius: 525,

        backgroundColor: "#ECFDF3", // You can change the color as per your preference
      }}
    ></View>
  );
};

export default OvalShape;
