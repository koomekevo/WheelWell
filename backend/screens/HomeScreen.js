// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, Container, Content, Header, Icon, Left, Right, Title, List, ListItem, Text } from 'native-base';
import { Location } from 'expo';
import axios from 'axios';

const HomeScreen = () => {
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
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Title>WheelWell</Title>
        <Right />
      </Header>
      <Content contentContainerStyle={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, height: 400 }}
          region={{
            latitude: userLocation ? userLocation.latitude : 37.78825,
            longitude: userLocation ? userLocation.longitude : -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {nearbyMechanics.map((mechanic) => (
            <Marker
              key={mechanic._id}
              coordinate={{ latitude: mechanic.location.coordinates[1], longitude: mechanic.location.coordinates[0] }}
              title={mechanic.name}
            />
          ))}
        </MapView>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 16,
            paddingTop: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            elevation: 4,
            marginTop: -30,
          }}
        >
          <List>
            {nearbyMechanics.map((mechanic) => (
              <ListItem key={mechanic._id} style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{mechanic.name}</Text>
                {/* Add more information about the mechanic here */}
              </ListItem>
            ))}
          </List>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
