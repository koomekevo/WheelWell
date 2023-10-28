import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const MapViewContainer = styled.View`
  width: 90%;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const RefreshButton = styled.Button`
  width: 90%;
`;

const MapScreen = () => {
  const [mechanicLocations, setMechanicLocations] = useState([]);
  const defaultLocation = { latitude: -1.2921, longitude: 36.8219 }; // Nairobi, Kenya coordinates

  useEffect(() => {
    // Add logic to fetch mechanic locations from the backend
    fetch('http://your-backend-url/api/mechanic-locations', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMechanicLocations(data); // Assuming the response contains an array of mechanic locations
      })
      .catch((error) => {
        console.error('Error fetching mechanic locations:', error);
      });
  }, []);

  const handleRefresh = () => {
    // Add logic to refresh the map here
  };

  return (
    <Container>
      <MapViewContainer>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            ...defaultLocation,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {mechanicLocations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={`Mechanic ${index + 1}`}
            />
          ))}
        </MapView>
      </MapViewContainer>
      <RefreshButton title="Refresh Map" onPress={handleRefresh} />
    </Container>
  );
};

export default MapScreen;
