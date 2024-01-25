// screens/ChatScreen.js
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;

const ChatScreen = ({ route }) => {
  const { mechanic } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats')
      .doc(`${mechanic.id}_1`)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const newMessages = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            _id: doc.id,
            text: data.text,
            createdAt: data.createdAt.toDate(),
            user: {
              _id: data.user._id,
              name: data.user.name,
            },
          };
        });
        setMessages(newMessages);
      });

    return () => unsubscribe();
  }, [mechanic.id]);

  const onSend = (newMessages = []) => {
    const message = newMessages[0];
    firestore()
      .collection('chats')
      .doc(`${mechanic.id}_1`)
      .collection('messages')
      .add({
        text: message.text,
        createdAt: firestore.FieldValue.serverTimestamp(),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
  };

  return (
    <Container>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
          name: 'Motorist',
        }}
      />
    </Container>
  );
};

export default ChatScreen;
