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

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDriver, setIsDriver] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          "custom:isDriver": isDriver.toString(),
        },
      });
      // Navigate to the appropriate screen after successful registration
      // For example:
      // navigation.navigate('Login');
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Container>
      <Title>Register</Title>
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
      <Text>Are you a driver?</Text>
      <TextInput
        placeholder="Yes or No"
        value={isDriver ? "Yes" : "No"}
        onChangeText={(text) => setIsDriver(text.toLowerCase() === "yes")}
      />
      <ButtonContainer>
        <Button title="Register" onPress={handleRegister} />
      </ButtonContainer>
      <Text>
        Already have an account?{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </Container>
  );
};

export default Register;
