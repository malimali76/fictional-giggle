import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const uri = 'http://192.168.0.11:3000/'

export function Profile({navigation, route}) {
    const {parameters} = route.params

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    fetch(uri + 'login/' + parameters.email)
        .then(response => response.json())
        .then(data => {
          setFirstName(data.firstname),
          setLastName(data.lastname),
          setPhone(data.phone);
        })
        .catch(error => console.error(error))

    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    TextBox: {
      borderWidth: 2,
      height: 50,
      margin: 10,
      width: 300,
      backgroundColor: 'black',
      borderRadius: 5,
      paddingVertical: 6,
      paddingHorizontal: 16,
      color: 'white',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 5,
      width: 200,
      elevation: 3,
      backgroundColor: 'black',
      margin: 10
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
