import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  headerTab:{
    height: 80, width: '100%', padding: 10, backgroundColor: Colors.white,
    justifyContent: 'flex-end', elevation: 4
  },
  background:{
    width: '100%', flex: 1, padding: 10, paddingTop: 30, paddingBottom: 20
  },
  forgroundmain:{
    width: '100%', backgroundColor: Colors.white, elevation: 4, height: 500, borderRadius: 10
  },
  TextBox: {
    height: 50,
    width: 300,
    paddingLeft: 15,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    backgroundColor: Colors.light,
    color: Colors.black,
    margin:10,
    fontWeight: 'bold'
  },
  TextBoxShort: {
    height: 50,
    width: 150,
    paddingLeft: 15,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 3,
    backgroundColor: Colors.light,
    color: Colors.black,
    fontWeight: 'bold'
  },
  Pillbutton: {
    backgroundColor: Colors.primary,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.white,
  },
  darktext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.black,
  },
  header2: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.primary,
  },
  header3: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.primary,
  },
  header4: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: Colors.dark,
  },
  regtext: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    margin: 30
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 300,
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    width: 200,
    color: '#5d5d5d',
    fontSize: 16,
  },
  listView: {
    backgroundColor: 'brown',

  },
  map: {
    height:200,
    width: '100%'

  },
});
