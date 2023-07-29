// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import MechanicsScreen from './screens/MechanicsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Auth') {
              iconName = focused ? 'log-in' : 'log-in-outline';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Mechanics') {
              iconName = focused ? 'map' : 'map-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mechanics" component={MechanicsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
