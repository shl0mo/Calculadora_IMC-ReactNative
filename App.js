import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState(0)
  const [strResultado, setStrResultado] = useState('Resultado')
  return (
    <View style={styles.container}>
      <View>
        <Text>Calculadora IMC</Text>
      </View>
      <View style={styles.containers}>
        <TextInput style={styles.inputs} placeholder='Altura' value={altura} onChangeText={dado_altura => setAltura(dado_altura)}/>
        <TextInput style={[styles.inputs, styles.marginTop15]} placeholder='Peso' value={peso} onChangeText={dado_peso => setPeso(dado_peso)}/>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.botao} onPress={() => {
          setImc(parseFloat(peso)/(parseFloat(altura)*parseFloat(altura)))}}>
          <Text style={styles.colorWhite}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <View style={styles.boxResultado}>
          <Text style={styles.imc}>{imc}</Text>
          <Text>{strResultado}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    borderRadius: 5,
    width: '70%',
    backgroundColor: '#ecf0f1'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 15,
    borderRadius: 5,
    fontFamily: 'Arial',
    width: '70%'
  },
  colorWhite: {
    color: 'white'
  },
  containers: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  marginTop15: {
    marginTop: 15
  },
  boxResultado: {
		backgroundColor: '#ecf0f1',
		width: '70%',
		height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
	},
  imc: {
    fontSize: 50
  }
});
