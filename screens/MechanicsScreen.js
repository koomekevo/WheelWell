// screens/MechanicsScreen.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Icon, Left, Right, Title, List, ListItem, Text } from 'native-base';
import { Location } from 'expo';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';

const MechanicsScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyMechanics, setNearbyMechanics] = useState([]);

  useEffect(() => {
    // Fetch user's location and nearby mechanics
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setUserLocation(location.coords);

    fetchNearbyMechanics(location.coords);
  };

  const fetchNearbyMechanics = async (coords) => {
    try {
      // Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API
      const response = await axios.get(`YOUR_BACKEND_API_URL/mechanics`, {
        params: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
      });

      setNearbyMechanics(response.data);
    } catch (error) {
      console.error('Failed to fetch nearby mechanics:', error);
    }
  };

  return (
    <Container>
      <Header>
        <Left>
          <Icon name="menu" />
        </Left>
        <Title>Wheel Well</Title>
        <Right />
      </Header>
      <Content contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {userLocation && (
            <MapView
              style={{ flex: 1 }}
              region={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {/* User marker */}
              <Marker coordinate={userLocation} title="Your Location" />

              {/* Markers for nearby mechanics */}
              {nearbyMechanics.map((mechanic) => (
                <Marker
                  key={mechanic._id}
                  coordinate={{
                    latitude: mechanic.latitude,
                    longitude: mechanic.longitude,
                  }}
                  title={mechanic.name}
                  description={`Contact: ${mechanic.contact}, Expertise: ${mechanic.expertise}`}
                />
              ))}
            </MapView>
          )}
        </View>
        <List>
          {nearbyMechanics.map((mechanic) => (
            <ListItem key={mechanic._id}>
              <Text>{mechanic.name}</Text>
              <Text note>{mechanic.contact}</Text>
              <Text note>{mechanic.expertise}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default MechanicsScreen;
