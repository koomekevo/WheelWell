import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import ChatList from "../../components/Chat/ChatList"; // Import the ChatList component
import { useDispatch, useSelector } from "react-redux";
import { fetchMotoristChats } from "../../actions/chatActions"; // Import your action for fetching chats

const MotoristChatScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const chats = useSelector((state) => state.chat.motoristChats);

  useEffect(() => {
    // Fetch chats for the motorist when the component mounts
    if (user) {
      dispatch(fetchMotoristChats(user.id));
    }
  }, [dispatch, user]);

  return (
    <View>
      <Text>Motorist Chat Screen</Text>
      <Button
        title="Refresh Chats"
        onPress={() => {
          if (user) {
            dispatch(fetchMotoristChats(user.id));
          }
        }}
      />
      <ChatList chats={chats} userType="motorist" />
      {/* Pass the chats and userType prop to ChatList component */}
    </View>
  );
};

export default MotoristChatScreen;
