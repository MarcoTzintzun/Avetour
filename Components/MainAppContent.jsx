import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ciudades from "./SeccionCiudades";
import Camara from "./SeccionCamara";
import Aves from "./SeccionAves";

const Tab = createBottomTabNavigator();

const images = [
  {
    title: "APATZINGAN",
    description: "DESCUBRE APATZINGAN",
  },
  {
    title: "PATZCUARO",
    description: "DESCUBRE PATZCUARO",
  },
  {
    title: "QUIROGA",
    description: "DESCUBRE QUIROGA",
  },
  {
    title: "PARACHO",
    description: "DESCUBRE PARACHO",
  },
];

const MainAppContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const currentImage = images[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/bosque.jpeg')}
          style={styles.image}
        />
      </View>
      <View style={styles.container2}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={goToPreviousImage}>
            <Text style={styles.arrowText}>{"⤎"}</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.imageTitle}>{currentImage.title}</Text>
            <Text style={styles.imageDescription}>
              {currentImage.description}
            </Text>
          </View>
          <TouchableOpacity onPress={goToNextImage}>
            <Text style={styles.arrowText}>{"⤏"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#006400", // Color de ícono activo
          tabBarInactiveTintColor: "#7a7a7a", // Color de ícono inactivo
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Ciudades") {
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
        <Tab.Screen name="Ciudades" component={Ciudades} />
        <Tab.Screen name="Camara" component={Camara} />
        <Tab.Screen name="Aves" component={Aves} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    flex: 0.7,
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
  arrowContainer: {
    position: "absolute",
    top: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
    margin: 30,
  },
  arrowText: {
    fontSize: 48,
    color: "#000",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  imageDescription: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default MainAppContent;
