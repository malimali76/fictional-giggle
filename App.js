import React, { useState } from 'react'
import { Text, View, TextInput, Pressable, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './ShipperDashboard';
import { ShipmentDetails } from './ShipmentDetails';
import { NewShipment } from './NewShipment';
import { styles } from './assets/Styles';
import { DriverDashboard } from './DriverDashboard';
import { uri } from './assets/uri'
import { LiveShipments } from './LiveShipments';
import { Setlocation } from './SetLocation';
import { Setdestination } from './SetDestination';
import { Profile } from './Profile';
import { Bid } from './bid';
import { ViewBids } from './viewBids';


const LoginStack = createNativeStackNavigator();
const DashStack = createNativeStackNavigator();
const TabStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function LoginPage({ navigation }) {
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
    if (!email) {
      console.error('Enter A valid Email Address')
    }
    else {
      if (!password) {
        console.error('Enter A Valid Password');
      }
      else {
        fetch(uri + 'login/' + email)
          .then(response => response.json())
          .then(data => {
            const shipperid = data._id;
            if (password != data.password) {
              console.error('Incorrect Password')
            }
            else {
              navigation.navigate('TabNav', { shipperid })
            }
          })
          .catch(error => console.error('Incorrect Email Address or Password'))
      }
    }
  }

  function DriverLogin() {
    if (!email) {
      console.error('Enter A valid Email Address')
    }
    else {
      if (!password) {
        console.error('Enter A Valid Password');
      }
      else {
        fetch(uri + 'driver-login/' + email)
          .then(response => response.json())
          .then(data => {
            const driverid = data._id;
            if (password != data.password) {
              console.error('Incorrect Password')
            }
            else {
              navigation.navigate('DriverTabNav', { driverid })
            }
          })
          .catch(error => console.error('Incorect Email Address or Password'))
      }
    }
  }

  return (
    <View style={styles.container}>
      <View><Image style={{ margin: 10 }} source={require('./assets/favicon.png')} /></View>

      <View>
        <TextInput style={styles.TextBox} placeholderTextColor='black' onChangeText={onChangeTextEmail} value={email} placeholder='Email'></TextInput>
      </View>

      <View>
        <TextInput style={styles.TextBox} placeholderTextColor="black" secureTextEntry={true} onChangeText={onChangeTextPassword} value={password} placeholder='Password'></TextInput>
      </View>



      <View style={[{ flexDirection: 'row' }, { marginTop: 10 }, { marginBottom: 10 }, { width: '100%' }, { justifyContent: 'center' }]}>
        <Pressable style={styles.Pillbutton} onPress={Login}><Text style={[{ color: Colors.white }, { fontWeight: 'bold' }]}>login</Text></Pressable>
        <Pressable style={[styles.Pillbutton, { width: 150 }]} onPress={DriverLogin}><Text style={[{ color: Colors.white }, { fontWeight: 'bold' }]}>login as Driver</Text></Pressable>
      </View>

      <View style={[{ flexDirection: 'row' }, { marginBottom: 10 }]}>
        <Text style={[{ color: Colors.dark }]} >Dont have an account? </Text><Pressable onPress={GoToSignUp}><Text style={{ color: '#1292B4', fontWeight: 'bold' }}>Create one here</Text></Pressable>
      </View>

    </View>
  )
}

function SignUp({ navigation }) {

  const [firstname, setFirstName] = useState(null)
  const [lastname, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmpassword, setConfirmPassword] = useState(null)

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
    else {
      console.error('Passwords Do Not Match')
    }
  }

  function CreateAccount() {
    NewShipper(userData)
    if (password) {
      navigation.goback();
    }
    else {
      console.error('Enter A Password')
    }
  }

  return (
    <View style={[styles.container]}>
      <View><Image style={{ margin: 10 }} source={require('./assets/favicon.png')} /></View>

      <View>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextFirstName} value={firstname} placeholder='First Name'></TextInput>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextLastName} value={lastname} placeholder='Last Name'></TextInput>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextEmail} value={email} placeholder='E-mail'></TextInput>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextPhone} value={phone} placeholder='Phone'></TextInput>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextPassword} secureTextEntry={true} value={password} placeholder='Password'></TextInput>
        <TextInput style={styles.TextBox} placeholderTextColor="black" onChangeText={onChangeTextConfirmPassword} secureTextEntry={true} value={confirmpassword} placeholder='Confirm Password'></TextInput>
      </View>

      <Pressable style={[styles.Pillbutton, { width: 150 }, { marginTop: 20 }]} onPress={CreateAccount}><Text style={styles.text}>Create Account</Text></Pressable>
      <View style={[{ flexDirection: 'row' }, { marginBottom: 10 }, { marginTop: 10 }]}>
        <Text >Already have an account? </Text><Pressable onPress={() => navigation.navigate('Login')}><Text style={{ color: '#1292B4', fontWeight: 'bold' }}>Login</Text></Pressable>
      </View>

    </View>
  )
}

