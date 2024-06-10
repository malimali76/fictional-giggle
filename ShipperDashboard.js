import React, { useState } from 'react'
import { Text, View, Pressable, FlatList, ScrollView, StyleSheet } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

//Figure out the error when navigating from create shipment screen. Parameter Error

export function HomeScreen({ navigation, route }) {
  shipperid = route.params.shipperid

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

  const response = fetch(uri + 'dashboard/' + shipperid)
    .then(response => response.json())
    .then(data => {
      setShipments(data);
    })
    .catch(error => console.error(error))


  const LocationIcon = <Icon name="map-marker" size={15} color='grey' />;
  const NewshipmenIcont = <Icon name="plus" size={15} color= {Colors.primary} />;

  return (
    <View style={styles.container2}>
      <View style={{
        height: 80, width: '100%', padding: 10, backgroundColor: Colors.white,
        justifyContent: 'flex-end', elevation: 4
      }}>
        <Text style={styles.header3}>ACTIVE SHIPMENTS</Text>
      </View>

      <View style={{ width: '100%', flex: 1, padding: 10, paddingTop: 30, paddingBottom: 20 }}>

        <View style={{ width: '100%', backgroundColor: Colors.white, elevation: 4, height: 500, borderRadius: 10 }}>

          <FlatList style={[{ width: '100%' }]}
            data={shipments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable style={[{ paddingLeft: 15 },
              { borderColor: Colors.light }, { height: 110 }, {padding: 15}, { borderTopWidth: StyleSheet.hairlineWidth }]} onPress={() => {
                navigation.navigate('ShipmentDetails',
                  { shipment: item, shipperid })
              }}>
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

        <Pressable onPress={() => { navigation.navigate('NewShipment', { shipperid }) }} style={{
          height: 60, width: '100%', backgroundColor: Colors.white, padding: 20,
          alignItems: 'center', flexDirection: 'row', marginBottom: 20,
          marginTop: 30, elevation: 3, borderRadius: 10
        }}>
          <Text style={styles.header3}>New Shipment</Text>
          <Icon name='plus-circle' size={20} style={{ position: 'absolute', right: 10, color: 'grey'}} />
        </Pressable>
      </View>
    </View>
  )
}
