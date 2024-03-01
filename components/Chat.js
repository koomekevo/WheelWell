import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Chat = ({ route }) => {
  const [message, setMessage] = useState('');
  const { mechanicName } = route.params; // Assuming you pass mechanicName as a parameter

  const handleMessageSend = () => {
    // Handle sending message logic here
    console.log('Sending message:', message);
    // You can use WebSocket or any other communication method to send messages
    // Reset message input after sending
    setMessage('');
  };

  return (
    <Container>
      <Text>Chat with {mechanicName}</Text>
      {/* Display chat messages here */}
      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
        multiline
        style={{ borderWidth: 1, borderColor: 'gray', width: '80%', padding: 5, marginTop: 10 }}
      />
      <Button title="Send" onPress={handleMessageSend} />
    </Container>
  );
};

export default Chat;
