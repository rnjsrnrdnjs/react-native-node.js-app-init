import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NotchProvider, NotchView } from "react-native-notchclear";

export default Splash = () => {
  return (
    <NotchView>
      <View
        style={{
          backgroundColor: "#ff0000",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text>123</Text>
      </View>
    </NotchView>
  );
};
