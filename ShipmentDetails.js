import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView } from 'react-native';
import {uri} from './assets/uri'
import { styles } from './assets/Styles';

export function ShipmentDetails({navigation, route}){
    const parameters = route.params.shipment;

    function deleteshipment(){
null
    }

    return(
      <View style={{}}>
        <Text>Title: {parameters.title}</Text>
        <Text>Pick Up Location: {parameters.location}</Text>
        <Text>Pick Up Destination: {parameters.destination}</Text>
        <Text>Category: {parameters.category}</Text>
        <Text>Description: {parameters.description}</Text>
        <Text>Item Amount: {parameters.itemAmount}</Text>
        <Pressable style={styles.button} onPress={deleteshipment}><Text style={styles.text}>Cancel Shipmentt</Text></Pressable>

      </View>
    )
}

