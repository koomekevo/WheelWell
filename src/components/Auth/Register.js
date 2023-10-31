import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { register } from "../../actions/authActions"; // Import your register action

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Dropdown = styled.Picker`
  width: 80%;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LinkText = styled.Text`
  margin-top: 10px;
`;

const Register = ({ register, navigation }) => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("motorist"); // Default to "motorist" role

  const handleRegister = () => {
    // Perform validation if needed
    if (password !== confirmPassword) {
      // Handle password mismatch
      console.error("Passwords do not match");
      return;
    }

    const userData = { names, email, password, role };

    // Dispatch the register action
    register(userData)
      .then(() => {
        // Redirect to the appropriate screen based on the user's role
        if (role === "motorist") {
          navigation.navigate("MotoristHomeScreen");
        } else if (role === "mechanic") {
          navigation.navigate("MechanicHomeScreen");
        }
      })
      .catch((error) => {
        // Handle registration error (e.g., display an error message)
        console.error("Registration failed:", error);
      });
  };

  return (
    <Container>
      <Text>Register</Text>
      <Input placeholder="Full Names" value={names} onChangeText={setNames} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Dropdown
        selectedValue={role}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
      >
        <Dropdown.Item label="Motorist" value="motorist" />
        <Dropdown.Item label="Mechanic" value="mechanic" />
      </Dropdown>
      <Button title="Register" onPress={handleRegister} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")} // Navigate to the Login screen
      >
        <LinkText>Already have an account? Login here</LinkText>
      </TouchableOpacity>
    </Container>
  );
};

// Connect the component to Redux
const mapStateToProps = (state) => ({
  // Map your state to component props if needed
});

export default connect(mapStateToProps, { register })(Register);
