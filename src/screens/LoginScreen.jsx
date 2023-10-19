import React, { useState } from "react";
import { Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.Text`
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

const RegisterLinkText = styled.Text`
  padding-top: 15px;
`;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <Container>
      <LoginText>Login Screen</LoginText>
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
      <AuthButton title="Log In" onPress={handleLogin} />
      <RegisterLinkText onPress={() => navigation.navigate("RegisterScreen")}>
        Don't have an account? Register here
      </RegisterLinkText>
    </Container>
  );
};

export default LoginScreen;
