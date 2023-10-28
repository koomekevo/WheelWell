// src/components/Auth/Login.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios"; // Import the axios library

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Make a POST request to your backend login endpoint
      const response = await axios.post("your_backend_login_endpoint", {
        email,
        password,
      });

      if (response.data.success) {
        // Login successful, you can navigate to the user's dashboard or perform other actions
        // You might also want to store user data in Redux state or AsyncStorage
        // For navigation, you can use React Navigation
        // navigation.navigate('Dashboard'); // Replace 'Dashboard' with your actual screen name
      } else {
        // Handle login failure, e.g., display an error message
        Alert.alert("Login Failed", response.data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      Alert.alert("Error", "An error occurred while logging in.");
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
