import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DescripcionAve from '../Screen/DescripcionAve';

const SeccionAves = () => {
  const navigation = useNavigation();

  const [aveSeleccionada, setAveSeleccionada] = useState(null);

  const avesData = [
    { 
      id: '1', 
      nombre: 'Loro', 
      foto: 'https://via.placeholder.com/150', 
      nombreCientifico: 'Psittacus Psittacus', 
      nombreComercial: 'Lorito feliz', 
      peso: '400 g', 
      edadMaxima: '50 años', 
      lugaresVistos: 'Bosques tropicales', 
      descripcion: 'El loro es un ave de colores vivos y plumaje muy llamativo. Suele imitar sonidos y palabras.' 
    },
    { 
      id: '2', 
      nombre: 'Pájaro Carpintero', 
      foto: 'https://via.placeholder.com/150', 
      nombreCientifico: 'Picidae Carpinterius', 
      nombreComercial: 'Carpinterito', 
      peso: '200 g', 
      edadMaxima: '10 años', 
      lugaresVistos: 'Bosques templados', 
      descripcion: 'El pájaro carpintero es conocido por su habilidad para picar madera y buscar insectos.' 
    },
    { 
      id: '3', 
      nombre: 'Aguilucho', 
      foto: 'https://via.placeholder.com/150', 
      nombreCientifico: 'Buteo Buteo', 
      nombreComercial: 'Aguilucho andino', 
      peso: '1 kg', 
      edadMaxima: '25 años', 
      lugaresVistos: 'Montañas', 
      descripcion: 'El aguilucho es un ave rapaz que se alimenta principalmente de pequeños mamíferos y aves.' 
    },
    // Agrega más aves aquí con los campos solicitados
  ];

  const seleccionarAve = (ave) => {
    setAveSeleccionada(ave);
    navigation.navigate("DescripcionAve", { ave: ave });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => seleccionarAve(item)}>
      <View style={styles.item}>
        <MaterialCommunityIcons name="bird" size={24} color="#000" />
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{item.nombre}</Text>
          <Text style={styles.itemSubText}>{item.nombreCientifico}</Text>
        </View>
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
  itemTextContainer: {
    marginLeft: 10,
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemSubText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default SeccionAves;
