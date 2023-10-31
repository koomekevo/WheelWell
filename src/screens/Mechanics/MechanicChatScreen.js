import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { fetchMechanicChats } from "../../actions/chatActions"; // Import your action
import ChatList from "../../components/Chat/ChatList"; // Import your ChatList component

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
`;

const MechanicChatScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const mechanicChats = useSelector((state) => state.chat.mechanicChats);

  useEffect(() => {
    // Fetch the mechanic's chats from the backend using Redux
    dispatch(fetchMechanicChats());
  }, [dispatch]);

  return (
    <Container>
      <ScrollView>
        <SectionTitle>Chats</SectionTitle>
        <ChatList data={mechanicChats} />

        <Button
          title="Start New Chat"
          onPress={() => {
            navigation.navigate("StartChat"); // Replace with your actual screen name for starting a chat
          }}
        />
      </ScrollView>
    </Container>
  );
};

export default MechanicChatScreen;
