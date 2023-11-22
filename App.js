import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screen/Auth/register/loginScreen';
import RegisterScreen from './src/screen/Auth/register/register';
import HomeScreen from './src/screen/Home/HomeScreen';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    // If yes, set isAuthenticated to true
    const checkAuthStatus = async () => {
      // Your logic to check for authentication
      // For example, check a token in async storage or your app's state
    };

    checkAuthStatus();
  }, []);

  // AuthStack that includes Login and Register
  const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );

  // MainAppTabs that includes Home and Profile
  const MainAppTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={LoginScreen} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainAppTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default App;
