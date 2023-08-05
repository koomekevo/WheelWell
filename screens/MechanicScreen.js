// screens/MechanicScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MechanicScreen = () => {
  const navigation = useNavigation();

  const goToDriverScreen = () => {
    navigation.navigate('Driver');
  }

  return (
    <View>
      <Text>Mechanic Dashboard</Text>
      <Button title="Go to Driver" onPress={goToDriverScreen} />
      {/* Add mechanic-specific components and functionalities */}
    </View>
  );
}

export default MechanicScreen;
