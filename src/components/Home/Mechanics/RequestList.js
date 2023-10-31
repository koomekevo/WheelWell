import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const RequestItem = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RequestTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const AcceptRejectButtons = styled.View`
  display: flex;
  flex-direction: row;
`;

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  // Simulate fetching requests from the backend
  useEffect(() => {
    // Replace this with an actual API call to your backend
    fetch("your-backend-api-endpoint")
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  const acceptRequest = (requestId) => {
    // Replace this with an actual API call to accept the request
    // Update the state to remove the accepted request
    setRequests(requests.filter((request) => request.id !== requestId));

    // Send a chat message to the motorist
    // Replace this with code to send a chat message to the motorist
  };

  const rejectRequest = (requestId) => {
    // Replace this with an actual API call to reject the request
    // Update the state to remove the rejected request
    setRequests(requests.filter((request) => request.id !== requestId));
  };

  return (
    <Container>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RequestItem>
            <RequestTitle>{item.title}</RequestTitle>
            <AcceptRejectButtons>
              <Button title="Accept" onPress={() => acceptRequest(item.id)} />
              <Button title="Reject" onPress={() => rejectRequest(item.id)} />
            </AcceptRejectButtons>
          </RequestItem>
        )}
      />
    </Container>
  );
};

export default RequestList;
