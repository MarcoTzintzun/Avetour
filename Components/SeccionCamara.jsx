// Camara.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Camara = () => (
  <View style={styles.container}>
    <Text>Cámara</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Camara;
