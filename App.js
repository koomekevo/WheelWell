// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import MechanicListScreen from "./screens/MechanicListScreen";
import MechanicProfileScreen from "./screens/MechanicProfileScreen";
import MotoristProfileScreen from "./screens/MotoristProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MechanicList" component={MechanicListScreen} />
        <Stack.Screen
          name="MechanicProfile"
          component={MechanicProfileScreen}
        />
        <Stack.Screen
          name="MotoristProfile"
          component={MotoristProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
