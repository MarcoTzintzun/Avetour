import React from "react";
import TabStack from "./Components/TabStack";
import MainAppContent from "./Components/MainAppContent";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
};

export default App;
