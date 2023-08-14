import { View, Text } from "react-native";
import React from "react";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fav" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
