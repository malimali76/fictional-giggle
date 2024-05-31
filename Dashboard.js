import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { styles } from './assets/Styles';
import {uri} from './assets/uri'
import { Colors } from 'react-native/Libraries/NewAppScreen';
//Figure out the error when navigating from create shipment screen. Parameter Error

export function HomeScreen({ navigation, route }) {

  const { parameters } = route.params;
  shipperID = parameters.shipperID;

  const [shipments, setShipments] = useState([])

  const response = fetch(uri + 'dashboard/' + parameters.shipperID)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

  return (
    <View style={[styles.container, { paddingTop: 30 }]}>
      <Text style={styles.headerText}>Shipments</Text>

      <FlatList style={[{width: '100%'}, {borderRadius: 5}]}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable style={[{marginLeft: 15}, {marginRight: 15}, {paddingLeft: 15}, {borderTopWidth: 1}, {borderColor: 'grey'}, {height: 70}]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item }) }}>
            <Text style={styles.header2}>{item.location.description} to {}</Text>
            <Text style={styles.darktext}>{item.category}</Text>
            <Text style={styles.darktext}>{item.itemAmount}</Text>
          </Pressable>
        )}
      />

      <View>
        <Pressable style={[styles.Pillbutton, {width: 170}]} onPress={() => { navigation.navigate('setlocation', shipperID) }}>
          <Text style={styles.text}>New Shipment</Text>
        </Pressable>
      </View>
    </View>
  )
}
