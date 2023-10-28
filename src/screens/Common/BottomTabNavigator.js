import React from "react";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/Home/MapScreen"; // Import the correct screens
import ChatListScreen from "../screens/Chat/ChatListScreen";
import RequestListScreen from "../screens/Home/RequestListScreen";
import UserProfileScreen from "../screens/Common/UserProfileScreen";

const Tab = createBottomTabNavigator();

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const TabLabel = styled.Text`
  font-size: 18px;
`;

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen} // Link to the Home screen
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatListScreen} // Link to the Chat screen
          options={{ tabBarLabel: "Chat" }}
        />
        <Tab.Screen
          name="Requests"
          component={RequestListScreen} // Link to the Requests screen
          options={{ tabBarLabel: "Requests" }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfileScreen} // Link to the Profile screen
          options={{ tabBarLabel: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
