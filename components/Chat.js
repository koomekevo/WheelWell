import React, { useState, useEffect } from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

const Chat = ({ route }) => {
  const { mechanicId, mechanicName } = route.params;
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("YOUR_SOCKET_SERVER_URL"); // Replace 'YOUR_SOCKET_SERVER_URL' with your actual server URL
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected to server");
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from server");
      });

      socket.on("newMessage", (message) => {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, message)
        );
      });

      // Join the room for the mechanic
      socket.emit("join", mechanicId);
    }
  }, [socket, mechanicId]);

  const onSend = (newMessages = []) => {
    if (socket) {
      socket.emit("sendMessage", newMessages[0]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1, // Assuming 1 is the user ID
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

export default Chat;
