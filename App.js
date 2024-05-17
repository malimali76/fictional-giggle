import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableHighlight, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from './Dashboard';
import {Profile} from './Profile';
import { ShipmentDetails } from './shipmentDetails';
import { NewShipment } from './NewShipment';

//Problems: Figure out how to navigate to the Home Screen after adding user to the database
//To Do: Create a profile screen for shipper

const Stack = createNativeStackNavigator();

const uri = 'http://192.168.0.7:3000/'

function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [dbpassword, setDBPassword] = useState('')

  const onChangeTextEmail = (inputText) => {
    setEmail(inputText);
  };
  const onChangeTextPassword = (inputText) => {
    setPassword(inputText);
  };

  function GoToSignUp() {
    navigation.navigate('SignUp')
  }

  function Login() {
    if(!email){
      console.error('Enter A valid Email Address')
    }
    else{
      if(!password){
        console.error('Enter A Valid Password');
      }
        else{
      fetch(uri + 'login/' + email)
      .then(response => response.json())
      .then(data => {
        const shipperID = data._id;
        if(password != data.password){
          console.error('Incorrect Password')
        }
        else{
          console.log(email, shipperID, password, data.password)
          navigation.navigate('Home', {parameters: {shipperID}})
        }
      })
      .catch(error => console.error('Incorect Email Address or Password'))
    }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextEmail} value={email} placeholder='Email'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder='Password'></TextInput>
      <Pressable style={styles.button} onPress={Login}><Text style={styles.text}>login</Text></Pressable>
      <Pressable style={styles.button} onPress={GoToSignUp}><Text style={styles.text}>Create New Account</Text></Pressable>

    </View>
  )
}
function SignUp({ navigation }) {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const onChangeTextFirstName = (inputText) => {
    setFirstName(inputText);
  };
  const onChangeTextLastName = (inputText) => {
    setLastName(inputText);
  };
  const onChangeTextEmail = (inputText) => {
    setEmail(inputText);
  };
  const onChangeTextPhone = (inputText) => {
    setPhone(inputText);
  };
  const onChangeTextPassword = (inputText) => {
    setPassword(inputText);
  };
  const onChangeTextConfirmPassword = (inputText) => {
    setConfirmPassword(inputText);
  };

  const userData = { firstname, lastname, email, phone, password }

  async function NewShipper(userData) {
    if (password == confirmpassword) {
      try {
        const response = await fetch(uri + 'new-account/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } 
      catch (error) {
        console.error("Error:", error);
      }
    }
    else{
      console.error('Passwords Do Not Match')
    }
  }

  function CreateAccount() {
    NewShipper(userData)
    if(password != ''){
      navigation.navigate('Profile', {parameters : {firstname, lastname, email, phone} });
    }
    else{
      console.error('Enter A Password')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Create New Account</Text>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextFirstName} value={firstname} placeholder='First Name'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextLastName} value={lastname} placeholder='Last Name'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextEmail} value={email} placeholder='E-mail'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextPhone} value={phone} placeholder='Phone'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextPassword} secureTextEntry={true} value={password} placeholder='Password'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="white" onChangeText={onChangeTextConfirmPassword} secureTextEntry={true} value={confirmpassword} placeholder='Confirm Password'></TextInput>

      <Pressable style={styles.button} onPress={CreateAccount}><Text style={styles.text}>Create Account</Text></Pressable>

    </View>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerBackVisible: false, headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerBackVisible: false, headerShown: false }}
        />

        <Stack.Screen
          name="ShipmentDetails"
          component={ShipmentDetails}
          options={{ headerBackVisible: true, headerShown: true, title: 'Shipment Details' }}
        />

        <Stack.Screen
          name="NewShipment"
          component={NewShipment}
          options={{ headerBackVisible: true, headerShown: true, title: 'New Shipment' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
