import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Pajaro from "./assets/pajaros.gif";
import Estrella from "./assets/estrellas.gif";

const Tab = createBottomTabNavigator();

const CiudadesScreen = () => (
  <View style={styles.container}>
    <Text>Ciudades</Text>
  </View>
);

const CamaraScreen = () => (
  <View style={styles.container}>
    <Text>Cámara</Text>
  </View>
);

const AvesScreen = () => (
  <View style={styles.container}>
    <Text>Aves</Text>
  </View>
);

const images = [
  {
    source: require("./assets/apa.png"), //
    title: "APATZINGAN",
    description: "DESCUBRE APATZINGAN",
  },
  {
    source: require("./assets/patz.png"), //
    title: "PATZCUARO",
    description: "DESCUBRE PATZCUARO",
  },
  {
    source: require("./assets/quiroga.png"), //
    title: "QUIROGA",
    description: "DESCUBRE QUIROGA",
  },
  {
    source: require("./assets/paracho.png"), //
    title: "PARACHO",
    description: "DESCUBRE PARACHO",
  },
];
const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentImage2, setCurrentImage2] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else{
      setCurrentIndex(images.length - 1)
    }
  };

  const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else{
      setCurrentIndex(0)
    }
  };
  const currentImage = images[currentIndex];


  const images2 = [
    { time: 'amanecer', source: require('./assets/amanecer.jpg') },
    { time: 'dia', source: require('./assets/dia.jpg') },
    { time: 'tarde', source: require('./assets/atardecer.png') },
    { time: 'noche', source: require('./assets/noche.jpg') },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const currentHour = currentTime.getHours();
    // Amanecer
    if (currentHour >= 5 && currentHour < 8) { setCurrentImage2(images2[0].source); } 
    // Día
    else if (currentHour >= 8 && currentHour < 17) { setCurrentImage2(images2[1].source); } 
    // Tarde
    else if (currentHour >= 17 && currentHour < 20) { setCurrentImage2(images2[2].source); } 
    // Noche
    else { setCurrentImage2(images2[3].source); }
  }, [currentTime]);

  

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={currentImage2} style={styles.image} />
        <Image source={Pajaro} style={styles.image3} />
        {/* <Image source={Pajaro} style={styles.image3} /> */}
      </View>
        <View style={styles.container2}>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={goToPreviousImage}>
              {/* Flecha a la izquierda */}
              <Text style={styles.arrowText}>{"⬸"}</Text>
            </TouchableOpacity>
            <View style={styles.imageContainer2}>
              <Image source={currentImage.source} style={styles.image2} />
            </View>
            <TouchableOpacity onPress={goToNextImage}>
              {/* Flecha a la derecha */}
              <Text style={styles.arrowText}>{"⤑"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.imageTitle}>{currentImage.title}</Text>
            <Text style={styles.imageDescription}>
              {currentImage.description}
            </Text>
          </View>
        </View>
      </View>
      <Tab.Navigator
        style={styles.tab}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#006400", // Color de ícono activo
          tabBarInactiveTintColor: "gray", // Color de ícono inactivo
          tabBarStyle: [{ display: "flex", }, null, ],
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Ciudades") { iconName = "city"; } 
            else if (route.name === "Camara") { iconName = "camera"; } 
            else if (route.name === "Aves") { iconName = "bird"; }
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
        <Tab.Screen name="Ciudades" component={CiudadesScreen} />
        <Tab.Screen name="Camara" component={CamaraScreen} />
        <Tab.Screen name="Aves" component={AvesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    backgroundColor: '#000', // Cambia este color según tus preferencias
    borderTopWidth: 12, // Borde en la parte superior
    borderTopColor: '#ccc', // Color del borde
  },
  container2: {
    flex:0.7,
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
  image3: {
    objectFit: 'cover',
    position: 'absolute',
    width: 100, 
    height: 100, 
    top: 10,
  },
  imageContainer2: {
    flex: 1,
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image2: {
    objectFit: "cover",
    width: 150, 
    height: 150, 
    borderRadius: 10,
  },
  contentContainer: {
    marginTop: 1,
    flex: 0.5,
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  arrowContainer: {
    position: "absolut",
    top: -70,
    flex: 0.2,
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
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  imageDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;
