import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen"; // Your HomeScreen component showing nearby mechanics
import ChatScreen from "./src/screens/ChatScreen"; // Create this component for chatting with mechanics
import SearchScreen from "./src/screens/SearchScreen"; // Create this component for searching mechanics
import LoginScreen from "./src/screens/LoginScreen"; // Create this component for login screen
import RegisterScreen from "./src/screens/RegisterScreen"; // Create this component for register screen

import { MaterialIcons } from "@expo/vector-icons"; // For tab icons
import styled from "styled-components/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TabBarIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${({ focused }) => (focused ? "blue" : "gray")};
`;

export default App;
