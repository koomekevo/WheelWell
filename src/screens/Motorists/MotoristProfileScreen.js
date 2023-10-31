import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { fetchMotoristProfile } from "../actions/userActions"; // Import your action
import UserProfile from "../components/Common/UserProfile";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
`;

const MotoristProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const motoristProfile = useSelector((state) => state.user.motoristProfile);

  useEffect(() => {
    // Fetch the motorist's profile data from the backend using Redux
    dispatch(fetchMotoristProfile());
  }, [dispatch]);

  const handleEditProfile = () => {
    navigation.navigate("EditProfile"); // Replace with your actual screen name for editing the profile
  };

  return (
    <Container>
      <ScrollView>
        <SectionTitle>Profile Settings</SectionTitle>
        <UserProfile data={motoristProfile} />

        <Button title="Edit Profile" onPress={handleEditProfile} />
      </ScrollView>
    </Container>
  );
};

export default MotoristProfileScreen;
