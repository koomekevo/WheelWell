// src/navigation/AppNavigator.js

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MotoristHomeScreen from "../screens/Home/MotoristHomeScreen"; // Import your screen components
import MechanicHomeScreen from "../screens/Home/MechanicHomeScreen"; // Import your screen components

const AppNavigator = createStackNavigator(
  {
    MotoristHome: { screen: MotoristHomeScreen },
    MechanicHome: { screen: MechanicHomeScreen },
    // Add more screens and configurations as needed
  },
  {
    initialRouteName: "MotoristHome", // Set the initial route
  }
);

export default createAppContainer(AppNavigator);
