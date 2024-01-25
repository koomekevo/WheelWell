// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GiftedChat } from "react-native-gifted-chat";
import firestore from "@react-native-firebase/firestore";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 80%;
`;

const ChatContainer = styled.View`
  height: 20%;
`;

const HomeScreen = ({ navigation }) => {
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("mechanics")
      .onSnapshot((snapshot) => {
        const newMechanics = snapshot.docs.map((doc) => doc.data());
        setMechanics(newMechanics);
      });

    return () => unsubscribe();
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <Container>
      <Text>Home Screen</Text>
      <MapContainer>
        <MapView
          style={{ flex: 1, width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {mechanics.map((mechanic) => (
            <Marker
              key={mechanic.id}
              coordinate={{
                latitude: mechanic.latitude,
                longitude: mechanic.longitude,
              }}
              title={mechanic.name}
              onPress={() => setSelectedMechanic(mechanic)}
            />
          ))}
        </MapView>
      </MapContainer>
      {selectedMechanic && (
        <ChatContainer>
          <Text>Selected Mechanic: {selectedMechanic.name}</Text>
          <Button
            title="Start Chat"
            onPress={() =>
              navigation.navigate("Chat", { mechanic: selectedMechanic })
            }
          />
        </ChatContainer>
      )}
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
};

export default HomeScreen;
