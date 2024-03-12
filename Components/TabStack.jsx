import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DescripcionAve from "../Screen/DescripcionAve";
import MainAppContent from "./MainAppContent";

const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainAppContent"
        component={MainAppContent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DescripcionAve"
        component={DescripcionAve}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TabStack;
