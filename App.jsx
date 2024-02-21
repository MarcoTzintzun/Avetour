// App.js
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import MainAppContent from './Components/MainAppContent';
import SeccionAves from './Components/SeccionAves';
import DescripcionAve from './Screen/DescripcionAve';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainAppContent" component={MainAppContent} />
        <Stack.Screen name="DescripcionAve" component={DescripcionAve} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
