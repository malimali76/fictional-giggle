import React, { useState } from 'react'
import { Text, View, Pressable, FlatList } from 'react-native';
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
    if(shorter.length <= num){
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

  return (
    <View style={[styles.container, { paddingTop: 50 }]}>
      <Text style={styles.header2}>Shipments</Text>

      <FlatList style={[{ width: '100%' }, { borderRadius: 5 }]}
        data={shipments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Pressable style={[{ marginLeft: 15 }, { marginRight: 15 }, { paddingLeft: 15 }, { borderTopWidth: 1 }, { borderColor: 'grey' }, { height: 100 }]} onPress={() => { navigation.navigate('ShipmentDetails', { shipment: item, shipperid }) }}>
            <View style={{flexDirection:'row'}} >
            <View >
            <Text style={styles.header3}>{LocationIcon} {truncateString(item.location.description, 10)}</Text>
            <Text>6/6/24 - 19/6/24</Text>
            <Text style={styles.header3}>{LocationIcon} {truncateString(item.destination.description, 10)}</Text>
            <Text>7/8/24 - 7/15/24</Text>
            </View>

            <View style={{ position: 'absolute', right: 10 }}>
            <Text style={{marginBottom: 10}}>0 bids</Text>
            <Text style={{marginBottom: 10}}>$32,172 offer</Text>
            <Text style={{marginBottom: 10}}>32 km.</Text>
            </View>
          
            </View>
          </Pressable>
        )}
      />

      <View>
        <Pressable style={[styles.Pillbutton, { width: 170 }]} onPress={() => { navigation.navigate('NewShipment', { shipperid }) }}>
          <Text style={styles.text}>New Shipment</Text>
        </Pressable>
      </View>
    </View>
  )
}
