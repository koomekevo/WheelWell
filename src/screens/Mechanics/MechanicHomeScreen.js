import React, { useEffect } from "react";
import { View, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { fetchDriverRequests } from "../../actions/requestActions"; // Import your action
import Map from "../../components/Home/Mechanics/Map"; // Import your Map component

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
`;

const MechanicHomeScreen = () => {
  const dispatch = useDispatch();
  const driverRequests = useSelector((state) => state.request.driverRequests);

  useEffect(() => {
    // Fetch driver requests from the backend using Redux
    dispatch(fetchDriverRequests());
  }, [dispatch]);

  return (
    <Container>
      <ScrollView>
        <SectionTitle>Driver Requests</SectionTitle>
        <Map data={driverRequests} />

        <Button
          title="Accept Request"
          onPress={() => {
            // Handle accepting a request here
          }}
        />
      </ScrollView>
    </Container>
  );
};

export default MechanicHomeScreen;
