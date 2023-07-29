// screens/HomeScreen.js
import React from 'react';
import { Container, Content, View, Text } from 'native-base';

const HomeScreen = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to WheelWell App!</Text>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
