import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function HomeScreen({navigation, route}) {
    const {parameters} = route.params

    

    return (
      <View style={styles.container}>
        <Text>{parameters.email}</Text>
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