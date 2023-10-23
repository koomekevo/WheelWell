import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Stack = createStackNavigator();

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const Header = styled.View`
  background-color: #007bff;
  padding: 20px;
`;

const HeaderText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const HomeScreen = () => (
  <Container>
    <Text>Home Screen</Text>
  </Container>
);

const ProfileScreen = () => (
  <Container>
    <Text>Profile Screen</Text>
  </Container>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => (
            <Header>
              <HeaderText>Home</HeaderText>
            </Header>
          ),
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => (
            <Header>
              <HeaderText>Profile</HeaderText>
            </Header>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
