import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';
import { api_key } from './assets/keya';
import { uri } from './assets/uri'

const GOOGLE_PLACES_API_KEY = api_key;



export function Bid({ navigation, route }) {
    const shipment = route.params.shipment
    const driverid = route.params.driverid
    const shipmentid = route.params.shipment._id
    const pickupLocation = shipment.location;
    const dropoffLocation = shipment.destination;
    const status = 'Pending';
    const [bidamount, setBidAmount] = useState(0)

    async function placebid() {
        bid_data = { driverid, bidamount, status, shipmentid }
        if (driverid && bidamount) {
            console.log(bid_data)
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
            console.error('Enter a Bid Amount')
        }
    }


    const [region, setRegion] = useState(null);
    const [marker, setMarker] = useState(null);

    const handlePress = async (data, details = null) => {
        const { geometry } = details;
        const { location } = geometry;
        setRegion({
            latitude: shipment.location.latitude,
            longitude: shipment.location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.02,
        });
        setMarker({
            latitude: shipment.location.latitude,
            longitude: shipment.location.longitude,
            title: data.description,
        });
    };


    const onChangeBidAmount = (inputText) => {
        setBidAmount(inputText);
    };

    return (
        <View style={[styles.container2, { justifyContent: 'center' }]}>

            <View style={styles.background}>

                <View style={styles.forgroundmain}>

                    <View style={{ padding: 10 }}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={styles.header4}>PICKUP</Text>
                            <Text style={styles.header3}>{shipment.location.description}</Text>
                            <Text style={styles.header4}>BEFORE JUN 13</Text>
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            <Text style={styles.header4}>DELIVERY</Text>
                            <Text style={styles.header3}>{shipment.destination.description}</Text>
                            <Text style={styles.header4}>BEFORE JUN 24</Text>
                        </View>

                        <TextInput style={[styles.TextBoxShort, { marginBottom: 20 }]} keyboardType='numeric' onChangeText={onChangeBidAmount} value={bidamount} placeholderTextColor='black' placeholder='Amount'></TextInput>

                        <MapView style={styles.map} region={region}></MapView>


                    </View>


                </View>
                <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={()=>{navigation.navigate('DriverDashboard',{driverid}), placebid()}}><Text style={styles.text}>place bid</Text></Pressable>

            </View>
        </View>

    )
}
