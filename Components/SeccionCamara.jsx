import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Camara = () => {
  const [imagen, setImagen] = useState(null);

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
      <Button title="Seleccionar Foto" onPress={seleccionarImagen} />
      <Button title="Tomar Foto" onPress={tomarFoto} />
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
