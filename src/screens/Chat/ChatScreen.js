import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ChatHeader = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const ChatHeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const MessageList = styled.FlatList`
  flex: 1;
  padding: 10px;
`;

const MessageInputContainer = styled.View`
  padding: 10px;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const MessageInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.Button`
  width: 90%;
  align-self: center;
`;

const ChatScreen = ({ chatTitle, messages, onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  useEffect(() => {
    // Scroll to the end of the message list when new messages arrive
    messageListRef.current.scrollToEnd();
  }, [messages]);

  return (
    <Container>
      <ChatHeader>
        <ChatHeaderText>{chatTitle}</ChatHeaderText>
      </ChatHeader>
      <MessageList
        data={messages}
        keyExtractor={(item, index) => `message-${index}`}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        )}
      />
      <MessageInputContainer>
        <MessageInput
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <SendButton title="Send" onPress={handleSendMessage} />
      </MessageInputContainer>
    </Container>
  );
};

export default ChatScreen;
