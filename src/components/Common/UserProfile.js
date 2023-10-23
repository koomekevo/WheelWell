import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Section = styled.View`
  margin-bottom: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProfileItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProfileItemLabel = styled.Text`
  font-size: 16px;
`;

const ProfileItemValue = styled.Text`
  font-size: 16px;
  color: #007bff;
`;

const UserProfile = ({ user, onLogout }) => {
  return (
    <Container>
      <Section>
        <SectionTitle>Profile Settings</SectionTitle>
        <ProfileItem>
          <ProfileItemLabel>Name:</ProfileItemLabel>
          <ProfileItemValue>{user.name}</ProfileItemValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemLabel>Email:</ProfileItemLabel>
          <ProfileItemValue>{user.email}</ProfileItemValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemLabel>User Type:</ProfileItemLabel>
          <ProfileItemValue>{user.userType}</ProfileItemValue>
        </ProfileItem>
      </Section>
      <TouchableOpacity onPress={onLogout}>
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default UserProfile;
