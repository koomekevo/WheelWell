// src/components/Auth/Register.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Picker } from "react-native";
import axios from "axios"; // Import the axios library

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Motorist"); // Default to 'Motorist'

  const handleRegistration = async () => {
    try {
      // Make a POST request to your backend registration endpoint
      const response = await axios.post("your_backend_registration_endpoint", {
        email,
        password,
        userType,
      });

      if (response.data.success) {
        // Registration successful, you can navigate to the login screen or perform other actions
        // You might also want to store user data in Redux state or AsyncStorage
        // For navigation, you can use React Navigation
        // navigation.navigate('Login'); // Replace 'Login' with your actual login screen name
      } else {
        // Handle registration failure, e.g., display an error message
        Alert.alert("Registration Failed", response.data.message);
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      Alert.alert("Error", "An error occurred while registering.");
    }
  };

  return (
    <View>
      <Text>Register</Text>
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
      <Text>Choose User Type:</Text>
      <Picker
        selectedValue={userType}
        onValueChange={(value) => setUserType(value)}
      >
        <Picker.Item label="Motorist" value="Motorist" />
        <Picker.Item label="Mechanic" value="Mechanic" />
      </Picker>
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default Register;
