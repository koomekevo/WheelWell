// screens/MechanicScreen.js
import React, { useRef, useState } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { config } from "../firebaseConfig"; // Import Firebase config

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

const MechanicScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerificationCode = () => {
    const confirmation = firebase.auth().PhoneAuthProvider();
    confirmation
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
    setVerificationId(confirmation.verificationId);
  };

  const confirmCode = () => {
    const credential = firebase
      .auth()
      .PhoneAuthProvider.credential(verificationId, verificationCode);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setVerificationCode("").catch((error) => {
          alert(error);
          Alert.alert("Login Successful. Welcome To Dashboard");
        });
      });
  };

  return (
    <Container>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={config}
      />
      <Title>Mechanic Sign In</Title>
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
        <Button title="Sign In" onPress={confirmCode} />
      </ButtonContainer>
      {/* Add mechanic-specific components and functionalities */}
    </Container>
  );
};

export default MechanicScreen;
