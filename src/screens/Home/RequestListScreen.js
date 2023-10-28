import React, { useEffect, useState } from "react";
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

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const RequestListScreen = ({ requests, onRequestPress }) => {
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleAccept = (requestId) => {
    // Prevent multiple clicks while the request is in progress
    if (selectedRequestId === requestId) {
      return;
    }

    // Set the selected request ID to prevent multiple clicks
    setSelectedRequestId(requestId);

    // Make a POST request to accept the request
    fetch("http://your-backend-url/api/accept-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ requestId }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the success response from the backend
        // You can update the UI accordingly
        setSelectedRequestId(null);
        // Optionally, you can refresh the list of requests
        // or update the specific request as accepted
      })
      .catch((error) => {
        console.error("Error accepting request:", error);
        setSelectedRequestId(null);
        // Handle errors or display an error message
      });
  };

  const handleReject = (requestId) => {
    // Prevent multiple clicks while the request is in progress
    if (selectedRequestId === requestId) {
      return;
    }

    // Set the selected request ID to prevent multiple clicks
    setSelectedRequestId(requestId);

    // Make a POST request to reject the request
    fetch("http://your-backend-url/api/reject-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ requestId }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the success response from the backend
        // You can update the UI accordingly
        setSelectedRequestId(null);
        // Optionally, you can refresh the list of requests
        // or update the specific request as rejected
      })
      .catch((error) => {
        console.error("Error rejecting request:", error);
        setSelectedRequestId(null);
        // Handle errors or display an error message
      });
  };

  return (
    <Container>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RequestItem>
            <RequestTitle>{item.title}</RequestTitle>
            <RequestDescription>{item.description}</RequestDescription>
            <ButtonContainer>
              <Button
                title="Accept"
                onPress={() => {
                  handleAccept(item.id);
                }}
                disabled={selectedRequestId === item.id}
              />
              <Button
                title="Reject"
                onPress={() => {
                  handleReject(item.id);
                }}
                disabled={selectedRequestId === item.id}
              />
            </ButtonContainer>
          </RequestItem>
        )}
      />
    </Container>
  );
};

export default RequestListScreen;
