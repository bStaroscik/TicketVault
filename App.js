import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import logo from './assets/concert.png';

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  let ticketCalcAsync = async () => {
    setText("Ticket Price: $" + (numberOfTickets*99.99).toFixed(2))
    }

  const [numberOfTickets, onChangeNumber] = useState(null);
  const [ticketPrice, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Ticket Vault</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.textinput}
        placeholder="Number of Tickets"
        onChangeText={onChangeNumber}
        value={numberOfTickets}
        keyboardType="numeric"
        />

      <TouchableOpacity
        onPress={ ticketCalcAsync }
        style={ styles.button }>
        <Text style={ styles.buttonText }>Find The Cost</Text>
      </TouchableOpacity>

      
      <Text style={ styles.text }>
        
        {ticketPrice}
        
      </Text>
      
        
        <Image source={logo} style={styles.logo} />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#f98b88",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold'
  },
  logo: {
    width: 449,
    height: 218,
    marginTop: 20,
    resizeMode: "stretch",
    justifyContent: "flex-end"
  },
  textinput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 30,
    fontSize: 30,
    padding: 10
  },
  text: {
    padding: 10,
    fontSize: 36,
    marginBottom: 20
  },
  logoText: {
    fontSize: 56
  },
});
