import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios"; // Import axios

// Import your screen components
import MapScreen from "./src/Home/MapScreen";
import ChatListScreen from "./src/screens/Chat/ChatListScreen";
import RequestListScreen from "./src/screens/Home/RequestListScreen";
import UserProfileScreen from "./src/Common/UserProfileScreen";
import BottomTabNavigator from "./src/Common/BottomTabNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={MapScreen} />
  </Stack.Navigator>
);

const ChatStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Chat" component={ChatListScreen} />
  </Stack.Navigator>
);

const RequestsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Requests" component={RequestListScreen} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={UserProfileScreen} />
  </Stack.Navigator>
);

const App = () => {
  // Define state to store data from the backend
  const [data, setData] = useState([]);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("YOUR_BACKEND_URL/api/endpoint"); // Replace with your actual API endpoint
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the app loads
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <BottomTabNavigator {...props} />}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Requests" component={RequestsStack} />
        <Tab.Screen
          name="Profile"
          component={() => <UserProfileScreen data={data} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
