// src/components/Home/Map.js

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps"; // Import the mapping library

const Map = () => {
  const [driverLocations, setDriverLocations] = useState([]);

  useEffect(() => {
    // Fetch real-time driver locations from the backend
    const fetchDriverLocations = async () => {
      // Make a request to your backend API to fetch driver locations
      // Replace 'your_backend_driver_locations_endpoint' with the actual endpoint
      try {
        const response = await fetch("your_backend_driver_locations_endpoint");
        const data = await response.json();

        if (response.ok) {
          setDriverLocations(data);
        } else {
          console.error("Failed to fetch driver locations.");
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching driver locations:",
          error
        );
      }
    };

    // Call the function to fetch driver locations
    fetchDriverLocations();
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
        {driverLocations.map((driver) => (
          <Marker
            key={driver.id}
            coordinate={{
              latitude: driver.latitude,
              longitude: driver.longitude,
            }}
            title={driver.name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
