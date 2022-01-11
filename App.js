import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('0')
  const [resultado, setResultado] = useState('')

  const defineImc = () => {
    let imc = peso/(altura*altura)
    let imc_str = String(imc)
    if (!imc_str.includes('.')) {
      setImc(imc_str)
    } else {
      setImc(imc.toFixed(2))
    }
    if (imc < 17) {
      setResultado('Muito abaixo do peso')
    } else if (imc >= 17 && imc < 18.5) {
      setResultado('Abaixo do peso')
    } else if (imc >= 18.5 && imc < 25) {
      setResultado('Peso normal')
    } else if (imc >= 25 && imc < 30) {
      setResultado('Acima do peso')
    } else if (imc >= 30 && imc < 35) {
      setResultado('Obesidade I')
    } else if (imc >= 35 && imc < 40) {
      setResultado('Obesidade severa')
    } else if (imc > 40) {
      setResultado('Obesidade mórbida')
    }
  } 

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
      </View>
      <View style={styles.containers}>
        <TextInput style={styles.inputs} placeholder='Altura' value={altura} onChangeText={dado_altura => setAltura(dado_altura)}/>
        <TextInput style={[styles.inputs, styles.marginTop15]} placeholder='Peso' value={peso} onChangeText={dado_peso => setPeso(dado_peso)}/>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.botao} onPress={() => { defineImc() }
        }>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <View style={styles.boxResultado}>
          <Text style={styles.stringImc}>IMC</Text>
          <Text style={styles.imc}>{imc}</Text>
          <Text style={styles.stringResultado}>{resultado}</Text>
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
  titulo: {
    fontSize: 20,
    marginBottom: 6
  },
  inputs: {
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
  textoBotao: {
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
  },
  stringResultado: {
    color: 'black',
    fontSize: 17
  }
});
