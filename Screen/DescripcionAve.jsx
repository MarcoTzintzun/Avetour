import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importa el icono que desees usar
import Map from "../Components/Map";

const DescripcionAve = ({ route }) => {
  const { ave, aveData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image
          source={
            aveData.Imagen
              ? { uri: aveData.Imagen }
              : require("../assets/Aves/1.jpg")
          }
          style={styles.image}
        />
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayText}>{ave}</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.contenedor_datos}>
            <Text style={styles.row}>
              <FontAwesome5 name="microscope" size={18} color="black" />
              <Text style={styles.label}> {"  "} Nombre Científico: </Text>
              <Text style={styles.text}>{aveData.NombreCientífico}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="book-open" size={18} color="black" />
              <Text style={styles.label}> {"  "} Clase: </Text>
              <Text style={styles.text}>{aveData.Clase}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="dna" size={18} color="black" />
              <Text style={styles.label}> {"  "} Familia: </Text>
              <Text style={styles.text}>{aveData.Familia}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="tree" size={18} color="black" />
              <Text style={styles.label}> {"  "} Filo: </Text>
              <Text style={styles.text}>{aveData.Filo}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="genderless" size={18} color="black" />
              <Text style={styles.label}> {"  "} Género: </Text>
              <Text style={styles.text}>{aveData.Género}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="sort-numeric-up" size={18} color="black" />
              <Text style={styles.label}> {"  "} Orden: </Text>
              <Text style={styles.text}>{aveData.Orden}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="city" size={18} color="black" />
              <Text style={styles.label}> {"  "} Provincia: </Text>
              <Text style={styles.text}>{aveData.ProvinciaEstado}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="globe" size={18} color="black" />
              <Text style={styles.label}> {"  "} Reino: </Text>
              <Text style={styles.text}>{aveData.Reino}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="map-marked-alt" size={18} color="black" />
              <Text style={styles.label}> {"  "} Localidad: </Text>
              <Text style={styles.text}>{aveData.Localidad}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="info-circle" size={18} color="black" />
              <Text style={styles.label}> {"  "} Descripción: </Text>
              <Text style={styles.text}>{aveData.Descripcion}</Text>
            </Text>
            <Text style={styles.TituloMap}>El ave fue vista o puede encontrarse en esta región:</Text>
            <Map latitud={aveData.LatitudDecimal} longitud={aveData.LongitudDecimal} />
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
    fontSize: 30, // Tamaño de letra grande
    fontWeight: "900",
    color: "white", // Color del texto
    backgroundColor: "rgba(116, 116, 116, 0.342)", // Fondo semitransparente para el texto
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
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  TituloMap: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DescripcionAve;
