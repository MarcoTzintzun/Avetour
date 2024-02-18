import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const SeccionAves = () => {
      // Supongamos que tienes un array de objetos de aves
      const avesData = [
        { id: '1', nombre: 'No' },
        { id: '7', nombre: 'Si' },
        { id: '8', nombre: 'Eyy' },
        { id: '2', nombre: 'Gorrion' },
        { id: '3', nombre: 'Colibrí' },
        { id: '4', nombre: 'Colibrí' },
        { id: '5', nombre: 'Colibrí' },
        { id: '6', nombre: 'Colibrí' },
        // Agrega más aves según sea necesario
      ];
    
      const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text>{item.nombre}</Text>
        </View>
      );
    
      return (
        <View style={styles.container}>
          <FlatList
            data={avesData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    });
    
    
export default SeccionAves;
