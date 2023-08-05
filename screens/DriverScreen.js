// screens/DriverScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DriverScreen = () => {
  const navigation = useNavigation();

  const goToMechanicScreen = () => {
    navigation.navigate('Mechanic');
  }

  return (
    <Container>
      <Title>Driver Dashboard</Title>
      <Button title="Go to Mechanic" onPress={goToMechanicScreen} />
      {/* Add driver-specific components and functionalities */}
    </Container>
  );
}

export default DriverScreen;
