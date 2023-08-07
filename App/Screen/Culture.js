import { View, Text } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import Recognition from "../Components/Culture-Components/Recognition";
import ShareableComponent from "../Components/Culture-Components/ShareableComponent";
import Acknowledgement from "../Components/Culture-Components/Acknowledgement";
import Appreciation from "../Components/Culture-Components/Appreciation";
import ImpactFul from "../Components/Culture-Components/ImpactFul";

export default function Culture() {
  return (
    <View>
      <Recognition />
      <ShareableComponent />
      <Acknowledgement />
      <Appreciation />
      <ImpactFul />
    </View>
  );
}
