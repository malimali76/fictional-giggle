import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { api_key } from './assets/keya';

const GOOGLE_PLACES_API_KEY = api_key;
//Figure out the error when navigating from create shipment screen. Parameter Error

export function LiveShipments({ navigation, route }) {

  const driverid = route.params.driverid;
  const [shipments, setShipments] = useState([])

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    shorter = str.split(', ');
    if (shorter.length <= num) {
      return shorter[0].slice(0, 25) + '..';
    }
    return shorter[0];
  };

  const response = fetch(uri + 'driver-dashboard/live-shipments/' + driverid)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))

  const LocationIcon = <Icon name="map-marker" size={15} color='grey' />;
  return (
    <View style={styles.container2}>
      <View style={styles.headerTab}>
        <Text style={styles.header3}>LIVE SHIPMENTS</Text>
      </View>

      <View style={styles.background}>

        <View style={styles.forgroundmain}>


          <FlatList style={[{ width: '100%' }]}
            data={shipments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable style={[{ padding: 15 },
              { borderColor: Colors.light }, { borderTopWidth: StyleSheet.hairlineWidth }, { height: 110 }]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item, driverid }) }}>

                <View style={{ flexDirection: 'row' }} >
                  <View >
                    <Text style={styles.header3}>{LocationIcon} {truncateString(item.location.description, 10)}</Text>
                    <Text>6/6/24 - 19/6/24</Text>
                    <Text style={styles.header3}>{LocationIcon} {truncateString(item.destination.description, 10)}</Text>
                    <Text>7/8/24 - 7/15/24</Text>
                  </View>

                  <View style={{ position: 'absolute', right: 10 }}>
                    <Text style={{ marginBottom: 10 }}>0 bids</Text>
                    <Text style={{ marginBottom: 10 }}>$32,172 offer</Text>
                    <Text style={{ marginBottom: 10 }}>32 km.</Text>
                  </View>

                </View>

              </Pressable>
            )}
          />

        </View>

        <Pressable style={{
          height: 60, width: '100%', backgroundColor: Colors.white, padding: 10,
          alignItems: 'center', flexDirection: 'row', marginBottom: 20,
          marginTop: 30, elevation: 3, borderRadius: 10
        }}>
          <Text style={styles.header3}>Placeholder</Text>
          <Icon name='chevron-right' size={15} style={{ position: 'absolute', right: 10 }} />
        </Pressable>

      </View>
    </View>
  )
}
