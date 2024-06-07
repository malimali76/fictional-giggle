import React, { useState } from 'react'
import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native';
import { styles } from './assets/Styles';
import { uri } from './assets/uri'
import { SelectList } from 'react-native-dropdown-select-list'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

export function NewShipment({ navigation, route }) {
  shipperid = route.params;

  const [category, setCategory] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [itemAmount, setItemAmount] = useState(null)

  const data = [
    { key: '1', value: 'Moves' },
    { key: '2', value: 'Household Item' },
    { key: '3', value: 'Vehicle' },
    { key: '4', value: 'Heavy Equipment' },
  ]

function setSelected(val){
  setCategory(val);
}

  const onChangeTextTitle = (inputText) => {
    setTitle(inputText);
  };
  const onChangeTextDescription = (inputText) => {
    setDescription(inputText);
  };
  const onChangeTextItemAmount = (inputText) => {
    setItemAmount(inputText);
  };

  const shipmentData = { title, category, description, itemAmount, shipperid }

  async function NewShipment(shipmentData) {
    try {
      const response = await fetch(uri + 'new-shipment/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipmentData),
      });
    }
    catch (error) {
      console.error("Error:", error);
    }

  }

  async function nextPage(){
    if(category){
      navigation.navigate('SetLocation', {shipperid, title, category, description, itemAmount})
    }
    else{
      console.error('Choose a shipment category')
    }
  }

  function CreateShipment() {
    if (location != '') {
      console.log('Shipment Created')
      NewShipment(shipmentData)
      navigation.goBack();
    }
    else {
      console.error('Enter A PickUp Location')
    }
  }

  return (
    <View style={[{ paddingTop: 50, padding: 10 }]}>
      <Text style={[styles.header2, { marginBottom: 20 }]}>Category</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
      />

      <TextInput style={styles.TextBox} onChangeText={onChangeTextTitle} value={title} placeholder='Title'></TextInput>
      <TextInput style={styles.TextBox} onChangeText={onChangeTextDescription} value={description} placeholder='Description'></TextInput>
      <TextInput style={styles.TextBox} onChangeText={onChangeTextItemAmount} value={itemAmount} placeholder='Item Amount'></TextInput>

      <Pressable onPress={()=>{nextPage()}} style={{
        height: 60, width: '100%', backgroundColor: Colors.lighter, padding: 10,
        alignItems: 'center', borderBottomWidth: StyleSheet.hairlineWidth, flexDirection: 'row', marginTop: 10
      }}>
        <Text style={styles.header3}>Continue</Text>
        <Icon name='chevron-right' size={15} style={{ position: 'absolute', right: 10 }} />
      </Pressable>

    </View>
  )
}
