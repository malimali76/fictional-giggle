import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

//Figure out the error when navigating from create shipment screen. Parameter Error

const uri = 'http://192.168.0.7:3000/'

export function HomeScreen({navigation, route}) {
  
      const {parameters} = route.params;
      shipperID = parameters.shipperID;

    const [shipments, setShipments] = useState([])

    const response = fetch(uri + 'dashboard/' + parameters.shipperID)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

    return(
      <View  style={styles.container}>
          <Text>Shipments:</Text>
          <FlatList
            data={shipments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Pressable style={styles.shipment} onPress={() => {navigation.navigate('ShipmentDetails', {shipment: item})}}>
                <Text style={styles.text}>{item.location} to {item.destination}</Text>
                </Pressable>
                
                {/* Render other shipment properties as needed */}
              </View>
            )}
          />

          <View>
          <Pressable style={styles.shipment} onPress={() => {navigation.navigate('NewShipment', shipperID)}}>
          <Text  style={styles.text}>Ceate A new Shipment</Text>
          </Pressable>
          </View>
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
      fontSize: 14,
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
      height: 50,
      elevation: 3,
      backgroundColor: 'black',
      margin: 15
    },
  });
