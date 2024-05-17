import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, TextInput } from 'react-native';
import { HomeScreen } from './Dashboard';

const uri = 'http://192.168.0.7:3000/'
export function NewShipment({navigation, route}){
    shipperid = route.params;

    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [destination, setDestination] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [itemAmount, setItemAmount] = useState('')

  const onChangeTextTitle = (inputText) => {
    setTitle(inputText);
  };
  const onChangeTextLocation = (inputText) => {
    setLocation(inputText);
  };
  const onChangeTextDestination = (inputText) => {
    setDestination(inputText);
  };
  const onChangeTextCategory = (inputText) => {
    setCategory(inputText);
  };
  const onChangeTextDescription = (inputText) => {
    setDescription(inputText);
  };
  const onChangeTextItemAmount = (inputText) => {
    setItemAmount(inputText);
  };

  const shipmentData = { title, location, destination, category, description, itemAmount, shipperid }

  async function NewShipment(shipmentData) {
      try {
        const response = await fetch(uri + 'new-shipment/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shipmentData),
        });
      } 
      catch (error) {
        console.error("Error:", error);
      }

  }

  function CreateShipment() {
    if(location != ''){
      console.log('Shipment Created')
      NewShipment(shipmentData)
      navigation.navigate('Home')
    }
    else{
      console.error('Enter A PickUp Location')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Create A New Shipment</Text>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextTitle} value={title} placeholder='Shipment Title'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextLocation} value={location} placeholder='Pick Up Location'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextDestination} value={destination} placeholder='Destination'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextCategory} value={category} placeholder='Shipment Category'></TextInput>
      <TextInput style={styles.TextBoxBig} placeholderTextColor="white" onChangeText={onChangeTextDescription} value={description} placeholder='Description'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextItemAmount} value={itemAmount} placeholder='Item Amount'></TextInput>

      <Pressable style={styles.button} onPress={CreateShipment}><Text style={styles.text}>Create New Shipmentt</Text></Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    TextBox: {
      borderWidth: 2,
      height: 50,
      margin: 10,
      width: 300,
      backgroundColor: 'black',
      borderRadius: 5,
      paddingVertical: 6,
      paddingHorizontal: 16,
      color: 'white',
    },
    TextBoxBig: {
        borderWidth: 2,
        height: 50,
        margin: 10,
        width: 300,
        backgroundColor: 'black',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 16,
        color: 'white',
      },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 5,
      width: 200,
      elevation: 3,
      backgroundColor: 'black',
      margin: 10
    },
    text: {
      fontSize: 11,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    shipment: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 5,
      paddingHorizontal: 16,
      borderRadius: 10,
      width: 300,
      elevation: 3,
      backgroundColor: 'black',
      margin: 15
    },
  });
