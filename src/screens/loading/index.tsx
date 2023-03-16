import React, { useEffect, useState }from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './style';

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {!loading && 
        <Text>Loading....</Text>
      }
      <StatusBar style="auto" />
    </Container>
  );
}