function DashBoardStack({ route }) {
  const shipperid = route.params.shipperid

  return (
    <DashStack.Navigator>
      <DashStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerBackVisible: false, headerShown: false }}
        initialParams={{ shipperid }}
      />

      <DashStack.Screen
        name="ShipmentDetails"
        component={ShipmentDetails}
        options={{ headerShown: false, title: 'Shipment Details' }}
      />

      <DashStack.Screen
        name="NewShipment"
        component={NewShipment}
        options={{ headerShown: false, title: 'New Shipment' }}
      />

      <DashStack.Screen
        name="SetLocation"
        component={Setlocation}
        options={{ headerBackVisible: true, headerShown: false, title: 'New Shipment' }}
      />
      <DashStack.Screen
        name="SetDestination"
        component={Setdestination}
        options={{ headerBackVisible: true, headerShown: false, title: 'New Shipment' }}
      />
      <DashStack.Screen
        name="viewBids"
        component={ViewBids}
        options={{ headerBackVisible: true, headerShown: false, title: 'New Shipment' }}
      />

    </DashStack.Navigator>
  )
}

function DriverDashBoardStack({ route }) {
  const driverid = route.params.driverid

  return (
    <DashStack.Navigator>
      <DashStack.Screen
        name="DriverDashboard"
        component={DriverDashboard}
        options={{ headerBackVisible: false, headerShown: false }}
        initialParams={{ driverid }}
      />

      <DashStack.Screen
        name="ShipmentDetails"
        component={ShipmentDetails}
        options={{ headerShown: false, title: 'Shipment Details' }}
      />

      <DashStack.Screen
        name="LiveShipments"
        component={LiveShipments}
        options={{ headerBackVisible: true, headerShown: false, title: 'New Shipment' }}
      />

      <DashStack.Screen
        name="Bid"
        component={Bid}
        options={{ headerBackVisible: true, headerShown: false, title: 'New Shipment' }}
      />
    </DashStack.Navigator>
  )
}

function TabNav({ route }) {
  const shipperid = route.params.shipperid

  return (
    <Tab.Navigator>
      <TabStack.Screen
        name="DashboardStack"
        component={DashBoardStack}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ shipperid }}
      />

      <TabStack.Screen
        name="Account"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={20} />
          ),
        }}
        initialParams={{ shipperid }}
      />

      <TabStack.Screen
        name="Services"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ shipperid }}
      />
      <TabStack.Screen
        name="Activity"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Shipments',
          tabBarIcon: ({ color, size }) => (
            <Icon name="truck" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ shipperid }}
      />
    </Tab.Navigator>



  )
}

function DriverTabNav({ route }) {
  const driverid = route.params.driverid

  return (
    <Tab.Navigator>
      <TabStack.Screen
        name="DriverDashboardStack"
        component={DriverDashBoardStack}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ driverid }}
      />

      <TabStack.Screen
        name="Account"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={20} />
          ),
        }}
        initialParams={{ driverid }}
      />

      <TabStack.Screen
        name="Services"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ driverid }}
      />
      <TabStack.Screen
        name="Activity"
        component={Profile}
        options={{
          headerBackVisible: false, headerShown: false,
          tabBarLabel: 'Shipments',
          tabBarIcon: ({ color, size }) => (
            <Icon name="truck" color={color} size={20} />
          ),
          tabBarBadge: 3,
        }}
        initialParams={{ driverid }}
      />
    </Tab.Navigator>



  )
}

function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>

        <LoginStack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login', headerShown: false }}
        />

        <LoginStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up', headerShown: false }}
        />

        <LoginStack.Screen
          name="TabNav"
          component={TabNav}
          options={{ title: 'Sign Up', headerShown: false }}
        />

        <LoginStack.Screen
          name="DriverTabNav"
          component={DriverTabNav}
          options={{ title: 'Sign Up', headerShown: false }}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
