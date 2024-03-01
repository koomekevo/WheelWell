import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Profile = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = () => {
    // Basic validation
    if (!password || !newPassword || !confirmNewPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    // Handle change password logic here
    console.log("Change password:", password, newPassword, confirmNewPassword);
    // Clear input fields and error message
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setErrorMessage("");
  };

  const handleChangeProfilePicture = () => {
    // Handle change profile picture logic here
    console.log("Change profile picture");
  };

  return (
    <Container>
      <Title>Profile</Title>
      <TextInput
        placeholder="Current Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: "80%" }}
      />
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderWidth: 1, padding: 10, width: "80%" }}
      />
      <TextInput
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry
        style={{ marginBottom: 20, borderWidth: 1, padding: 10, width: "80%" }}
      />
      {errorMessage ? (
        <Text style={{ color: "red", marginBottom: 10 }}>{errorMessage}</Text>
      ) : null}
      <Button title="Change Password" onPress={handleChangePassword} />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Change Profile Picture"
          onPress={handleChangeProfilePicture}
        />
      </View>
    </Container>
  );
};

export default Profile;
