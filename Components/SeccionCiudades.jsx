// Ciudades.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Ciudades = () => (
  <View style={styles.container}>
    <Text>Ciudades</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Ciudades;
