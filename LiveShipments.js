import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { styles } from './assets/Styles';
import {uri} from './assets/uri'

//Figure out the error when navigating from create shipment screen. Parameter Error

export function LiveShipments({ navigation, route }) {

  const { parameters } = route.params;
  driverID = parameters.driverID;

  const [shipments, setShipments] = useState([])

  const response = fetch(uri + 'driver-dashboard/live-shipments/' + parameters.driverID)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

  return (
    <View style={[styles.container, { paddingTop: 60 }]}>
      <Text style={[{ color: 'white' }, {fontSize: 20}, {fontWeight: 'bold'}]}>Live Shipments</Text>

      <FlatList style={[{width: '100%'}, {borderRadius: 5}]}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable style={[{marginLeft: 15}, {marginRight: 15}, {paddingLeft: 15}, {borderTopWidth: 1}, {borderColor: 'grey'}, {height: 70}]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item }) }}>
            <Text style={styles.darktext}>{item.location} to {item.destination}</Text>
            <Text style={styles.darktext}>{item.category}</Text>
            <Text style={styles.darktext}>{item.itemAmount}</Text>
          </Pressable>
        )}
      />

    </View>
  )
}
