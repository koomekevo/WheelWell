import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";
import { Auth } from "aws-amplify";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.View`
  width: 80%;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      // Navigate to the appropriate screen after successful login
      // For example:
      // navigation.navigate('Home');
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      {errorMessage ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null}
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonContainer>
        <Button title="Login" onPress={handleLogin} />
      </ButtonContainer>
      <Text>
        Don't have an account?{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
    </Container>
  );
};

export default Login;
