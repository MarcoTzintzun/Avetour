import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Restaurantes from "./SeccionRestaurantes";
import Camara from "./SeccionCamara";
import Aves from "./SeccionAves";

const Tab = createBottomTabNavigator();

const MainAppContent = () => {

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/dia.jpg")} style={styles.image} />
        </View>
        <View style={styles.container2}>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#006400", // Color de ícono activo
          tabBarInactiveTintColor: "#7a7a7a", // Color de ícono inactivo
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Restaurantes") {
              iconName = "city";
            } else if (route.name === "Camara") {
              iconName = "camera";
            } else if (route.name === "Aves") {
              iconName = "bird";
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Aves" component={Aves} />
        <Tab.Screen name="Camara" component={Camara} />
        <Tab.Screen name="Restaurantes" component={Restaurantes} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 500,
    height: 250,
    borderRadius: 80,
  },
});

export default MainAppContent;
