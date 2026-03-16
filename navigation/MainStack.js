import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTab from "./BottomTab";
import ScanScreen from "../screens/ScanScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CartScreen from "../screens/CartScreen";
import SuccessScreen from "../screens/SuccessScreen";
const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="Tabs"
                component={BottomTab}
            />

            <Stack.Screen
                name="Scan"
                component={ScanScreen}
            />

            <Stack.Screen
                name="Payment"
                component={PaymentScreen}
            />

            <Stack.Screen
                name="Cart"
                component={CartScreen}
            />

            <Stack.Screen
                name="Success"
                component={SuccessScreen}
            />
        </Stack.Navigator>
    );
}