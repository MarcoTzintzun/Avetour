import React, { useRef, useState, useEffect } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const INITIAL_REGION = {
  latitude: 19.4085,
  longitude: -102.058,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5,
};


const Map = ({ latitud, longitud }) => {
  const mapRef = useRef();
  const [coordsRecibidas, setCoordsRecibidas] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (datos.length > 0 && !coordsRecibidas) {
      setCoordsRecibidas(true);
    }
  }, [datos, coordsRecibidas]);

  const getDatos = (coords) => {
    if (coords) {
      setDatos(coords);
    }
  };

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: latitud,
        longitude: longitud,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        mapType="hybrid"
        loadingEnabled={true}
        toolbarEnabled={false}
        clusteringEnabled={true}
        clusterColor="#00abef70"
        maxZoomLevel={10}
        minZoomLevel={2}
        initialRegion={INITIAL_REGION}
      >
        <Marker
          coordinate={{
            latitude: latitud,
            longitude: longitud,
          }}
        >
          <MaterialCommunityIcons name="bird" size={30} color="#fff" />
        </Marker>
      </MapView>
      <View style={styles.buttonContainer}>
        <Button color="#fff" title="Centrar" onPress={centerMap} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom:100,
  },
  map: {
    width: "100%",
    height: 350,
    borderRadius:20,
  },
  buttonContainer: {
    backgroundColor: "#0000007f",
    borderRadius:20,
    padding:5,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});

export default Map;
