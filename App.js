// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/HomeScreen";
import MechanicListScreen from "./screens/MechanicListScreen";
import MotoristProfileScreen from "./screens/MotoristProfileScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MechanicList"
          component={MechanicListScreen}
          options={{
            tabBarLabel: "Mechanics",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wrench" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MotoristProfile"
          component={MotoristProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
