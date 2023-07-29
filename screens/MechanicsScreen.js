// screens/MechanicsScreen.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Container, Content, Header, Icon, Left, Right, Title, List, ListItem, Text } from 'native-base';
import { Location } from 'expo';
import axios from 'axios';

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
        <View>
          {/* Implement your map to display userLocation and nearbyMechanics */}
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
