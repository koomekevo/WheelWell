// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Home Screen</Title>
      <Button
        title="Find Mechanics"
        onPress={() => navigation.navigate('MechanicList')}
      />
    </Container>
  );
};

export default HomeScreen;
