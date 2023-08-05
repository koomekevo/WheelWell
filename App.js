import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MechanicScreen from "./screens/MechanicScreen";
import DriverScreen from "./screens/DriverScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { initializeApp } from "firebase/app";
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCdCEXDtaG_ruG7rC9n5WVzg0Phywnp_9c",
  authDomain: "wheelwell-cb4de.firebaseapp.com",
  projectId: "wheelwell-cb4de",
  storageBucket: "wheelwell-cb4de.appspot.com",
  messagingSenderId: "120989154090",
  appId: "1:120989154090:web:95ff157cf445a8c2ff3c53",
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    // Initialize Firebase (if not already initialized)
    const app = initializeApp(firebaseConfig);
  }, []);

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
