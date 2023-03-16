import React, { useEffect, useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      {!loading && 
        <Text>Loading....</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}
