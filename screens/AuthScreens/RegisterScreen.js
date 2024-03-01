import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Register from "../../components/Auth/Register"; // Importing the Register component

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Register</Title>
      <Register navigation={navigation} />
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

export default RegisterScreen;
