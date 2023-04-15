import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, Text } from './style';

export const Loading = () => {
  

  return (
    <Container>
        <Text>Loading....</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
