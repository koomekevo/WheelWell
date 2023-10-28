// src/components/Common/UserProfile.js

import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import axios from "axios"; // Import the axios library

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data from the backend when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get("your_backend_user_data_endpoint");

        if (response.data.success) {
          setUser(response.data.user);
        } else {
          Alert.alert("Error", "Failed to fetch user data.");
        }
      } catch (error) {
        Alert.alert("Error", "An error occurred while fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = async () => {
    // Send a request to update the user's profile on the backend
    try {
      const response = await axios.put(
        "your_backend_update_user_endpoint",
        user
      );

      if (response.data.success) {
        setIsEditing(false);
        Alert.alert("Success", "Profile updated successfully.");
      } else {
        Alert.alert("Error", "Failed to update profile.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while updating profile.");
    }
  };

  return (
    <View>
      <Text>User Profile</Text>
      <TextInput
        placeholder="Name"
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
        editable={isEditing}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        editable={isEditing}
      />
      {isEditing ? (
        <Button title="Save" onPress={handleEditProfile} />
      ) : (
        <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
      )}
    </View>
  );
};

export default UserProfile;
