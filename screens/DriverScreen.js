// screens/DriverScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DriverScreen = () => {
  const navigation = useNavigation();

  const goToMechanicScreen = () => {
    navigation.navigate('Mechanic');
  }

  return (
    <View>
      <Text>Driver Dashboard</Text>
      <Button title="Go to Mechanic" onPress={goToMechanicScreen} />
      {/* Add driver-specific components and functionalities */}
    </View>
  );
}

export default DriverScreen;
