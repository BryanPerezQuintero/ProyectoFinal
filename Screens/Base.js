import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from './firebase';
import Carro from './Carro';

const ListaDeCarros = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const carrosRef = firebase.database().ref('carros');
    carrosRef.on('value', (snapshot) => {
      const carrosData = snapshot.val();
      const nuevosCarros = [];

      for (let id in carrosData) {
        nuevosCarros.push({ id, ...carrosData[id] });
      }

      setCarros(nuevosCarros);
    });

    return () => {
      carrosRef.off();
    };
  }, []);

  if (carros.length === 0) {
    return (
      <View>
        <Text>No hay carros disponibles</Text>
      </View>
    );
  }

  return (
    <View>
      {carros.map((carro) => (
        <Carro key={carro.id} Matrícula={carro.id} />
      ))}
    </View>
  );
};

export default Base;