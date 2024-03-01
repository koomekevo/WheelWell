import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import LoginScreen from "./screens/AuthScreens/LoginScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import HomeScreen from "./screens/MainScreens/HomeScreen";
import ChatScreen from "./screens/MainScreens/ChatScreen";
import FavouritesScreen from "./screens/MainScreens/FavouritesScreen";
import ProfileScreen from "./screens/MainScreens/ProfileScreen";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Container>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </Container>
    </NavigationContainer>
  );
};

export default App;
