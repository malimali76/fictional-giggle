import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { styles } from './assets/Styles';
import {uri} from './assets/uri'
import {Icon} from 'react-native-vector-icons/FontAwesome';

//Figure out the error when navigating from create shipment screen. Parameter Error

export function DriverDashboard({ navigation, route }) {

  const driverid = route.params.driverid

  const [shipments, setShipments] = useState([])

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const response = fetch(uri + 'driver-dashboard/' + driverid)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

  return (
    <View style={[styles.container, { paddingTop: 50 }]}>
      <Text style={[{ color: 'black' }, {fontSize: 20}]}>Shipments</Text>

      <FlatList style={[{width: '100%'}, {borderRadius: 5}]}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable style={[{margin: 10 }, {borderBottomWidth: 1}, {borderColor: 'grey'}, {height: 70}]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item, driverid }) }}>
            <Text style={styles.darktext}>{truncateString(item.location.description)} to {item.destination.description}</Text>
            <Text style={styles.darktext}>{item.category}</Text>
            <Text style={styles.darktext}>{item.itemAmount}</Text>
          </Pressable>
        )}
      />

      <View>
        <Pressable style={styles.Pillbutton} onPress={() => { navigation.navigate('LiveShipments', {driverid } )}}>
          <Text style={styles.text}>Open Offers</Text>
        </Pressable>
      </View>
    </View>
  )
}
