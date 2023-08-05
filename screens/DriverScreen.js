// screens/DriverScreen.js
import React, { useState } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import firebase from "firebase/app";
import "firebase/auth";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ButtonContainer = styled.View`
  margin-top: 10px;
`;

const DriverScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  const sendVerificationCode = async () => {
    try {
      const confirmation = await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmation.verificationId);
      console.log("Verification code sent:", confirmation);
    } catch (error) {
      console.log("Error sending verification code:", error);
    }
  };

  const signInWithVerificationCode = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      console.log("Signed in with phone number");
      // Perform navigation or other actions upon successful sign-in
    } catch (error) {
      console.log("Error signing in with verification code:", error);
      Alert.alert("Error", "Invalid verification code");
    }
  };

  return (
    <Container>
      <Title>Driver Dashboard</Title>
      <Input
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send Verification Code" onPress={sendVerificationCode} />
      <ButtonContainer>
        <Input
          placeholder="Verification Code"
          value={verificationCode}
          onChangeText={setVerificationCode}
        />
        <Button title="Sign In" onPress={signInWithVerificationCode} />
      </ButtonContainer>
      {/* Add driver-specific components and functionalities */}
    </Container>
  );
};

export default DriverScreen;
