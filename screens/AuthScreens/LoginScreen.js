import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Login from "../../components/Auth/Login"; // Importing the Login component

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Title>Login</Title>
      <Login navigation={navigation} />
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

export default LoginScreen;
