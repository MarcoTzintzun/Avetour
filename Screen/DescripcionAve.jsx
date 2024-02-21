import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fotoLoro from '../assets/paracho.png'; // Importa la imagen de manera adecuada

const DescripcionAve = ({ navigation, id, foto, nombreCientifico, nombreComercial, peso, edadMaxima, lugaresVistos, descripcion }) => {
  console.log("ESTO RECIBE DESCPCIONAVE",id, foto, nombreCientifico, nombreComercial, peso, edadMaxima, lugaresVistos, descripcion);

  const volverAtras = () => {
    navigation.goBack(); // Función para volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Image source={fotoLoro} style={styles.image} />
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
      <TouchableOpacity onPress={volverAtras}>
        <Text>Volver</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0000',
    padding: 20,
    height: "auto",
    width: "100%",
  },
  image: {
    width: '50%',
    height: 200,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default DescripcionAve;
