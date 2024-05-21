import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importa el icono que desees usar
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de importar el icono desde la biblioteca que estés utilizando
import Map from "../Components/Map";

const DescripcionRestaurante = ({ route }) => {
  const { restaurante, restauranteData } = route.params;
  const navigation = useNavigation();

  const onRegresarPress = () => {
  navigation.navigate("MainAppContent");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
      <TouchableOpacity
        style={styles.regresarButton}
        onPress={onRegresarPress}
      >
      <Icon name="arrow-back" size={20} color="black" />
      </TouchableOpacity>
        <Image
          source={
            restauranteData.Imagen
              ? { uri: restauranteData.Imagen }
              : require("../assets/Aves/1.jpg")
          }
          style={styles.image}
        />
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayText}>{restaurante}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.contenedor_datos}>
            <Text style={styles.row}>
              <FontAwesome5 name="microscope" size={18} color="black" />
              <Text style={styles.label}> {"  "} Direccion: </Text>
              <Text style={styles.text}>{restauranteData.Direccion}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="book-open" size={18} color="black" />
              <Text style={styles.label}> {"  "} Numero: </Text>
              <Text style={styles.text}>{restauranteData.Numero}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="dna" size={18} color="black" />
              <Text style={styles.label}> {"  "} Abre desde las: </Text>
              <Text style={styles.text}>{restauranteData.Abertura}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="tree" size={18} color="black" />
              <Text style={styles.label}> {"  "} Cierra a las: </Text>
              <Text style={styles.text}>{restauranteData.Cierre}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative", // Para posicionar el texto sobre la imagen
  },
  overlayContainer: {
    position: "absolute",
    top: 250,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  overlayText: {
    width: "100%",
    fontSize: 30,
    fontWeight: "900",
    color: "white",
    backgroundColor: "rgba(116, 116, 116, 0.342)",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  contenedor_datos: {
    marginVertical: 20,
    alignSelf: "center",
    width: "85%",
    height: "auto",
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    justifyContent: "space-around",
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
  },
  imagenContainer: {
    position: 'relative',
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  TituloMap: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  regresarButton: {
    position: 'absolute',
    top: 60,
    left: 15,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    padding: 20,
    borderRadius: 5,
  },
  regresarButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

export default DescripcionRestaurante;
