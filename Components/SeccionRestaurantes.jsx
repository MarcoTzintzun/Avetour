import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Restaurantes = () => {
  const navigation = useNavigation();
  const [restauranteSeleccionada, setRestauranteSeleccionada] = useState(null);
  const [Restaurante, setRestaurante] = useState(null);
  const [RestauranteData, setRestauranteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ey = async () => {
      const collecctionRef = await getDocs(collection(db, "restaurantes"));
      if (!collecctionRef.empty) {
        const A = collecctionRef.docs.map((doc) => doc.id);
        const AD = collecctionRef.docs.map((doc) => doc.data());
        setRestaurante(A);
        setRestauranteData(AD);
        setLoading(false);
      }
    };
    ey();
  }, []);

  const seleccionarRestaurantes = (restaurante, restauranteData) => {
    setRestauranteSeleccionada(restaurante);
    navigation.navigate("DescripcionRestaurante", { restaurante: restaurante, restauranteData: restauranteData });
  };

  if (loading) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.itemContainer}>
          {[...Array(7)].map((_, index) => (
            <ImageBackground
              key={index}
              source={require("../assets/Aves/1.jpg")}
              style={styles.item}
              imageStyle={styles.itemBackgroundImage}
            >
              <View
                style={{
                  backgroundColor: "#0000001c",
                  borderRadius: 20,
                  width: "100%",
                  height: "auto",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 12,
                }}
              >
                <View>
                  <MaterialCommunityIcons name="bird" size={40} color="#fff" />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText}>####### ######</Text>
                  <Text style={styles.itemSubText}>############</Text>
                </View>
              </View>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
    );
  }

  const renderItem = ({ item, imageURL, index }) => (
    <TouchableOpacity onPress={() => seleccionarRestaurantes(item, RestauranteData[index])}>
      <ImageBackground
        source={
          imageURL = require("../assets/Aves/2.jpg")
        }
        style={styles.item}
        imageStyle={styles.itemBackgroundImage}
      >
        <View style={styles.item2}>
          <View>
            {imageURL != "" ? (
              <Image source={{ uri: imageURL }} style={styles.itemImage} />
            ) : (
              <MaterialCommunityIcons name="bird" size={50} color="#000" />
            )}
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Restaurante}
      renderItem={({ item, index }) => {
        const imageURL = RestauranteData && RestauranteData[index] ? RestauranteData[index].Imagen : "";
        return (
          <View key={index} style={styles.itemContainer}>
            {renderItem({ item, imageURL, index })}
          </View>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    alignItems: "center",
  },
  item: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#009e3d76",
  },
  item2: {
    backgroundColor: "#00000083",
    borderRadius: 20,
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  itemContainer: {
    width: "90%",
    height: "auto",
  },
  itemTextContainer: {
    marginLeft: 10,
    borderRadius: 50,
    padding: 15,
  },
  itemText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 15,
  },

  itemSubText: {
    color: "#d3d3d3",
    fontSize: 11,
    fontStyle: "italic",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  itemBackgroundImage: {
    resizeMode: "cover",
    borderRadius: 15,
  },
});

export default Restaurantes;
