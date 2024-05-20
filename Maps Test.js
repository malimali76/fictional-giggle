import React, { useState } from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';


export default function App() {
  const [region, setRegion] = useState(null);
  const [marker, setMarker] = useState(null);

  const handlePress = async (data, details = null) => {
    const { geometry } = details;
    const { location } = geometry;
    setRegion({
      latitude: location.lat,
      longitude: location.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    setMarker({
      latitude: location.lat,
      longitude: location.lng,
      title: data.description,
    });
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed="auto"
        fetchDetails={true}
        onPress={handlePress}
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: styles.textInputContainer,
          textInput: styles.textInput,
          listView: styles.listView,
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
      {region && (
        <MapView style={styles.map} region={region}>
          {marker && (
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
            />
          )}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 50,
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  },
  listView: {
    backgroundColor: 'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
