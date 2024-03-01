import React, { useState, useEffect } from "react";
import { View, Button, FlatList } from "react-native";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";

const Container = styled.View`
  flex: 1;
`;

const Home = ({ navigation, route }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Fetch markers based on user type
    const fetchedMarkers =
      route.params.userType === "Driver"
        ? getMechanicsMarkers()
        : getDriversMarkers();
    setMarkers(fetchedMarkers);
  }, [route.params.userType]);

  const getMechanicsMarkers = () => {
    // Simulate fetching mechanics' locations from backend
    const mechanics = [
      { id: 1, coordinate: { latitude: 37.78825, longitude: -122.4324 } },
      { id: 2, coordinate: { latitude: 37.75825, longitude: -122.4424 } },
      { id: 3, coordinate: { latitude: 37.77825, longitude: -122.4224 } },
    ];
    return mechanics.map((mechanic) => ({
      id: mechanic.id,
      coordinate: mechanic.coordinate,
      title: `Mechanic ${mechanic.id}`,
    }));
  };

  const getDriversMarkers = () => {
    // Simulate fetching drivers' locations from backend
    const drivers = [
      { id: 1, coordinate: { latitude: 37.79825, longitude: -122.4324 } },
      { id: 2, coordinate: { latitude: 37.76825, longitude: -122.4424 } },
      { id: 3, coordinate: { latitude: 37.78825, longitude: -122.4124 } },
    ];
    return drivers.map((driver) => ({
      id: driver.id,
      coordinate: driver.coordinate,
      title: `Driver ${driver.id}`,
    }));
  };

  return (
    <Container>
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
          />
        ))}
      </MapView>
      <Button
        title="Refresh"
        onPress={() => console.log("Refresh button pressed")}
      />
    </Container>
  );
};

export default Home;
