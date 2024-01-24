// screens/MechanicListScreen.js
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

const MechanicItem = styled.TouchableOpacity`
  background-color: #efefef;
  padding: 10px;
  margin: 5px;
`;

const MechanicListScreen = ({ navigation }) => {
  const mechanics = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    // Add more mechanics as needed
  ];

  return (
    <Container>
      <Title>Mechanic List Screen</Title>
      <FlatList
        data={mechanics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MechanicItem
            onPress={() =>
              navigation.navigate("MechanicProfile", { mechanic: item })
            }
          >
            <Text>{item.name}</Text>
          </MechanicItem>
        )}
      />
    </Container>
  );
};

export default MechanicListScreen;
