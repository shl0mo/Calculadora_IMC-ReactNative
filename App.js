import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [imc, setImc] = useState('0')
  const [resultado, setResultado] = useState('')
  const [corBgResultado, setCorBgResultado] = useState('#ecf0f1')
  const [corResultado, setCorResultado] = useState('#000')

  const defineImc = () => {
    let peso_str = String(peso)
    let altura_str = String(altura)
    if (peso_str.includes(',')) {
      peso_str = peso_str.replace(',', '.')
    }
    if (altura_str.includes(',')) {
      altura_str = altura_str.replace(',', '.')
    }
    let _peso = parseFloat(peso_str)
    let _altura = parseFloat(altura_str)
    let imc = _peso/(_altura*_altura)
    let imc_str = String(imc)
    if (!imc_str.includes('.')) {
      setImc(imc_str)
    } else {
      setImc(imc.toFixed(2))
    }
    if (imc < 17) {
      setResultado('Muito abaixo do peso')
      setCorBgResultado('#1d3557')
    } else if (imc >= 17 && imc < 18.5) {
      setResultado('Abaixo do peso')
      setCorBgResultado('#a8dadc')
    } else if (imc >= 18.5 && imc < 25) {
      setResultado('Peso normal')
      setCorBgResultado('#6a994e')
      setCorResultado('#FFF')
    } else if (imc >= 25 && imc < 30) {
      setResultado('Acima do peso')
      setCorBgResultado('#fb8b24')
      setCorResultado('#FFF')
    } else if (imc >= 30 && imc < 35) {
      setResultado('Obesidade I')
      setCorBgResultado('#ff002b')
      setCorResultado('#FFF')
    } else if (imc >= 35 && imc < 40) {
      setResultado('Obesidade severa')
      setCorBgResultado('#c1121f')
      setCorResultado('#FFF')
    } else if (imc > 40) {
      setResultado('Obesidade mórbida')
      setCorBgResultado('#780000')
      setCorResultado('#FFF')
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Calculadora de IMC</Text>
      </View>
      <View style={styles.containers}>
        <TextInput style={styles.inputs} placeholder='Altura em metros (m)' value={altura} onChangeText={dado_altura => setAltura(dado_altura)}/>
        <TextInput style={[styles.inputs, styles.marginTop15]} placeholder='Massa em quilogramas (kg)' value={peso} onChangeText={dado_peso => setPeso(dado_peso)}/>
      </View>
      <View style={styles.containers}>
        <TouchableOpacity style={styles.botao} onPress={() => { defineImc() }
        }>
          <Text style={styles.textoBotao}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containers}>
        <View style={[styles.boxResultado, { backgroundColor: corBgResultado }]}>
          <Text style={[styles.stringImc, { color: corResultado }]}>IMC</Text>
          <Text style={[styles.imc, { color: corResultado }]}>{imc}</Text>
          <Text style={[styles.stringResultado, { color: corResultado }]}>{resultado}</Text>
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
