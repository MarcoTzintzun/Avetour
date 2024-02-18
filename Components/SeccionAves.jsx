import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DescripcionAve from '../Screen/DescripcionAve'; // Importamos el componente de DescripcionAve

const SeccionAves = () => {
  const [aveSeleccionada, setAveSeleccionada] = useState(null); // Estado para almacenar el ave seleccionada

  const avesData = [
    { id: '1', nombre: 'No', descripcion: 'Descripción de No' },
    { id: '7', nombre: 'Si', descripcion: 'Descripción de Si' },
    { id: '8', nombre: 'Eyy', descripcion: 'Descripción de Eyy' },
    { id: '2', nombre: 'Gorrion', descripcion: 'Descripción de Gorrion' },
    { id: '3', nombre: 'Colibrí', descripcion: 'Descripción de Colibrí' },
    { id: '4', nombre: 'Colibrí', descripcion: 'Descripción de Colibrí' },
    { id: '5', nombre: 'Colibrí', descripcion: 'Descripción de Colibrí' },
    { id: '6', nombre: 'Colibrí', descripcion: 'Descripción de Colibrí' },
  ];

  const renderItem = ({ item }) => (
    console.log("Antes de TouchableOpacity"),
    <TouchableOpacity onPress={() => setAveSeleccionada(item)}> 
      <View style={styles.item}>
        <MaterialCommunityIcons name="bird" size={24} color="#000" />
        <Text style={styles.itemText}>{item.nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={avesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {aveSeleccionada && <DescripcionAve {...aveSeleccionada} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%', 
    alignSelf: 'center', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    borderRadius: 20, 
    marginVertical: 10, 
  },
  item: {
    backgroundColor: '#B7D3A2',
    borderRadius: 20, 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20,
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10, 
  },
});

export default SeccionAves;
