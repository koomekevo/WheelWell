// src/components/Common/BottomTabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsMechanic } from "../../hooks/auth"; // You may need to create an auth hook to check if the user is a mechanic

import MotoristHomeScreen from "../../screens/Motorists/MotoristHomeScreen";
import MotoristRequestListScreen from "../../screens/Motorists/MotoristRequestListScreen";
import MotoristChatScreen from "../../screens/Motorists/MotoristChatScreen";
import MotoristProfileScreen from "../../screens/Motorists/MotoristProfileScreen";

import MechanicHomeScreen from "../../screens/Mechanics/MechanicHomeScreen";
import MechanicRequestListScreen from "../../screens/Mechanics/MechanicRequestListScreen";
import MechanicChatScreen from "../../screens/Mechanics/MechanicChatScreen";
import MechanicProfileScreen from "../../screens/Mechanics/MechanicProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const isMechanic = useIsMechanic(); // Use a function to determine if the user is a mechanic

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={isMechanic ? MechanicHomeScreen : MotoristHomeScreen}
      />
      <Tab.Screen
        name="Requests"
        component={
          isMechanic ? MechanicRequestListScreen : MotoristRequestListScreen
        }
      />
      <Tab.Screen
        name="Chats"
        component={isMechanic ? MechanicChatScreen : MotoristChatScreen}
      />
      <Tab.Screen
        name="Profile"
        component={isMechanic ? MechanicProfileScreen : MotoristProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
