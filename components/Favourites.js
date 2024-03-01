import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ItemText = styled.Text`
  font-size: 16px;
`;

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch favourites from your backend or AsyncStorage
    // For demonstration purposes, let's assume we have a list of favourites
    const fetchedFavourites = [
      { id: 1, name: "Favourite Mechanic 1" },
      { id: 2, name: "Favourite Mechanic 2" },
      { id: 3, name: "Favourite Mechanic 3" },
    ];
    setFavourites(fetchedFavourites);
  }, []);

  const renderFavouriteItem = ({ item }) => (
    <ListItem>
      <ItemText>{item.name}</ItemText>
    </ListItem>
  );

  return (
    <Container>
      {favourites.length === 0 ? (
        <Text>No favourites found</Text>
      ) : (
        <FlatList
          data={favourites}
          renderItem={renderFavouriteItem}
          keyExtractor={(item) => item.id.toString()}
          style={{ width: "100%" }}
        />
      )}
    </Container>
  );
};

export default Favourites;
