import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Application from "../../../Screen/Application";
import Employee from "./Employee";
import ThankYou from "./ThankYou";

const Tab = createMaterialTopTabNavigator();

const Appreciate = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Application" component={Application} />
        <Tab.Screen name="Employee" component={Employee} />
        <Tab.Screen name="ThankYou" component={ThankYou} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Appreciate;
