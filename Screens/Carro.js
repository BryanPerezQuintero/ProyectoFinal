import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from '../Firebase'

const Carro = ({ Matrícula }) => {
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    const carroRef = firebase.database().ref(`carros/${Matrícula}`);
    carroRef.on('value', (snapshot) => {
      setCarro(snapshot.val());
    });

    return () => {
      carroRef.off();
    };
  }, [Matrícula]);

  if (!carro) {
    return null;
  }

  return (
    <View>
      <Text>{carro.Año}</Text>
      <Text>{carro.Clasficación}</Text>
      <Text>{carro.Color}</Text>
      <Text>{carro.Marca}</Text>
      <Text>{carro.Matrícula}</Text>
      <Text>{carro.Modelo}</Text>
      <Text>{carro.Nombre_titular}</Text>
      
    </View>
  );
};

export default Carro;
