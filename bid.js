import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export function Bid({ navigation, route }) {
    const shipment = route.params.shipment
    const pickupLocation = shipment.location;
    const dropoffLocation = shipment.destination;

    return (
        <View style={styles.container2}>

            <View style={styles.headerTab}>
                <Text style={styles.header3}>BID ON SHIPMENT</Text>
            </View>

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

                        <TextInput style={styles.TextBoxShort} placeholderTextColor='black' placeholder='Amount'></TextInput>
                    </View>


                </View>

            </View>
        </View>

    )
}
