import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import UserProfile from "../../components/Common/UserProfile"; // Import your UserProfile component
import { fetchMechanicProfile } from "../../actions/userActions"; // Import your action

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const MechanicProfileScreen = () => {
  const dispatch = useDispatch();
  const mechanicProfile = useSelector((state) => state.user.mechanicProfile);

  useEffect(() => {
    // Fetch the mechanic's profile from the backend using Redux
    dispatch(fetchMechanicProfile());
  }, [dispatch]);

  return (
    <Container>
      <ScrollView>
        <UserProfile profile={mechanicProfile} />

        <Button
          title="Edit Profile"
          onPress={() => {
            // Handle navigating to the edit profile screen here
          }}
        />
      </ScrollView>
    </Container>
  );
};

export default MechanicProfileScreen;
