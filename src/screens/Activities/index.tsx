import React, { useState, useEffect } from 'react';
import * as C from './style';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export const Activities = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);

  const requestLocationPermission = async () => {
    const { granted } = await requestForegroundPermissionsAsync();
    if( granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition)
      console.log('Localizacao Atual:', currentPosition)
    }
  }
  useEffect(()=>{
    requestLocationPermission()
  },[])

  
  return (
    <C.Container>
      {location && 
      <MapView
        style={{ flex: 1, width: '100%', height: '100%' }}
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      	>
        <Marker coordinate={{
          latitude: location?.coords.latitude,
          longitude: location.coords.longitude,
        }}/>
      </MapView>}
      
    </C.Container>
  )
}