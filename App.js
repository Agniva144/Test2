// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Lol from './Components/lol.js';
import Torn from './Components/torn.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Torn" component={Torn} /> */}
        <Stack.Screen name="Lol" component={Lol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Lol')} style={styles.button}>
        <Text style={styles.buttonText}>Open Lol Component</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Torn')} style={styles.button}>
        <Text style={styles.buttonText}>Open Torn Component</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
