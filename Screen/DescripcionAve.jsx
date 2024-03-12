import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DescripcionAve = ({
  nombreCientifico,
  nombreComercial,
  peso,
  edadMaxima,
  lugaresVistos,
  descripcion,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre Científico:</Text>
      <Text style={styles.text}>{nombreCientifico}</Text>
      <Text style={styles.label}>Nombre Comercial:</Text>
      <Text style={styles.text}>{nombreComercial}</Text>
      <Text style={styles.label}>Características:</Text>
      <Text style={styles.text}>Peso: {peso}</Text>
      <Text style={styles.text}>Edad Máxima: {edadMaxima}</Text>
      <Text style={styles.text}>Lugares Vistos: {lugaresVistos}</Text>
      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.text}>{descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DescripcionAve;
