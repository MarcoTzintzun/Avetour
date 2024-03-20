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

const SeccionAves = () => {
  const navigation = useNavigation();
  const [aveSeleccionada, setAveSeleccionada] = useState(null);
  const [Ave, setAve] = useState(null);
  const [AveData, setAveData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ey = async () => {
      const collecctionRef = await getDocs(collection(db, "aves"));
      if (!collecctionRef.empty) {
        const A = collecctionRef.docs.map((doc) => doc.id);
        const AD = collecctionRef.docs.map((doc) => doc.data());
        setAve(A);
        setAveData(AD);
        setLoading(false);
      }
    };
    ey();
  }, []);

  const seleccionarAve = (ave, aveData) => {
    setAveSeleccionada(ave);
    navigation.navigate("DescripcionAve", { ave: ave, aveData: aveData });
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

  const renderItem = ({ item, scientificName, imageURL, index }) => (
    <TouchableOpacity onPress={() => seleccionarAve(item, AveData[index])}>
      <ImageBackground
        source={
          imageURL != "" ? { uri: imageURL } : require("../assets/Aves/1.jpg")
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
            <Text style={styles.itemSubText}>{scientificName}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={Ave}
      renderItem={({ item, index }) => {
        const scientificName =
          AveData && AveData[index] ? AveData[index].NombreCientífico : "";
        const imageURL = AveData && AveData[index] ? AveData[index].Imagen : "";
        return (
          <View key={index} style={styles.itemContainer}>
            {renderItem({ item, scientificName, imageURL, index })}
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
    backgroundColor: "#00000045",
    borderRadius: 20,
    width: "100%",
    height: "auto",
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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
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

export default SeccionAves;
