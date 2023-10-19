import React from "react";
import { Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const MapContainer = styled.View`
  flex: 1;
`;

const HomeScreen = () => {
  const initialRegion = {
    latitude: 37.78825, // Set the initial latitude
    longitude: -122.4324, // Set the initial longitude
    latitudeDelta: 0.0922, // Set the zoom level
    longitudeDelta: 0.0421,
  };

  return (
    <Container>
      <MapContainer>
        <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Mechanic 1"
            description="Speciality: Engine Repair"
          />
          <Marker
            coordinate={{ latitude: 37.79825, longitude: -122.4424 }}
            title="Mechanic 2"
            description="Speciality: Brake Service"
          />
          {/* Add more markers for other mechanics */}
        </MapView>
      </MapContainer>
    </Container>
  );
};

export default HomeScreen;
