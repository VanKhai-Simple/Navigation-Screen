import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

import HomeScreen from "../screens/SuccessScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          marginTop: 10,
          height: 80,
          padding: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: "#ffffff",
          borderColor: "#adabab",
          borderWidth: 1,
        }
      }}
    >
      
      {/* HOME */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              backgroundColor: focused ? "#D8ECF9" : "transparent",
              padding: 10,
              borderRadius: 12
            }}>
              <Image
                source={require("../assets/home.png")}
                style={{ width: 24, height: 24 }}
              />
            </View>
          )
        }}
      />

      {/* NOTIFICATION */}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => (
            
            <Image
              source={require("../assets/bell.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />

      {/* SCAN */}
      <Tab.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/scan.png")}
              style={{ width: 28, height: 28 }}
            />
          )
        }}
      />

      {/* HISTORY */}
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/history.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />

      {/* CART */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../assets/cart.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}