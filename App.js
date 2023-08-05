// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MechanicScreen from './screens/MechanicScreen';
import DriverScreen from './screens/DriverScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mechanic" component={MechanicScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        {/* Add other screens and navigation options */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
