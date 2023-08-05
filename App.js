import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MechanicScreen from "./screens/MechanicScreen";
import DriverScreen from "./screens/DriverScreen";
import { initializeApp } from "firebase/app";
import styled from "styled-components/native";
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

const App = () => {
  useEffect(() => {
    // Initialize Firebase (if not already initialized)
    const app = initializeApp(firebaseConfig);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mechanic" component={MechanicScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        {/* Add other screens and navigation options */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
