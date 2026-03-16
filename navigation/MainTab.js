import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#D8ECF9" : "transparent",
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Image
                source={require("../assets/home.png")}
                style={{ width: 24, height: 24 }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/user.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}