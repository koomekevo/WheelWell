import React from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import Profile from "../../components/Profile"; // Importing the Profile component

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ProfileScreen = () => {
  return (
    <Container>
      <Title>Profile</Title>
      <Profile />
    </Container>
  );
};

export default ProfileScreen;
