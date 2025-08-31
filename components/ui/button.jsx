import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Botao({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
  },
  buttonText: {
    padding: 8,
    fontSize: 25,
    backgroundColor: '#EA1B21',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    elevation: 4,
  },
});

export default Botao;