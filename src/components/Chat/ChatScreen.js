// src/components/Chat/ChatScreen.js

import React, { useState, useEffect, useRef } from "react";
import { View, Text, FlatList, TextInput, Button, Alert } from "react-native";
import axios from "axios"; // Import the axios library

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messageListRef = useRef();

  const chatId = route.params.chatId; // Get the chat ID from the route parameters

  useEffect(() => {
    // Fetch chat messages from the backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `your_backend_chat_endpoint/${chatId}`
        );

        if (response.data.success) {
          setMessages(response.data.messages);
          messageListRef.current.scrollToEnd(); // Scroll to the end of the message list
        } else {
          Alert.alert("Error", "Failed to fetch chat messages.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred while fetching chat messages.");
      }
    };

    fetchMessages();
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") {
      return;
    }

    try {
      // Send the new message to the backend
      const response = await axios.post(
        `your_backend_chat_endpoint/${chatId}`,
        {
          message: newMessage,
        }
      );

      if (response.data.success) {
        // Update the local state with the new message
        setMessages([...messages, response.data.message]);
        setNewMessage("");
        messageListRef.current.scrollToEnd(); // Scroll to the end of the message list
      } else {
        Alert.alert("Error", "Failed to send the message.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while sending the message.");
    }
  };

  return (
    <View>
      <Text>Chat Screen</Text>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => `message-${index}`}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        ref={messageListRef}
      />
      <View>
        <TextInput
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
