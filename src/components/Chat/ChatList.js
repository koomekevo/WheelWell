// src/components/Chat/ChatList.js

import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

const ChatList = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Fetch chat data from the backend
    const fetchChats = async () => {
      // Make a request to your backend API to fetch chat data
      // Replace 'your_backend_chat_endpoint' with the actual endpoint
      try {
        const response = await fetch("your_backend_chat_endpoint");
        const data = await response.json();

        if (response.ok) {
          setChats(data);
        } else {
          console.error("Failed to fetch chat data.");
        }
      } catch (error) {
        console.error("An error occurred while fetching chat data:", error);
      }
    };

    // Call the function to fetch chat data
    fetchChats();
  }, []);

  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Navigate to the chat screen with the selected chat
              navigation.navigate("ChatScreen", { chatId: item.id });
            }}
          >
            <Text>{item.title}</Text>
            <Text>{item.lastMessage}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatList;
