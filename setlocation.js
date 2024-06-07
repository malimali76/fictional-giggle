import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList, SafeAreaView, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const GOOGLE_PLACES_API_KEY = '';

export function Setlocation({ navigation, route }) {
    parameters = route.params;
    console.log(route.params)
    shipperid = route.params.shipperid;

    function gotodestination (){
        if(location){
            navigation.navigate('SetDestination', {location, shipperid, parameters})
        }
        else{
            console.error('Enter A pick up location')
        }
    }

    const [location, setLocation] = useState(null)

    return (
        <View style={[styles.container, {paddingTop: 50}]}>
            
            <Pressable onPress={gotodestination} style={{height: 60, width: '100%', backgroundColor:Colors.white, padding: 10,
             alignItems:'center', borderBottomWidth: StyleSheet.hairlineWidth, flexDirection:'row', marginBottom: 20}}>
                <Text style={styles.header2}>Continue</Text>
                <Icon  name='chevron-right' size={20} style={{ position: 'absolute', right: 10 }}/>
            </Pressable>

            <GooglePlacesAutocomplete
                placeholder="Enter pick up location"
                minLength={2}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    setLocation({
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
