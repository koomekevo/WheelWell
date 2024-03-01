import React from "react";
import { Platform, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import Chat from "../../components/Chat"; // Importing the Chat component

const Container = styled.View`
  flex: 1;
`;

const ChatScreen = ({ route }) => {
  const { userRole, userId } = route.params;

  return (
    <Container>
      <Chat userRole={userRole} userId={userId} />
      {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}
    </Container>
  );
};

export default ChatScreen;
