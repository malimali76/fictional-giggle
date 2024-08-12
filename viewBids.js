import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { uri } from './assets/uri'
import { styles } from './assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function ViewBids({ navigation, route }) {
    const shipmentid = route.params.shipmentid

    const [shipments, setShipments] = useState([])

    const response = fetch(uri + 'bids/' + shipmentid)
        .then(response => response.json())
        .then(data => {
            setShipments(data.bids);
        })
        .catch(error => console.error(error))

    return (
        <FlatList style={[{ width: '100%' }]}
            data={shipments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (

                <View style={{ flexDirection: 'row' }} >
                    <View style={{marginTop:40}}>
                        <Text style={styles.header3}>driver ID:{item.ID}</Text>
                        <Text style={styles.header3}>amount:{item.Bidamount}</Text>
                    </View>

                </View>

            )}
        />
    )
}
