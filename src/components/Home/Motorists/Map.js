// src/components/Home/Map.js

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps"; // Import the mapping library

const Map = () => {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    // Fetch real-time mechanics' locations from the backend
    const fetchMechanicsLocations = async () => {
      // Make a request to your backend API to fetch mechanics' locations
      // Replace 'your_backend_mechanics_locations_endpoint' with the actual endpoint
      try {
        const response = await fetch(
          "your_backend_mechanics_locations_endpoint"
        );
        const data = await response.json();

        if (response.ok) {
          setMechanics(data);
        } else {
          console.error("Failed to fetch mechanics locations.");
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching mechanics locations:",
          error
        );
      }
    };

    // Call the function to fetch mechanics' locations
    fetchMechanicsLocations();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 0, // Replace with your default latitude
          longitude: 0, // Replace with your default longitude
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {mechanics.map((mechanic) => (
          <Marker
            key={mechanic.id}
            coordinate={{
              latitude: mechanic.latitude,
              longitude: mechanic.longitude,
            }}
            title={mechanic.name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
