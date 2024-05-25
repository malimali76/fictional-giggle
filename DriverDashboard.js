import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { styles } from './assets/Styles';
import {uri} from './assets/uri'

//Figure out the error when navigating from create shipment screen. Parameter Error

export function DriverDashboard({ navigation, route }) {

  const { parameters } = route.params;
  driverID = parameters.driverID;

  const [shipments, setShipments] = useState([])

  const response = fetch(uri + 'driver-dashboard/' + parameters.driverID)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <Text style={[{ color: 'white' }, {fontSize: 20}]}>Shipments</Text>

      <FlatList style={[{backgroundColor: 'white'},{width: 300}, {borderRadius: 5}]}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable style={[{ backgroundColor: 'green', margin: 10 }]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item }) }}>
            <Text style={{ color: 'white' }}>{item.location} to {item.destination}</Text>
          </Pressable>
        )}
      />

      <View>
        <Pressable style={[{}]} onPress={() => { navigation.navigate('LiveShipments', {parameters: driverID}) }}>
          <Text style={{ color: 'white' }}>Open Offers</Text>
        </Pressable>
      </View>
    </View>
  )
}
