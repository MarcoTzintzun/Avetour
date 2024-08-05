import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importa el icono que desees usar
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // Asegúrate de importar el icono desde la biblioteca que estés utilizando
import Map from "../Components/Map";
import { Linking } from "react-native";

const DescripcionRestaurante = ({ route }) => {
  const { restaurante, restauranteData } = route.params;
  const navigation = useNavigation();

  const onRegresarPress = () => {
    navigation.navigate("MainAppContent");
  };

  const onPhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
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
        <Image source={require("../assets/Aves/2.jpg")} style={styles.image} />
      </View>
      <View style={styles.restauranteContainer}>
        <Image
          source={{ uri: restauranteData.Imagen }}
          style={styles.restauranteImage}
        />
        <Text style={styles.restauranteNombre}>{restaurante}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.contenedor_datos}>
            <Text style={styles.row}>
              <FontAwesome5 name="map-marker-alt" size={18} color="black" />
              <Text style={styles.label}> {"  "} Dirección: </Text>
              <Text style={styles.text}>{restauranteData.Direccion}</Text>
            </Text>

            <TouchableOpacity
              style={styles.row}
              onPress={() => onPhonePress(restauranteData.Numero)}
            >
              <FontAwesome5 name="phone" size={18} color="black" />
              <Text style={styles.label}> {"  "} Número: </Text>
              <Text style={styles.text}>{restauranteData.Numero}</Text>
            </TouchableOpacity>

            <Text style={styles.row}>
              <FontAwesome5 name="clock" size={18} color="black" />
              <Text style={styles.label}> {"  "} Abre desde las: </Text>
              <Text style={styles.text}>{restauranteData.Abertura}</Text>
            </Text>

            <Text style={styles.row}>
              <FontAwesome5 name="clock" size={18} color="black" />
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
  },
  imagenContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  restauranteContainer: {
    flexDirection: "row", // Para alinear la imagen y el texto en una fila
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  restauranteImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    resizeMode: "cover",
  },
  restauranteNombre: {
    fontSize: 30,
    fontWeight: "900",
    marginTop: 10,
    marginLeft: 10,
    color: "black",
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
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
  },
  regresarButton: {
    position: "absolute",
    top: 60,
    left: 15,
    zIndex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 5,
  },
  regresarButtonText: {
    fontSize: 16,
    color: "black",
  },
});

export default DescripcionRestaurante;
