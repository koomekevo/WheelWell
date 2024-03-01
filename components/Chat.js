import React, { useState, useEffect } from "react";
import { View, Platform, KeyboardAvoidingView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import styled from "styled-components/native";
import io from "socket.io-client";

const Container = styled.View`
  flex: 1;
`;

const Chat = ({ userRole, userId }) => {
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

      // Join the appropriate room based on user role and ID
      const room = userRole === "driver" ? `driver-${userId}` : `mechanic-${userId}`;
      socket.emit("join", room);
    }
  }, [socket, userRole, userId]);

  const onSend = (newMessages = []) => {
    if (socket) {
      socket.emit("sendMessage", newMessages[0]);
    }
  };

  return (
    <Container>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: userId,
        }}
      />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </Container>
  );
};

export default Chat;
