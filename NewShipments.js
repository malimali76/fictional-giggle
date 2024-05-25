import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, TextInput } from 'react-native';
import { HomeScreen } from './Dashboard';
import {uri} from './assets/uri'
import { styles } from './assets/Styles';

export function NewShipment({navigation, route}){
    shipperid = route.params;
    shipperID = route.params;

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
      navigation.navigate('Home', {parameters:{shipperID}})
    }
    else{
      console.error('Enter A PickUp Location')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Create A New Shipment</Text>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextTitle} value={title} placeholder='Shipment Title'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextLocation} value={location} placeholder='Pick Up Location'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextDestination} value={destination} placeholder='Destination'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextCategory} value={category} placeholder='Shipment Category'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextDescription} value={description} placeholder='Description'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextItemAmount} value={itemAmount} placeholder='Item Amount'></TextInput>

      <Pressable style={[styles.Pillbutton,{width: 160}]} onPress={CreateShipment}><Text style={styles.text}>Create Shipmentt</Text></Pressable>

    </View>
  )
}

