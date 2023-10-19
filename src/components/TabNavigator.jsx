import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"; // Your HomeScreen component showing nearby mechanics
import ChatScreen from "../screens/ChatScreen"; // Create this component for chatting with mechanics
import SearchScreen from "../screens/SearchScreen"; // Create this component for searching mechanics
import { MaterialIcons } from "@expo/vector-icons"; // For tab icons
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Chat") {
            iconName = focused ? "chat" : "chat";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          }

          return <TabBarIcon name={iconName} focused={focused} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

const TabBarIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${({ focused }) => (focused ? "blue" : "gray")};
`;

export default TabNavigator;
