import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const SeccionAves = () => {
  const navigation = useNavigation();
  const [aveSeleccionada, setAveSeleccionada] = useState(null);
  const [Ave, setAve] = useState(null);
  const [AveData, setAveData] = useState(null);

  useEffect(() => {
    const ey = async () => {
      const collecctionRef = await getDocs(collection(db, "aves"));
      if (!collecctionRef.empty) {
        const A = collecctionRef.docs.map((doc) => doc.id);
        const AD = collecctionRef.docs.map((doc) => doc.data());
        setAve(A);
        setAveData(AD);
      }
    };
    ey();
  }, []);

  const seleccionarAve = (ave) => {
    setAveSeleccionada(ave);
    navigation.navigate("DescripcionAve", { ave: ave });
  };

  const renderItem = ({ item, scientificName, imageURL }) => (
    <TouchableOpacity onPress={() => seleccionarAve(item)}>
      <View style={styles.item}>
      {imageURL ? ( 
        <Image source={{ uri: imageURL }} style={styles.itemImage} />
      ) :         <MaterialCommunityIcons name="bird" size={50} color="#000" />
    }
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item}</Text>
          <Text style={styles.itemSubText}>{scientificName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Ave &&
        Ave.map((item, index) => {
          const scientificName =
            AveData && AveData[index] ? AveData[index].NombreCientífico : "";
          const imageURL =
            AveData && AveData[index] ? AveData[index].Imagen : ""; 
          return (
            <View key={index} style={styles.itemContainer}>
              {renderItem({ item, scientificName, imageURL })} 
            </View>
          );
        })}
    </ScrollView>
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
    backgroundColor: "#B7D3A2",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  itemContainer: {
    width: "90%",
    height: "auto",
  },
  itemTextContainer: {
    marginLeft: 10,
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 14,
  },

  itemSubText: {
    fontSize: 11,
    fontStyle: "italic",
    color: "gray",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Para hacer la imagen circular, ajusta el radio de la esquina
    marginRight: 10,
  },
});

export default SeccionAves;
