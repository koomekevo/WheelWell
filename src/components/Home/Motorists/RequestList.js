import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

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

const RequestStatus = styled.Text`
  font-size: 14px;
  color: #888;
`;

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  // Simulate fetching requests from the backend
  useEffect(() => {
    // Replace this with an actual API call to your backend
    fetch('your-backend-api-endpoint')
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error fetching requests:', error));
  }, []);

  return (
    <Container>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RequestItem>
            <RequestTitle>{item.title}</RequestTitle>
            <RequestStatus>Status: {item.status}</RequestStatus>
          </RequestItem>
        )}
      />
    </Container>
  );
};

export default RequestList;
