import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import getFavorites from "../api"; // Import the API function to retrieve favorites

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ItemContainer = styled.View`
  margin-bottom: 10px;
`;

const Name = styled.Text`
  font-size: 18px;
`;

const Favourites = ({ userRole, userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch favorites based on user role and ID
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites(userRole, userId);
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [userRole, userId]);

  return (
    <Container>
      <Title>Favourites</Title>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemContainer>
            <Name>{item.name}</Name>
          </ItemContainer>
        )}
        ListEmptyComponent={<Text>No favorites found</Text>}
      />
    </Container>
  );
};

export default Favourites;
