import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import Recognition from "../Components/Culture-Components/Recognition";
import ShareableComponent from "../Components/Culture-Components/ShareableComponent";

export default function Culture() {
  return (
    <View>
      <Recognition />
      <ShareableComponent />
    </View>
  );
}
