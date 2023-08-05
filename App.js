import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import MechanicsScreen from "./screens/MechanicsScreen";
import MechanicSignUpScreen from "./screens/MechanicSignUpScreen";
import DriverSignUpScreen from "./screens/DriverSignUpScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Use Stack.Navigator to create a stack of screens */}
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Create a separate TabNavigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* Add your tab screens */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Mechanics" component={MechanicsScreen} />
      <Tab.Screen name="MechanicSignUp" component={MechanicSignUpScreen} />
      <Tab.Screen name="DriverSignUp" component={DriverSignUpScreen} />
      {/* Add more screens as needed */}
    </Tab.Navigator>
  );
};

export default App;
