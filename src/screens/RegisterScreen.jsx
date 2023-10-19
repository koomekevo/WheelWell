import React, { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RegisterText = styled.Text`
  padding-bottom: 15px;
  font-size: 20px;
`;

const AuthInput = styled(TextInput)`
  width: 80%;
  padding: 10px;
  margin: 15px;
  border: 2px solid #000;
`;

const AuthButton = styled(Button)`
  width: 80%;
`;

const LoginLinkText = styled.Text`
  padding-top: 15px;
`;

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Implement registration logic here
  };

  return (
    <Container>
      <RegisterText>Register Account</RegisterText>
      <AuthInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <AuthInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AuthInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      <AuthButton title="Register" onPress={() => navigation.navigate("HomeScreen")} />
      <LoginLinkText onPress={() => navigation.navigate("LoginScreen")}>
        Have an account? Login here
      </LoginLinkText>
    </Container>
  );
};

export default RegisterScreen;
