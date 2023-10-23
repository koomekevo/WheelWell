import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const ChatScreen = () => {
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  );
};

const RequestsScreen = () => {
  return (
    <View>
      <Text>Requests Screen</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

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
          component={HomeScreen}
          options={{ tabBarLabel: "Home" }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{ tabBarLabel: "Chat" }}
        />
        <Tab.Screen
          name="Requests"
          component={RequestsScreen}
          options={{ tabBarLabel: "Requests" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Profile" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
