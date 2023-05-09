import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import firebase from '../Firebase'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
      <StatusBar style="auto" />
      <Button></Button>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'Top',
  },
});
