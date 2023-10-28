import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ChatItem = styled.TouchableOpacity`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ChatTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ChatPreview = styled.Text`
  font-size: 14px;
  color: #888;
`;

const ChatListScreen = ({ onChatPress }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Fetch chat data from the backend when the component mounts
    fetch('http://your-backend-url/api/chats', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer your_jwt_token', // Replace with a valid JWT token
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChats(data);
      })
      .catch((error) => {
        console.error('Error fetching chat data:', error);
      });
  }, []);

  return (
    <Container>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ChatItem onPress={() => onChatPress(item.id)}>
            <ChatTitle>{item.title}</ChatTitle>
            <ChatPreview>{item.lastMessage}</ChatPreview>
          </ChatItem>
        )}
      />
    </Container>
  );
};

export default ChatListScreen;
