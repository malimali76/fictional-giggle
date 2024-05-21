import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

//Figure out the error when navigating from create shipment screen. Parameter Error

const uri = 'http://192.168.0.35:3000/'

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
              <View style={{}}>
                <Pressable style={[styles.Pillbutton, {width: 300}]} onPress={() => {navigation.navigate('ShipmentDetails', {shipment: item})}}>
                <Text style={styles.text}>{item.location} to {item.destination}</Text>
                </Pressable>
                
                {/* Render other shipment properties as needed */}
              </View>
            )}
          />

          <View>
          <Pressable style={[styles.Pillbutton,  {width: 150}]} onPress={() => {navigation.navigate('NewShipment', shipperID)}}>
          <Text  style={styles.text}>New shipment</Text>
          </Pressable>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  TextBox: {
  height: 50,
  width: 300,
  paddingLeft: 15,
  justifyContent: 'center',
  borderRadius: 15,
  elevation: 3,
  margin: 10,
  backgroundColor: 'white'
  },
  Pillbutton: {
    backgroundColor: 'lightgreen',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});
