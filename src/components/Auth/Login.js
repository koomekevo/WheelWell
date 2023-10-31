import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions'; // Import your login action

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

const LinkText = styled.Text`
  margin-top: 10px;
`;

const Login = ({ login, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation if needed
    const userData = { email, password };

    // Dispatch the login action
    login(userData)
      .then(() => {
        // Redirect to the desired screen after successful login
        // For example, you can navigate to the HomeScreen
        navigation.navigate('HomeScreen');
      })
      .catch((error) => {
        // Handle login error (e.g., display an error message)
        console.error('Login failed:', error);
      });
  };

  return (
    <Container>
      <Text>Login</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')} // Navigate to the Register screen
      >
        <LinkText>Don't have an account? Register here</LinkText>
      </TouchableOpacity>
    </Container>
  );
};

// Connect the component to Redux
const mapStateToProps = (state) => ({
  // Map your state to component props if needed
});

export default connect(mapStateToProps, { login })(Login);
