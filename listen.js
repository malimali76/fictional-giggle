import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    TextBox: {
    height: 50,
    width: 300,
    paddingLeft: 15,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    margin: 10,
    backgroundColor: 'white'
    },
    Pillbutton: {
      backgroundColor: 'lightgreen',
      height: 40,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: 'green',
      margin: 10
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    regtext: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
