import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import Input from '../components/ui/input';
import Botao from '../components/ui/button';

const Form = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validationInput = () => {
    if (email.trim() === '' || senha.trim() === '') {
      Alert.alert('Preencha todos os campos!');
      return;
    } else {
      Alert.alert('Dados enviados!');
      setEmail('');
      setSenha('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box_logo}>
        <Image
          source={require('../assets/images/logo-abragas-contorno.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.box_form}>
        <Text style={styles.titulo}>
          Entre com credenciais fornecidas pelo suporte
        </Text>
        <Input
          placeholder="abragas@gmail.com"
          value={email}
          onChangeText={setEmail}
        />
        <Input placeholder="*********" value={senha} onChangeText={setSenha} />
        <Botao title="Entrar" onPress={validationInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box_logo: {
    flex: 1,
    backgroundColor: '#32338D',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 225,
    height: 225,
    resizeMode: 'cover',
    margin: 50,
  },
  box_form: {
    width: '100%',
    height: 500,
    paddingTop: 40,
    padding: 30,
    gap: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    marginTop: -40,
  },
  titulo: {
    fontSize: 28,
    fontFamily: 'Oswald-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1D3557',
  },
});

export default Form;
