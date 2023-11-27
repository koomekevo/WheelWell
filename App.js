import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screen/Auth/register/loginScreen';
import RegisterScreen from './src/screen/Auth/register/register';
import HomeScreen from './src/screen/Home/HomeScreen';
import RequestScreen from './src/screen/request/RequestScreen'; 
import ChatScreen from './src/screen/chat/ChatScreen';
import Setting from './src/screen/setting/Setting';
import ProfileSetting from './src/screen/Profilesetting/ProfileSetting';
import PasswordChange from './src/screen/Auth/register/PasswordChange';
const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

const SettingStackScreen = () => (
  <SettingStack.Navigator>
    <SettingStack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
    <SettingStack.Screen name="ChangePassword" component={PasswordChange} options={{ headerShown: false }} />
    <SettingStack.Screen name="ProfileSetting" component={ProfileSetting} options={{ headerShown: false }}/>
  </SettingStack.Navigator>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(false);
  }, []);

  const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login">
        {props => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );

  const MainAppTabs = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Request') {
            iconName = focused ? 'ios-hand-left' : 'ios-hand-left-outline';
          } else if (route.name === 'chat') {
            iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings-outline'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null, 
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Request" component={RequestScreen} />
      <Tab.Screen name="chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingStackScreen} /> 
    </Tab.Navigator>
  );
  
  

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainAppTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default App;
