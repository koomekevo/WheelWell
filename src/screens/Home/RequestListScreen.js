import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const RequestItem = styled.TouchableOpacity`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const RequestTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const RequestDescription = styled.Text`
  font-size: 14px;
  color: #888;
`;

const RequestListScreen = ({ requests, onRequestPress }) => {
  return (
    <Container>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RequestItem onPress={() => onRequestPress(item.id)}>
            <RequestTitle>{item.title}</RequestTitle>
            <RequestDescription>{item.description}</RequestDescription>
          </RequestItem>
        )}
      />
    </Container>
  );
};

export default RequestListScreen;
