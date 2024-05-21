import React, { useState, useEffect } from "react";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as tf from '@tensorflow/tfjs';
import * as FileSystem from 'expo-file-system';
import * as tfReactNative from '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';
import { Asset } from 'expo-asset';

const Camara = () => {
  const [imagen, setImagen] = useState(null);
  const [modeloCargado, setModeloCargado] = useState(false);
  const [mensajeCarga, setMensajeCarga] = useState("Cargando modelo...");

  useEffect(() => {
    const cargarModelo = async () => {
      try {
        await tf.ready();
        const modelJson = require('../assets/model/model.json');
        const modelWeights = require('../assets/model/group1-shard1of1.bin');
        const modelo = await tf.loadGraphModel(bundleResourceIO(modelJson, modelWeights));
        setMensajeCarga("Modelo cargado: yes");
        setModeloCargado(true);
      } catch (error) {
        setMensajeCarga("Error cargando el modelo");
        console.error("Error al cargar el modelo", error);
      }
    };

    cargarModelo();
  }, []);

  const seleccionarImagen = async () => {
    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permiso.granted) {
      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!resultado.canceled) {
        setImagen(resultado.assets[0].uri);
      }
    } else {
      alert("Permiso denegado para acceder a la galería de imágenes.");
    }
  };

  const tomarFoto = async () => {
    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (permiso.granted) {
      const resultado = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!resultado.canceled) {
        setImagen(resultado.assets[0].uri);
      }
    } else {
      alert("Permiso denegado para acceder a la cámara.");
    }
  };

  return (
    <View style={styles.contenedor}>
      <Text>{mensajeCarga}</Text>
      <Button title="Seleccionar Foto" onPress={seleccionarImagen} disabled={!modeloCargado} />
      <Button title="Tomar Foto" onPress={tomarFoto} disabled={!modeloCargado} />
      {imagen && <Image source={{ uri: imagen }} style={styles.imagen} />}
      {imagen && (
        <Button title="Eliminar Foto" onPress={() => setImagen(null)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default Camara;