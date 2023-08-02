import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import AppOption from "../Components/Home/AppOption";
import EmployeeM from "../Components/Home/EmployeeM";
import ApplicationApprove from "../Components/Home/ApplicationApprove";

export default function Application() {
  return (
    <SafeAreaView>
      <ScrollView>
        <AppOption />
        <EmployeeM />
        <ApplicationApprove />
      </ScrollView>
    </SafeAreaView>
  );
}

