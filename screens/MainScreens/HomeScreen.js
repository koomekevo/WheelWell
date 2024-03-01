import React from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import Home from "../../components/Home"; // Importing the Home component

const Container = styled.View`
  flex: 1;
`;

const HomeScreen = ({ route }) => {
  const { userType } = route.params;

  return (
    <Container>
      <Home userType={userType} />
      <Button
        title="Refresh"
        onPress={() => console.log("Refresh button pressed")}
      />
    </Container>
  );
};

export default HomeScreen;
