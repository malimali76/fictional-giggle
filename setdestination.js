import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const GOOGLE_PLACES_API_KEY = '';

export function Setdestination({ navigation, route }) {
    location = route.params.location;
    shipperid = route.params.shipperid

    const [destination, setDestination] = useState(null)

    const shipmentData = {shipperid, location, destination}

    async function NewShipment(shipmentData) {
        try {
            const response = await fetch(uri + 'new-shipment/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(shipmentData),
            });
        }
        catch (error) {
            console.error("Error:", error);
        }

    }

    function CreateShipment(destination) {
        if (destination) {
            console.log('Shipment Created')
            NewShipment(shipmentData)
        }
        else {
            console.error('Enter A PickUp Location')
        }
    }

    return (
        <View style={[styles.container, {paddingTop: 50}]}>
            
            <Pressable onPress={() => CreateShipment(destination)} style={{height: 60, width: '100%', backgroundColor:Colors.lighter, padding: 10,
             alignItems:'center', borderBottomWidth: StyleSheet.hairlineWidth, flexDirection:'row'}}>
                <Text>Continue</Text>
                <Icon  name='chevron-right' size={20} style={{ position: 'absolute', right: 10 }}/>
            </Pressable>

            <GooglePlacesAutocomplete
                placeholder="Enter pick up destination"
                minLength={2}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    setDestination({
                        description: data.description,
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                    })
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        width: '100%',
                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 38,
                        color: Colors.dark,
                        fontSize: 16,
                        backgroundColor: Colors.light
                    },
                    description: {
                    },
                }}
            />


        </View>
    )
}
