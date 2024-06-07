import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView } from 'react-native';
import { uri } from './assets/uri'
import { styles } from './assets/Styles';

export function ShipmentDetails({ navigation, route }) {
  const shipment = route.params.shipment;
  const driverid = route.params.driverid;
  const shipmentid = route.params.shipment._id
  console.log(route.params)

  function deleteshipment() {
    null
  }

  async function placebid() {
    bid_data = {driverid, shipmentid}
    if(driverid && shipmentid){
      try {
        const response = await fetch(uri + 'new-bid/' + driverid, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bid_data),
        }
      );
      } 
      catch (error) {
        console.error("Error:", error);
      }
    }
    else{
      console.error('fuckry graan')
    }
    } 


  if (driverid) {
    return (
      <View style={styles.container}>
        <Text style={styles.darktext}>Title: {shipment.title}</Text>
        <Text style={styles.darktext}>Pick Up Location: {shipment.location.description}</Text>
        <Text style={styles.darktext}>Pick Up Destination: {shipment.destination.description}</Text>
        <Text style={styles.darktext}>Category: {shipment.category}</Text>
        <Text style={styles.darktext}>Description: {shipment.description}</Text>
        <Text style={styles.darktext}>Item Amount: {shipment.itemAmount}</Text>
        <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={() => {placebid(), navigation.navigate('DriverDashboard', {driverid} )}}><Text style={styles.text}>Place Bid</Text></Pressable>
      </View>
    )

  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.darktext}>Title: {shipment.title}</Text>
        <Text style={styles.header3}>Pick Up Location: {shipment.location.description}</Text>
        <Text style={styles.header3}>Pick Up Destination: {shipment.destination.description}</Text>
        <Text style={styles.darktext}>Category: {shipment.category}</Text>
        <Text style={styles.darktext}>Description: {shipment.description}</Text>
        <Text style={styles.darktext}>Item Amount: {shipment.itemAmount}</Text>
        <Text style={styles.darktext}>driver: {shipment.driverid}</Text>
        <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={deleteshipment}><Text style={styles.text}>delete shipment</Text></Pressable>
        <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={deleteshipment}><Text style={styles.text}>Update shipment</Text></Pressable>
      </View>
    )

  }

}
