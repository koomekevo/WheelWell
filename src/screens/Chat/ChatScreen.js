import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styled from "styled-components/native";
import io from "socket.io-client";

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

const socket = io("http://your-backend-url"); // Replace with your actual WebSocket server URL

const ChatScreen = ({ chatTitle }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const messageListRef = useRef(null);

  useEffect(() => {
    // Listen for incoming messages via WebSocket
    socket.on("message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      messageListRef.current.scrollToEnd();
    });
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Send the message via WebSocket to the backend
      socket.emit("message", { text: message, chatId: "your-chat-id" }); // Replace with the actual chat ID
      setMessage("");
    }
  };

  return (
    <Container>
      <ChatHeader>
        <ChatHeaderText>{chatTitle}</ChatHeaderText>
      </ChatHeader>
      <MessageList
        ref={messageListRef}
        data={messages}
        keyExtractor={(item, index) => `message-${index}`}
        renderItem={({ item }) => <Text>{item.text}</Text>}
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
