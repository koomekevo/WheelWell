import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";

// Import screens
import Home from "../components/Home";
import Chat from "../components/Chat";
import Favourites from "../components/Favourites";
import Profile from "../components/Profile";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Styled components
const TabBarContainer = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #ccc;
`;

const TabBarButton = styled.TouchableOpacity`
  flex: 1;
  padding: 15px 0;
  align-items: center;
`;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
