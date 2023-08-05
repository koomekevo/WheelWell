import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MechanicScreen from "./screens/MechanicScreen";
import DriverScreen from "./screens/DriverScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { initializeApp } from "firebase/app";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Mechanic"
          component={MechanicScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="build" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Driver"
          component={DriverScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="car" color={color} size={size} />
            ),
          }}
        />
        {/* Add other tab screens and navigation options */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
