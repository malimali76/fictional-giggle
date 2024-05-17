import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView } from 'react-native';

const uri = 'http://192.168.0.7:3000/'

export function ShipmentDetails({navigation, route}){
    const parameters = route.params.shipment;
    return(
      <View style={styles.container}>
        <Text>Title: {parameters.title}</Text>
        <Text>Pick Up Location: {parameters.location}</Text>
        <Text>Pick Up Destination: {parameters.destination}</Text>
        <Text>Category: {parameters.category}</Text>
        <Text>Description: {parameters.description}</Text>
        <Text>Item Amount: {parameters.itemAmount}</Text>

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
