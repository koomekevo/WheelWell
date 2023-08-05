// screens/MechanicScreen.js
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

const MechanicScreen = () => {
  const navigation = useNavigation();

  const goToDriverScreen = () => {
    navigation.navigate('Driver');
  }

  return (
    <Container>
      <Title>Mechanic Dashboard</Title>
      <Button title="Go to Driver" onPress={goToDriverScreen} />
      {/* Add mechanic-specific components and functionalities */}
    </Container>
  );
}

export default MechanicScreen;
