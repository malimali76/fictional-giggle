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
      <View style={styles.container}>
        <Text style={styles.darktext}>Title: {parameters.title}</Text>
        <Text style={styles.darktext}>Pick Up Location: {parameters.location.description}</Text>
        <Text style={styles.darktext}>Pick Up Destination: {parameters.destination.description}</Text>
        <Text style={styles.darktext}>Category: {parameters.category}</Text>
        <Text style={styles.darktext}>Description: {parameters.description}</Text>
        <Text style={styles.darktext}>Item Amount: {parameters.itemAmount}</Text>
        <Pressable style={[styles.Pillbutton, {width: 150}]} onPress={deleteshipment}><Text style={styles.text}>Place Bid</Text></Pressable>

      </View>
    )
}
