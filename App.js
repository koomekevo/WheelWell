import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux"; // Assuming you're using Redux for state management
import store from "./src/store"; // Import your Redux store

// Import your screen components
import MotoristHomeScreen from "./src/screens/Motorists/MotoristHomeScreen";
import MotoristChatScreen from "./src/screens/Motorists/MotoristChatScreen";
import MotoristRequestListScreen from "./src/screens/Motorists/MotoristRequestListScreen";
import MotoristProfileScreen from "./src/screens/Motorists/MotoristProfileScreen";

import MechanicHomeScreen from "./src/screens/Mechanics/MechanicHomeScreen";
import MechanicChatScreen from "./src/screens/Mechanics/MechanicChatScreen";
import MechanicRequestListScreen from "./src/screens/Mechanics/MechanicRequestListScreen";
import MechanicProfileScreen from "./src/screens/Mechanics/MechanicProfileScreen";

import LoginScreen from "./src/screens/Auth/LoginScreen";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthScreens = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

const HomeScreens = () => (
  <Tab.Navigator>
    <Tab.Screen name="Motorist Home" component={MotoristHomeScreen} />
    <Tab.Screen name="Motorist Chat" component={MotoristChatScreen} />
    <Tab.Screen
      name="Motorist Requests"
      component={MotoristRequestListScreen}
    />
    <Tab.Screen name="Motorist Profile" component={MotoristProfileScreen} />
    <Tab.Screen name="Mechanic Home" component={MechanicHomeScreen} />
    <Tab.Screen name="Mechanic Chat" component={MechanicChatScreen} />
    <Tab.Screen
      name="Mechanic Requests"
      component={MechanicRequestListScreen}
    />
    <Tab.Screen name="Mechanic Profile" component={MechanicProfileScreen} />
  </Tab.Navigator>
);

const App = () => {
  const [user, setUser] = useState(null); // User authentication state

  useEffect(() => {
    // Check user authentication status here
    const isAuthenticated = checkUserAuthentication(); // Replace with your actual authentication logic
    if (isAuthenticated) {
      setUser({
        /* user data */
      });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        {user ? <HomeScreens /> : <AuthScreens />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
