import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({placeholder, value, onChangeText}) => {
  return(
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input:{
    fontSize: 20,
    fontWeight: '500',
    height: 'auto',
    borderWidth: 0,
    borderBottomColor: '#32338D',
    borderBottomWidth: 2,
    paddingHorizontal: 5,
  },
});

export default Input;