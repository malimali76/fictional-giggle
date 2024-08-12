import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { styles } from './assets/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export function Profile({route}){
    return(
        <View style={styles.container2}>
            <Pressable style={styles.Pillbutton}><Text style={[{ color: Colors.white }, { fontWeight: 'bold' }]}>Log Out</Text></Pressable>
        </View>
    )
}
