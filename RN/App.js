import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, AsyncStorage, StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NotchProvider } from "react-native-notchclear";
const Stack = createStackNavigator();

import splash from "./components/splash";

export default function App() {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
    changeScreenOrientation();
  });
  return (
    <NotchProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Splash"
            component={Splash}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NotchProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
