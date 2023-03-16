import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export const loading = () => {
  

  return (
    <View>
      <Text>Loading....</Text>
      <StatusBar style="auto" />
    </View>
  );
}
