import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { fetchMotoristRequests } from "../../actions/requestActions"; // Import your action
import RequestList from "../../components/Home/Motorists/RequestList"; // Import your RequestList component

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
`;

const MotoristRequestListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const motoristRequests = useSelector(
    (state) => state.request.motoristRequests
  );

  useEffect(() => {
    // Fetch the motorist's requests from the backend using Redux
    dispatch(fetchMotoristRequests());
  }, [dispatch]);

  return (
    <Container>
      <ScrollView>
        <SectionTitle>Requests</SectionTitle>
        <RequestList data={motoristRequests} />

        <Button
          title="Create New Request"
          onPress={() => {
            navigation.navigate("CreateRequest"); // Replace with your actual screen name for creating a request
          }}
        />
      </ScrollView>
    </Container>
  );
};

export default MotoristRequestListScreen;
