import { View, Text } from "react-native";
import React from "react";
import AppreciateHeader from "../Components/Peerappreciate/AppreciateHeader";
import Appreciate from "../Components/Peerappreciate/TopNavElement/Appreciate";

export default function PeerAppreciate() {
  return (
    <View>
      <AppreciateHeader />
      <Appreciate />
    </View>
  );
}
