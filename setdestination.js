import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { api_key } from './assets/keya';

const GOOGLE_PLACES_API_KEY = api_key;

export function Setdestination({ navigation, route }) {
    title = route.params.parameters.title;
    description = route.params.parameters.description;
    itemAmount = route.params.parameters.itemAmount;
    category = route.params.parameters.category
    location = route.params.location;
    shipperid = route.params.shipperid

    const [destination, setDestination] = useState(null)

    const shipmentData = { shipperid, location, destination, title, description, itemAmount, category }

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
            navigation.navigate('Home', { shipperid })
        }
        else {
            console.error('Enter A PickUp Location')
        }
    }

    return (
        <View style={styles.container2}>

            <View style={styles.headerTab}>
                <Text style={styles.header3}>SET LOCAION</Text>
            </View>
            <View style={styles.background}>

                <View style={{ height: 320 }}>
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


                <Pressable style={{
                    height: 60, width: '100%', backgroundColor: Colors.white, padding: 10,
                    alignItems: 'center', flexDirection: 'row', marginBottom: 20,
                    marginTop: 30, elevation: 3, borderRadius: 10
                }} onPress={() => CreateShipment(destination)}>
                    <Text style={styles.header3}>Next</Text>
                    <Icon name='chevron-right' size={15} style={{ position: 'absolute', right: 10 }} />
                </Pressable>


            </View>



        </View>
    )
}
