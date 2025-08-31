import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Form from '../screens/form';

export default function App() {
  return (
    <View style={styles.container_form}>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container_form: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
