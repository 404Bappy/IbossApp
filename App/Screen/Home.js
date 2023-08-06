import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Home/Header";
import EmployeeManagement from "../Components/Home/HomeComponents/EmployeeManagement";
import Payship from "../Components/Home/HomeComponents/Payship";

export default function Home() {
  return (
    <ScrollView>
      <View>
        <Header />
        <EmployeeManagement />
        <Payship />
      </View>
    </ScrollView>
  );
}
