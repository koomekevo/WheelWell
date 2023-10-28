import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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

const UserProfileScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation hook

  const handleEditProfile = () => {
    // Add logic to fetch user data from the backend
    fetch("http://your-backend-url/api/user", {
      method: "GET",
      headers: {
        Authorization: "Bearer your_jwt_token", // Replace with a valid JWT token
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data (e.g., update the user's information)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
    // Then navigate to the edit profile screen
    navigation.navigate("EditProfile"); // Replace "EditProfile" with the actual name of your edit profile screen
  };

  return (
    <Container>
      <Title>User Profile</Title>

      <Section>
        <SectionTitle>Profile Settings</SectionTitle>
        <ProfileItem>
          <ProfileItemLabel>Name:</ProfileItemLabel>
          <ProfileItemValue>John Doe</ProfileItemValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemLabel>Email:</ProfileItemLabel>
          <ProfileItemValue>johndoe@example.com</ProfileItemValue>
        </ProfileItem>
        <ProfileItem>
          <ProfileItemLabel>User Type:</ProfileItemLabel>
          <ProfileItemValue>Motorist</ProfileItemValue>
        </ProfileItem>
      </Section>

      <Button title="Edit Profile" onPress={handleEditProfile} />
    </Container>
  );
};

export default UserProfileScreen;
