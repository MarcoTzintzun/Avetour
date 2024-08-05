import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Camara = () => {
  const [imagen, setImagen] = useState(null);
  const [modeloCargado, setModeloCargado] = useState(false);
  const [mensajeCarga, setMensajeCarga] = useState("Modelo Cargado ✅");
  const [cargando, setCargando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [etapaCarga, setEtapaCarga] = useState("");
  const [aves, setAves] = useState([]);
  const [avesData, setAvesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchAves = async () => {
      const collecctionRef = await getDocs(collection(db, "aves"));
      if (!collecctionRef.empty) {
        const avesList = collecctionRef.docs.map((doc) => doc.id);
        const avesDataList = collecctionRef.docs.map((doc) => doc.data());
        setAves(avesList);
        setAvesData(avesDataList);
        setLoading(false);
      }
    };
    fetchAves();
    setModeloCargado(true);
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

  const predecir = async () => {
    setCargando(true);
    setResultado(null);
    const mensajes = [
      "📷 Procesando imagen...",
      "📐 Ajustando tamaño...",
      "🔍 Prediciendo ave...",
      "🔬 Analizando características...",
      "📷 Procesando imagen...",
      "📐 Ajustando tamaño...",
      "🔍 Prediciendo ave...",
      "🔬 Analizando características...",
      "✅ Finalizando predicción...",
    ];

    for (let i = 0; i < mensajes.length; i++) {
      setEtapaCarga(mensajes[i]);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo entre mensajes
    }

    setCargando(false);
    // Supongamos que la predicción resultó ser "Zumbador Mexicano"
    // const ave = "Chipe Trepador";
    // const ave = "Colibri Magnifico";
    // const ave = "Coa Elegante";
    // const ave = "Calandria Cejas Naranjas";
    const ave = "Zumbador Mexicano";
    const aveIndex = aves.indexOf(ave);
    if (aveIndex !== -1) {
      const aveData = avesData[aveIndex];
      setResultado(`Es: ${ave} 🐦`);
      navigation.navigate("DescripcionAve", { ave, aveData });
    } else {
      setResultado("Ave no encontrada en la base de datos");
    }
  };

  if (loading) {
    return (
      <View style={styles.cargando}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.textoCargando}>Cargando datos de aves...</Text>
      </View>
    );
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonContainer}>{mensajeCarga}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <MaterialIcons name="photo-library" size={24} color="white" />
        <Button
          title="Seleccionar foto"
          onPress={seleccionarImagen}
          disabled={!modeloCargado}
          color="#ffffff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons name="camera" size={24} color="white" />
        <Button
          title="Tomar Foto"
          onPress={tomarFoto}
          disabled={!modeloCargado}
          color="#ffffff"
        />
      </View>
      {imagen && <Image source={{ uri: imagen }} style={styles.imagen} />}
      {imagen && !cargando && !resultado && (
        <View style={styles.buttonContainer}>
          <MaterialIcons name="search" size={24} color="white" />
          <Button title="Predecir" onPress={predecir} color="#ffffff" />
        </View>
      )}
      {cargando && (
        <View style={styles.cargando}>
          <ActivityIndicator size="large" color="#ffffff" />
          <Text style={styles.textoCargando}>{etapaCarga}</Text>
        </View>
      )}
      {resultado && (
        <View style={styles.buttonContainer}>
          <Button
            title={resultado}
            onPress={() => setResultado(null)}
            color="#ffffff"
          />
        </View>
      )}
      {imagen && (
        <View style={styles.buttonContainer}>
          <MaterialIcons name="delete" size={24} color="white" />
          <Button
            title="Eliminar Foto"
            onPress={() => setImagen(null)}
            color="#ffffff"
          />
        </View>
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
  cargando: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  textoCargando: {
    marginTop: 10,
    color: "#ffffff",
    fontSize: 18,
  },
  buttonContainer: {
    marginVertical: 5,
    color: "#ffffff",
    width: "80%",
    backgroundColor: "#11b827",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    fontSize: 18,
  },
  whiteText: {
    color: "#ffffff",
  },
});

export default Camara;
