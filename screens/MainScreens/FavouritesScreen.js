import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import Favourites from "../../components/Favourites"; // Importing the Favourites component

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FavouritesScreen = ({ route }) => {
  const { userRole, userId } = route.params;

  return (
    <Container>
      <Title>Favourites</Title>
      <Favourites userRole={userRole} userId={userId} />
    </Container>
  );
};

export default FavouritesScreen;
