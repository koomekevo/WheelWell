import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InputContainer = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RegisterButton = styled.Button`
  width: 80%;
`;

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    // Add your registration logic here
  };

  return (
    <Container>
      <Title>Register</Title>
      <InputContainer>
        <Input placeholder="Name" value={name} onChangeText={setName} />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </InputContainer>
      <RegisterButton title="Register" onPress={handleRegistration} />
    </Container>
  );
};

export default RegisterScreen;
