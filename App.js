import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableHighlight, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from './Dashboard';
import {Profile} from './Profile';
import { ShipmentDetails } from './shipmentDetails';
import { NewShipment } from './NewShipment';
import {Map} from './Maps Test';
import { styles } from './assets/Styles';
import { DriverDashboard } from './DriverDashboard';

//Problems: Figure out how to navigate to the Home Screen after adding user to the database
//To Do: Create a profile screen for shipper

const Stack = createNativeStackNavigator();

const uri = 'http://192.168.0.11:3000/'

function Login({ navigation }) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

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
          navigation.navigate('Home', {parameters: {shipperID}})
        }
      })
      .catch(error => console.error('Incorect Email Address or Password'))
    }
    }
  }

  function DriverLogin() {
    if(!email){
      console.error('Enter A valid Email Address')
    }
    else{
      if(!password){
        console.error('Enter A Valid Password');
      }
        else{
      fetch(uri + 'driver-login/' + email)
      .then(response => response.json())
      .then(data => {
        const driverID = data._id;
        if(password != data.password){
          console.error('Incorrect Password')
        }
        else{
          navigation.navigate('DriverDashboard', {parameters: {driverID}})
        }
      })
      .catch(error => console.error('Incorect Email Address or Password'))
    }
    }
  }

  return (
    <View style={styles.container}>
      <View><Image style={{margin:10}} source={require('./assets/favicon.png')}/></View>
      <View style={[styles.TextBox]}>
      <TextInput style={[{color: 'black'}, {fontSize: 15}]} placeholderTextColor="grey" onChangeText={onChangeTextEmail} value={email} placeholder='Email'></TextInput>
      </View>

      <View style={[styles.TextBox]}>
      <TextInput style={[{color: 'black'}, {fontSize: 15}]} placeholderTextColor="grey" secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder='Password'></TextInput>
      </View>



      <View style={[{flexDirection:'row'},{marginTop: 10},{marginBottom: 10}, {}, {width: '100%'}, {justifyContent:'center'}]}>
      <Pressable style={styles.Pillbutton} onPress={Login}><Text style={[{color:'black'}, {fontWeight: 'bold'}]}>login</Text></Pressable>
      <Pressable style={[styles.Pillbutton,{width: 150}]} onPress={DriverLogin}><Text style={[{color:'black'}, {fontWeight: 'bold'}]}>login as Driver</Text></Pressable>
      </View>
      
      <View style={[{flexDirection:'row'},{margin: 10}]}>
      <Text style={[{color:'white'}]} >Dont have an account? </Text><Pressable onPress={GoToSignUp}><Text style={{color:'lightgreen'}}>Create one here</Text></Pressable>
      </View>

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
    <View style={[styles.container,{justifyContent: 'center'},{paddingBottom: 0}]}>

      <View>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextFirstName} value={firstname} placeholder='First Name'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextLastName} value={lastname} placeholder='Last Name'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextEmail} value={email} placeholder='E-mail'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextPhone} value={phone} placeholder='Phone'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextPassword} secureTextEntry={true} value={password} placeholder='Password'></TextInput>
      <TextInput style={styles.TextBox} placeholderTextColor="grey" onChangeText={onChangeTextConfirmPassword} secureTextEntry={true} value={confirmpassword} placeholder='Confirm Password'></TextInput>
      </View>

      <Pressable style={[styles.Pillbutton,{width: 150}]} onPress={CreateAccount}><Text style={[{color:'black'}, {fontWeight: 'bold'}]}>Create Account</Text></Pressable>
      
      <Pressable style={[styles.Pillbutton,{width: 170}, {marginTop: 20}]} onPress={CreateAccount}><Text style={[{color:'black'}, {fontWeight: 'bold'}]}>Create Driver Account</Text></Pressable>
      <View style={[{flexDirection:'row'},{margin: 10}]}>
      <Text style={[{color:'white'}]} >Already have an account? </Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={{color:'lightgreen'}}>Login</Text></Pressable>
      </View>

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
          options={{ title: 'Login', headerShown: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up', headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerBackVisible: false, headerShown: false }}
        />

        <Stack.Screen
          name="DriverDashboard"
          component={DriverDashboard}
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

        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerBackVisible: true, headerShown: true, title: 'New Shipment' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
