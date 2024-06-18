import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { uri } from './assets/uri'
import { styles } from './assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function ShipmentDetails({ navigation, route }) {
  const shipment = route.params.shipment;
  const driverid = route.params.driverid;
  const shipmentid = route.params.shipment._id

  function deleteshipment() {
    null
  }

  /*async function placebid() {
    bid_data = { driverid, shipmentid }
    if (driverid && shipmentid) {
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
    else {
      console.error('fuckry graan')
    }
  }
*/

function placebid(){
null
}

  if (driverid) {
    return (
      <View style={styles.container2}>

        <View style={{
          height: 80, width: '100%', padding: 10, backgroundColor: Colors.white,
          justifyContent: 'flex-end', elevation: 4
        }}>
          <Text style={styles.header3}>SHIPMENT DETAILS</Text>
        </View>

        <View style={{ width: '100%', flex: 1, padding: 10, paddingTop: 30, paddingBottom: 20 }}>

          <View style={{ height: 500 }}>
            <ScrollView style={{
              width: '100%', backgroundColor: Colors.white, elevation: 4, borderRadius: 10,

            }}>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Title</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>shipment title daddy{shipment.title}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Pick Up Location</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.location.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Pick Up Destination</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.destination.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Category</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.category}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Description</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Quantity</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.itemAmount}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Driver</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.driverid}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Bids</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>0 Bids</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Current Offer</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>$32,172 offer</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Distance</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}> 32 km</Text>
              </View>

            </ScrollView>
          </View>

          <Pressable onPress={() => { placebid(), navigation.navigate('Bid', { driverid, shipment }) }}
            style={{
              height: 60, width: '100%', backgroundColor: Colors.white, padding: 10,
              alignItems: 'center', flexDirection: 'row', marginBottom: 20,
              marginTop: 30, elevation: 3, borderRadius: 10
            }}>
            <Text style={styles.header3}>Place A Bid On Shipment</Text>
            <Icon name='chevron-right' size={15} style={{ position: 'absolute', right: 10 }} />
          </Pressable>

        </View>


      </View>
    )

  }
  else {
    return (
      <View style={styles.container2}>

        <View style={{
          height: 80, width: '100%', padding: 10, backgroundColor: Colors.white,
          justifyContent: 'flex-end', elevation: 4
        }}>
          <Text style={styles.header3}>SHIPMENT DETAILS</Text>
        </View>

        <View style={{ width: '100%', flex: 1, padding: 10, paddingTop: 30, paddingBottom: 20 }}>

          <View style={{ height: 500 }}>
            <ScrollView style={{
              width: '100%', backgroundColor: Colors.white, elevation: 4, borderRadius: 10,

            }}>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Title</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>shipment title daddy{shipment.title}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Pick Up Location</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.location.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, marginTop: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Pick Up Destination</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.destination.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Category</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.category}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Description</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.description}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Quantity</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.itemAmount}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Driver</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>{shipment.driverid}</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Bids</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>0 Bids</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Current Offer</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}>$32,172 offer</Text>
              </View>

              <View style={{ height: 60, padding: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: Colors.light }}>
                <Text>Distance</Text>
                <Text style={[styles.header3, { marginLeft: 10 }]}> 32 km</Text>
              </View>

            </ScrollView>
          </View>



          <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={deleteshipment}><Text style={styles.text}>delete shipment</Text></Pressable>
          <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={deleteshipment}><Text style={styles.text}>Update shipment</Text></Pressable>
        </View>


      </View>
    )

  }

}
