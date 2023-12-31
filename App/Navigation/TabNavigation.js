import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Home from "../Screen/Home";
import Application from "../Screen/Application";
import Culture from "../Screen/Culture";
import PeerAppreciate from "../Screen/PeerAppreciate";
export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HR Core"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Application"
        component={Application}
        options={{
          tabBarLabel: "Application",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="application"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Peerappreciate"
        component={PeerAppreciate}
        options={{
          tabBarLabel: "Peerappreciate",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Features"
        component={Culture}
        options={{
          tabBarLabel: "Culture",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="options" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
