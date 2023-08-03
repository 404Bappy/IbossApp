import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import AppOption from "../Components/Home/AppOption";
import EmployeeM from "../Components/Home/EmployeeM";
import ApplicationApprove from "../Components/Home/ApplicationApprove";
import PendingApplication from "../Components/Home/PendingApplication";

export default function Application() {
  return (
    <ScrollView>
      <View>
        <AppOption />
        <EmployeeM />
        <ApplicationApprove />
        <PendingApplication />
      </View>
    </ScrollView>
  );
}
