import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";

const Container = styled.View`
  flex: 1;
`;

const MapContainer = styled.View`
  flex: 1;
`;

const MarkerWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: ${({ isDriver }) => (isDriver ? "blue" : "red")};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const MarkerText = styled.Text`
  color: white;
  font-size: 16px;
`;

const MapViewComponent = ({ markers }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          coordinate={marker.coordinate}
          title={marker.title}
        >
          <MarkerWrapper isDriver={marker.isDriver}>
            <MarkerText>{marker.id}</MarkerText>
          </MarkerWrapper>
        </Marker>
      ))}
    </MapView>
  );
};

const MapViewScreen = ({ navigation }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Fetch markers from the backend
    const fetchedMarkers = [
      {
        id: 1,
        coordinate: { latitude: 37.78825, longitude: -122.4324 },
        isDriver: true,
      },
      {
        id: 2,
        coordinate: { latitude: 37.75825, longitude: -122.4424 },
        isDriver: false,
      },
      {
        id: 3,
        coordinate: { latitude: 37.77825, longitude: -122.4224 },
        isDriver: true,
      },
    ];
    setMarkers(fetchedMarkers);
  }, []);

  return (
    <Container>
      <MapContainer>
        <MapViewComponent markers={markers} />
      </MapContainer>
      <Button
        title="Refresh"
        onPress={() => console.log("Refresh button pressed")}
      />
    </Container>
  );
};

export default MapViewScreen;
