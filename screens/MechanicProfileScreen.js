// screens/MechanicProfileScreen.js
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MechanicProfileScreen = ({ route }) => {
  const { mechanic } = route.params;

  return (
    <Container>
      <Title>Mechanic Profile Screen</Title>
      <Text>Name: {mechanic.name}</Text>
      {/* Add more mechanic details as needed */}
    </Container>
  );
};

export default MechanicProfileScreen;
